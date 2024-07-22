import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { Actor, Topic } from '@models/strategy';
import { ActorHttpService } from '@services/strategy/actor-http.service';
import { DialogBoxComponent } from '@shared/components/dialog-box/dialog-box.component';

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

  actores: Topic[] = [
   {
    coments: "Bunker de 270 MDD",
    hijos: [],
    id: 1, 
    name: "Bunker",
    parent: true, 
    prioridad: 1,
    __typename: "number"
   },
  //  {
  //   coments: "",
  //   hijos: [],
  //   id: 2, 
  //   name: "Tema2",
  //   parent: true, 
  //   prioridad: 3,
  //   __typename: "number"
  //  },
  //  {
  //   coments: "",
  //   hijos: [],
  //   id: 1, 
  //   name: "Tema3",
  //   parent: true, 
  //   prioridad: 3,
  //   __typename: "number"
  //  },

  ];
  columns: ColumnModel[];
  actors!: Actor[];
  action: string = '';
  local_data: any;




  constructor(
    // private dialogRef: MatDialogRef<DialogBoxComponent>,
    private actorsHttpService: ActorHttpService,
    public dialog: MatDialog
  ) {
    this.columns = this.getColumns();
    // this.local_data = { ...data };
    // this.action = this.local_data.action;
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    // this.actorsHttpService.findAll().subscribe((actors) => {
    //   this.actores = actors.allActors;
    // });
  }

  getColumns(): ColumnModel[] {
    return [
      { field: 'name', header: 'Nombres' },
      { field: 'prioridad', header: 'Prioridad' },
      { field: 'coments', header: 'Comentario' },

      //  { field: 'procedure', header: 'Trámite' },
    ];
  }

  openDialog(action: any,obj : any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '25%',
      data:obj
    });
 
    dialogRef.afterClosed().subscribe(result => {
      // if(result.event == 'Add'){
      //   this.addRowData(result.data);
      // }else if(result.event == 'Update'){
      //   this.updateRowData(result.data);
      // }else if(result.event == 'Delete'){
      //   this.deleteRowData(result.data);
      // }
    });
  }



}
