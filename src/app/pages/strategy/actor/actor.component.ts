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
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
  actores: Actor[] = [];
  columns: ColumnModel[];
  actors!: Actor[];
  action: string = '';
  local_data: any;

  constructor(
    // private dialogRef: MatDialogRef<DialogBoxComponent>,
    private actorsHttpService: ActorHttpService,
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



}
