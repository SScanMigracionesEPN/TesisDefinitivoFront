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
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';





@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, MatIconModule, MatButtonModule, ToolbarModule, InputTextModule],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css'
})
export class ActorComponent {
  actores: Actor[] = []
  columns: ColumnModel[];
  data: Object[] = [];
  actors!: Actor[];

  constructor(private actorsHttpService: ActorHttpService, public dialog: MatDialog) {


    this.columns = this.getColumns();
  }


  ngOnInit() {
    this.findAll()
  }


  findAll() {
    this.actorsHttpService.findAll().subscribe(
      (actors) => {
        this.actores = actors.allActors


        console.log(this.actores)

      })


    // (actors)=>{console.log(actors)})
  }




  getColumns(): ColumnModel[] {
    return [
      { field: "name", header: 'Nombres' },
      { field: 'prioridad', header: 'Prioridad' },
      { field: 'coments', header: 'Comentario' },

      //  { field: 'procedure', header: 'Trámite' },
    ];
  }


  openDialog(action: any, obj: any, data: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '50%',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Crear') {
        // this.treegrid.editSettings.newRowPosition ="Child"
        // this.addRowData(result.data,data);
      } else if (result.event == 'Editar') {
        // this.updateRowData(result.data);
      } else if (result.event == 'Eliminar') {
        // this.deleteRowData(result.data);
      } else if (result.event == 'Crear Padre') {
        // this.treegrid.editSettings.newRowPosition ="Bottom"
        // this.addNewData(result.data);
      }
    });
  }

}


