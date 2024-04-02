import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor, Celda, Matrix, State, Topic } from '@models/strategy';
import { Apollo } from 'apollo-angular';
import { Message, MessageService, ConfirmationService } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-matrix-priority',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matrix-priority.component.html',
  styleUrl: './matrix-priority.component.css'
})
export class MatrixPriorityComponent {
  public params = ['par1', 'par2', 'par3', 'par4', 'par5'];
  public modes = ['mode1', 'mode2', 'mode3'];
  combinations = [];
  filtro = 0;
  selectedTema = 0;
  selectedActor = 0
  isDisabled= true;
  isActivo = false;
  cabeceras = 0;
  msgs: Message[] = []
  ParentTemas: Topic[] = [];
  Estado: State[] = [];
  HijosTemas: Topic[] = [];
  ParentActor: Actor[] = [];
  HijosActor: Actor[] =[];
  DatosMatriz: Matrix[]=[];
  Matriz?: Matrix;
  lista?: Observable<Array<Matrix>>;
  loading: boolean = true;
  invert: boolean = true;
  // public pivotData?: IDataSet[];
  // public dataSourceSettings: IDataOptions;
  celdaSubscription?: Subscription;
  celdas: Celda[] = [];

  constructor(public activatedRoute: ActivatedRoute,public _router: Router, public _location: Location, private apollo: Apollo,private messageService: MessageService,private confirmationService: ConfirmationService ) { }

  state: any;

  async ngOnInit(): Promise<void> {
    /*
    this.datasource();
    this.childData();
    this.matriz();*/
    // this.state = this._location.getState();
    if(!this.state.id){
      console.log("vacio")
    }else{
    //   this.apollo.watchQuery({
    //     fetchPolicy: 'network-only',
    //     query: MATRIZ_QUERY,
    //     variables: {
    //       id: this.state.id
    //     }
    //   }).valueChanges.subscribe((response) => {
    //     this.Matriz = response.data['matriz'];
    //     this.loading = response.loading;
    //   });
    //  this.apollo.subscribe({
    //     query: Subscription_Celda,
    //     variables: {
    //       id: this.state.id
    //     }
    //   })
    //   .subscribe(({ data }) => {
    //     console.log("Subscripction")
    //     console.log(data)
        
    //   });
    }
  }

  ngOnDestroy(){

  }

  refresh(){
    this._router.navigateByUrl("/refresh", {skipLocationChange: true}).then(()=>{
      // console.log(decodeURI(this._location.path()));
      // this._router.navigate([decodeURI(this._location.path())],{state:{id: this.state.id,nombre: this.state.User.name}});
    });
  }

  invertir(){
    if(this.invert){
      this.invert = false;
    }else{
      this.invert = true;
    }
  }

  saveMessage(){
    this.messageService.add({severity: 'success', summary:'', detail:'Estado Actual Guardado'})
  }
  matriz(){
    // this.apollo.watchQuery({
    //   fetchPolicy: 'network-only',
    //   query: ALL_MATRIZ_QUERY
    // }).valueChanges.subscribe((response) => {
    //   this.DatosMatriz = response.data['matrizes'];
    //   this.loading = response.loading;
    //   console.log(this.DatosMatriz)
    // });
  }

  datasource(){
    // this.apollo.watchQuery({
    //   query: ALL_TEMAS_QUERY
    // }).valueChanges.subscribe((response) => {
    //   this.ParentTemas = response.data['temas'];
    //   this.loading = response.loading;
    // });
    
    // this.apollo.watchQuery({
    //   query: ALL_ACTORES_QUERY
    // }).valueChanges.subscribe((response) => {
    //   this.ParentActor = response.data['actors'];
    //   this.loading = response.loading;
    // }); 
    // this.apollo.watchQuery({
    //   query: ESTADO_QUERY
    // }).valueChanges.subscribe((response) => {
    //   this.Estado = response.data['estadoes'];
    //   console.log(this.Estado);
    // });
  }

  getCombinationsArray() {
    let combinations = [];
    for (let i = 0; i < this.getNumCombinations(); i++) {
      combinations.push(i)
    }
    return combinations;
  };

  getNumCombinations() {
    return this.params.length * this.modes.length;
  };

  getModule(index: any){
    return index % this.params.length;
  };
  
  childData(){
    // this.apollo.watchQuery({
    //   query: ALL_TEMAS_QUERY
    // }).valueChanges.subscribe((response) => {
    //   this.HijosTemas = response.data['temas'];
    //   this.loading = response.loading;
    // }); 

    // this.apollo.watchQuery({
    //   query: ALL_ACTORES_QUERY
    // }).valueChanges.subscribe((response) => {
    //   this.HijosActor = response.data['actors'];
    //   this.loading = response.loading;
    // });
  }


  onPrioridadChange(value: any,cellid: any){
    this.updatePrioridadData(value,cellid);
  }

  onTimeChange(value: any,cellid: any){
    this.updateTiempoData(value,cellid);
  }

  updateTiempoData(tiempo: any,cellid: any){
    // this.apollo.mutate({
    //   mutation: UPDATE_CELL_TIEMPO_MUTATION,
    //   variables: {
    //    tiempo: parseInt(tiempo),
    //    id: String(cellid)
    //   }
    // }).subscribe((response) => {
    //     console.log(response)
    // });
  }


  public updatePrioridadData(prioridad: any,cellid: any){
    // this.apollo.mutate({
    //   mutation: UPDATE_CELL_PRIORIDAD_MUTATION,
    //   variables: {
    //    prioridad: parseInt(prioridad),
    //    id: String(cellid)
    //   }
    // }).subscribe((response) => {
    //     console.log(response)
    // });
  }

  public createCell(){
    // this.ParentActor.forEach(actor => {
    //   this.ParentTemas.forEach(tema => {
    //     this.apollo.mutate({
    //       mutation: CREATE_CELL_MUTATION,
    //       variables: {
    //         idTema: parseInt(tema.id),
    //         idActor: parseInt(actor.id),
    //         prioridad: 0,
    //         tiempo: 0,
    //         coment: ""
    //       }
    //     }).subscribe((response) => {
    //         console.log(response)
    //     }); 
    //   });
    // });
  }  

  valorfunction(temaid: any,actorid: any){
    // this.DatosMatriz.filter(function(item) {
    //   let actor = item["ActorParent"];
    //   let tema = item["TemaParent"];
    //   if(actor["id"] === actorid && tema["id"]===temaid){
    //     console.log("si existe");
    //     console.log(item);
    //     return item.id;
    //   }else{
    //     return 0;
    //   }
    // });
  }

  deleteAll(){
    // this.apollo.mutate({
    //   mutation: DELETE_ALL_MATRIZ_QUERY,
    // }).subscribe((response) => {
    //     console.log(response);
    // });
  }

  saveEstado(){
    // this.apollo.mutate({
    //   mutation: UPDATE_ESTADO_ACTOR_MUTATION,
    //   variables: {
    //    id: this.Estado[0].id,
    //    NumActor: this.ParentActor.length,
    //   }
    // }).subscribe((response) => {
    //     console.log(response);
    // });
    // this.apollo.mutate({
    //   mutation: UPDATE_ESTADO_TEMA_MUTATION,
    //   variables: {
    //    id: this.Estado[0].id,
    //    NumActor: this.ParentTemas.length,
    //   }
    // }).subscribe((response) => {
    //     console.log(response);
    // });
    // this.saveMessage();
  }

  contador(){
    console.log(this.cabeceras)
  }

  maxcolspan(index: any){
    var max = index.hijos.length;
    // index.hijos.forEach(element => {
    //   if(max < element.hijos.length){
    //     max = element.hijos.length;
    //   }
    //   element.hijos.forEach(element => {
    //     if(max < element.hijos.length){
    //       max = element.hijos.length
    //     }
    //   });
    // });
    return max    
  }

  maxrowspan(index: any){
    var max = 0
    index.hijos.forEach((element: any) => {
      if(element.hijos.length){
        element.hijos.forEach((element: any) => {
          if(element.hijos.length){
            element.hijos.forEach((element: any) => {
              max++;
            });
          }else{
            max++;
          }
        });
      }else{
        max ++;
      }
    });
    
    return max  
  }

  maxNum(num1: number, num2: number, num3: number){
    var max = 0;
    if((num1 >= num2) && (num1 >= num3)){
        max = num1;
    }
    else if((num2 >= num1) && (num2 >= num3)){
        max = num2;
    }
    else{
        max = num3;
    }
  return max;
  }


}
