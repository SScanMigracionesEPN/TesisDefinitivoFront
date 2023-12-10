import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ColumnModel } from '../../../models/core/column.model';



@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [CommonModule,TableModule  ,ButtonModule ],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css'
})
export class ActorComponent {
   actores:any[]=[]

  constructor(){

    this.columns = this.getColumns();


  }


   columns: ColumnModel[];


   getColumns(): ColumnModel[] {
     return [
       { field: "name", header: 'Nombres' },
       { field: 'area', header: 'Area' },
       { field: 'procedure', header: 'Trámite' },
     ];
   }

}


