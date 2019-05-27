import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formprofesional',
  templateUrl: './formprofesional.component.html',
  styles: []
})
export class FormprofesionalComponent {
  
  forma: FormGroup;

  constructor(
    public router: Router
  ) { }
  
  /* passwordMatchValidator(campo1:string, campo2:string) {
    return (group: FormGroup)=>{
      
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if(pass1 == pass2){
        return null;
      }
      return{

        passwordMatchValidator:true
      };
     ;
    }
 } */
  //Inicalizar componente
  
}