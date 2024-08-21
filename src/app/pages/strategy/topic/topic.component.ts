import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ColumnModel } from '@models/core';
import { Topic } from '@models/strategy';
import { ActorHttpService } from '@services/strategy/actor-http.service';
import { DialogBoxComponent } from '@shared/components/dialog-box/dialog-box.component';
import { CREATED, messageBuilder, UPDATED, DELETED } from '@shared/consts/status.const';
import { DialogFlow } from '@shared/enums/dialogFlow.enum';
import { MessageServerity } from '@shared/enums/message-severity.enum';
import { convertAllErrors } from '@shared/utils/messages.util';
import { MessageService } from 'primeng/api';
import { TopicHttpService } from '@services/strategy/topic-http.service';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    MatIconModule,
    MatButtonModule,
    ToolbarModule,
    InputTextModule,
    AutoCompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    ButtonModule,
    MatInputModule,
    MatDialogModule,
  ],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css'
})
export class TopicComponent {
  temas: Topic[] = [];
  columns: ColumnModel[];
  actors!: Topic[];
  action: string = '';
  local_data: any;
  form: UntypedFormGroup = this.newForm;
  title: string = 'tema';
  id?: number;

  constructor(
    // private dialogRef: MatDialogRef<DialogBoxComponent>,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private messageService: MessageService,
    private topicHttpService: TopicHttpService,
  ) {
    this.columns = this.getColumns();
    // this.local_data = { ...data };
    // this.action = this.local_data.action;
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.topicHttpService.findAll().subscribe((topics) => {
      this.temas = topics.allTemas;
    });
  }

  getColumns(): ColumnModel[] {
    return [
      { field: 'name', header: 'Nombres' },
      { field: 'prioridad', header: 'Prioridad' },
      { field: 'coments', header: 'Comentario' },

      //  { field: 'procedure', header: 'Trámite' },
    ];
  }

  get newForm(): UntypedFormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      prioridad: [1, Validators.required],
      coments: ['', Validators.required],
    });
  }

  openDialog(action: any, obj: { action?: string; id?: number, name?: string }) {
    obj.action = action;
    this.id = obj.id;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '25%',
      data: obj,
    });
    

    dialogRef.afterClosed().subscribe((result) => {
      this.obtainDialogFlow(result.event, result.data);
    });
  }

  private obtainDialogFlow(name: DialogFlow, data: any) {
    switch (name) {
      case DialogFlow.ADD:
        this.create(data);
        break;
      case DialogFlow.UPDATE:
        this.update();
        break;
      case DialogFlow.DELETE:
        this.delete();
        break;
      case DialogFlow.CANCEL:
        break;
      default:
        this.messageService.add({
          severity: MessageServerity.ERROR,
          detail: 'No se a encontrado esa opcion',
          summary: 'El argumento pasado no se ha encontrado',
        });
        break;
    }
  }

  private create(data: any) {
    console.log(data);
    this.form.value.name = data.name;
    this.form.value.prioridad = data.prioridad;
    this.form.value.coments = data.coments;
    this.form.value.parent = false;
    this.topicHttpService.create(this.form.value).subscribe((response) => {

      if (response.errors) {
        this.messageService.addAll(
          convertAllErrors(response.errors, 'Creacion fallida')
        );
      } else {
        this.messageService.add({
          severity: MessageServerity.SUCCESS,
          summary: CREATED,
          detail: messageBuilder(this.title, CREATED.toLowerCase()),
        });
      }
    });
  }

  private update() {
    this.topicHttpService.update(this.form.value).subscribe((response) => {
      if (response.errors) {
        this.messageService.addAll(
          convertAllErrors(response.errors, 'Actualizacion fallida')
        );
      } else {
        this.messageService.add({
          severity: MessageServerity.SUCCESS,
          summary: UPDATED,
          detail: messageBuilder(this.title, UPDATED.toLowerCase()),
        });
      }
    });
  }

  delete() {
    if (!this.id) {
      return;
    }

    this.topicHttpService.remove(this.id).subscribe((response) => {
      if (response.errors) {
        this.messageService.addAll(
          convertAllErrors(response.errors, 'Actualizacion fallida')
        );
      } else {
        this.messageService.add({
          severity: MessageServerity.SUCCESS,
          summary: DELETED,
          detail: messageBuilder(this.title, DELETED.toLowerCase()),
        });
        console.log('Hola como estas en esta parte');
        
        this.temas = this.temas.filter((actor) => actor.id != response.data?.id);
      }
    });
  }



}
