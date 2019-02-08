import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {RouterModule, Routes} from '@angular/router';
import {Ejemplo1Component} from './ejemplo1/ejemplo1.component';
import {Ejemplo2Component} from './ejemplo2/ejemplo2.component';
import {Ejemplo3Component} from './ejemplo3/ejemplo3.component';
import {Ejemplo4Component} from './ejemplo4/ejemplo4.component';
import {Ejemplo5Component} from './ejemplo5/ejemplo5.component';
import {Ejemplo6Component} from './ejemplo6/ejemplo6.component';
import {Ejemplo7Component} from './ejemplo7/ejemplo7.component';
import {Ejemplo8Component} from './ejemplo8/ejemplo8.component';
import {Ejemplo9Component} from './ejemplo9/ejemplo9.component';
import {Ejemplo10Component} from './ejemplo10/ejemplo10.component';
import {Ejemplo11Component} from './ejemplo11/ejemplo11.component';
import {Ejemplo12PadreComponent} from './ejemplo12-padre/ejemplo12-padre.component';
import {Ejemplo12HijoComponent} from './ejemplo12-hijo/ejemplo12-hijo.component';
import {FormsModule} from '@angular/forms';
import {Ejemplo13HijoComponent} from './ejemplo13-hijo/ejemplo13-hijo.component';
import {Ejemplo13PadreComponent} from './ejemplo13-padre/ejemplo13-padre.component';
import {MatButtonModule} from '@angular/material';


const routes: Routes = [
  {path: 'ejemplo1', component: Ejemplo1Component},
  {path: 'ejemplo2', component: Ejemplo2Component},
  {path: 'ejemplo3', component: Ejemplo3Component},
  {path: 'ejemplo4', component: Ejemplo4Component},
  {path: 'ejemplo5', component: Ejemplo5Component},
  {path: 'ejemplo6', component: Ejemplo6Component},
  {path: 'ejemplo7', component: Ejemplo7Component},
  {path: 'ejemplo8', component: Ejemplo8Component},
  {path: 'ejemplo9', component: Ejemplo9Component},
  {path: 'ejemplo10', component: Ejemplo10Component},
  {path: 'ejemplo11', component: Ejemplo11Component},
  {path: 'ejemplo12-hijo', component: Ejemplo12HijoComponent},
  {path: 'ejemplo12-padre', component: Ejemplo12PadreComponent},
  {path: 'ejemplo13-hijo', component: Ejemplo13HijoComponent},
  {path: 'ejemplo13-padre', component: Ejemplo13PadreComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component,
    Ejemplo4Component,
    Ejemplo5Component,
    Ejemplo6Component,
    Ejemplo7Component,
    Ejemplo8Component,
    Ejemplo9Component,
    Ejemplo10Component,
    Ejemplo11Component,
    Ejemplo12HijoComponent,
    Ejemplo12PadreComponent,
    Ejemplo13HijoComponent,
    Ejemplo13PadreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatButtonModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
