import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { 
  AsidenavbarService,
  UsuarioService,
  LayoutService
  
 } from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    AsidenavbarService,
    UsuarioService,
    LayoutService
  ]
})
export class ServiceModule { }
