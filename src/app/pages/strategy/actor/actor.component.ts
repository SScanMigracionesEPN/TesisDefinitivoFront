import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ColumnModel } from '../../../models/core/column.model';
import { ActorService } from '../../../services/strategy/actor.service';
import { ActorHttpService } from '../../../services/strategy/actor-http.service';
import { Actor } from '../../../models/strategy/actor.model';
import { MatIconModule } from '@angular/material/icon';
import { DialogBoxComponent } from '@shared/components/dialog-box/dialog-box.component';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MessageService } from 'primeng/api';
import { MessageServerity } from '@shared/enums/message-severity.enum';
import {
  convertAllErrors,
  convertError,
  convertSingleError,
} from '@shared/utils/messages.util';
import {
  CREATED,
  DELETED,
  UPDATED,
  messageBuilder,
} from '@shared/consts/status.const';
import { DialogFlow } from '@shared/enums/dialogFlow.enum';

@Component({
  selector: 'app-actor',
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
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css',
})
export class ActorComponent {
  actores: Actor[] = [
    {
      coments: 'CEO de Facebook',
      hijos: [],
      id: 1,
      name: 'Mark Zuckerberg',
      parent: true,
      prioridad: 2,
    },
  ];
  columns: ColumnModel[];
  actors!: Actor[];
  action: string = '';
  local_data: any;
  form: UntypedFormGroup = this.newForm;
  title: string = 'actor';
  id?: number;

  constructor(
    // private dialogRef: MatDialogRef<DialogBoxComponent>,
    private fb: FormBuilder,
    private actorsHttpService: ActorHttpService,
    public dialog: MatDialog,
    private messageService: MessageService,
    private actorHttpService: ActorHttpService
  ) {
    this.columns = this.getColumns();
    // this.local_data = { ...data };
    // this.action = this.local_data.action;
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.actorsHttpService.findAll().subscribe((actors) => {
      this.actores = actors.allActors;
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
      name: ['sdfsf', Validators.required],
      prioridad: [2, Validators.required],
      coments: ['sdfsdf', Validators.required],
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
      this.obtainDialogFlow(result.event);
    });
  }

  private obtainDialogFlow(name: DialogFlow) {
    switch (name) {
      case DialogFlow.ADD:
        this.create();
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

  private create() {
    this.form.value.parent = false;
    this.actorHttpService.create(this.form.value).subscribe((response) => {

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
    this.actorHttpService.update(this.form.value).subscribe((response) => {
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

    this.actorHttpService.remove(this.id).subscribe((response) => {
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
        this.actores = this.actores.filter((actor) => actor.id != response.data?.id);
      }
    });
  }
}
