import { MatSelect, MatSelectModule } from '@angular/material/select';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ForDirective } from './directives/for.directive';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { AtorCrudComponent } from './views/ator-crud/ator-crud.component';
import { AtorCreateComponent } from './components/locadora/view/ator/ator-create/ator-create.component';
import { AtorUpdateComponent } from './components/locadora/view/ator/ator-update/ator-update.component';
import { AtorReadComponent } from './components/locadora/view/ator/ator-read/ator-read.component';
import { ClasseCrudComponent } from './views/classe-crud/classe-crud.component';
import { ClasseCreateComponent } from './components/locadora/view/classe/classe-create/classe-create.component';
import { ClasseUpdateComponent } from './components/locadora/view/classe/classe-update/classe-update.component';
import { ClasseReadComponent } from './components/locadora/view/classe/classe-read/classe-read.component';
import { DiretorCrudComponent } from './views/diretor-crud/diretor-crud.component';
import { DiretorReadComponent } from './components/locadora/view/diretor/diretor-read/diretor-read.component';
import { DiretorCreateComponent } from './components/locadora/view/diretor/diretor-create/diretor-create.component';
import { DiretorUpdateComponent } from './components/locadora/view/diretor/diretor-update/diretor-update.component';
import { TituloCrudComponent } from './views/titulo-crud/titulo-crud.component';
import { TituloReadComponent } from './components/locadora/view/titulo/titulo-read/titulo-read.component';
import { TituloCreateComponent } from './components/locadora/view/titulo/titulo-create/titulo-create.component';
import { TituloUpdateComponent } from './components/locadora/view/titulo/titulo-update/titulo-update.component';
import { ItemCrudComponent } from './views/item-crud/item-crud.component';
import { ItemReadComponent } from './components/locadora/view/item/item-read/item-read.component';
import { ItemCreateComponent } from './components/locadora/view/item/item-create/item-create.component';
import { ItemUpdateComponent } from './components/locadora/view/item/item-update/item-update.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteReadComponent } from './components/atendimento/view/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './components/atendimento/view/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/atendimento/view/cliente/cliente-update/cliente-update.component';
import { SocioCrudComponent } from './views/socio-crud/socio-crud.component';
import { SocioReadComponent } from './components/atendimento/view/socio/socio-read/socio-read.component';
import { SocioCreateComponent } from './components/atendimento/view/socio/socio-create/socio-create.component';
import { SocioUpdateComponent } from './components/atendimento/view/socio/socio-update/socio-update.component';
import { LocacaoCrudComponent } from './views/locacao-crud/locacao-crud.component';
import { LocacaoReadComponent } from './components/atendimento/view/locacao/locacao-read/locacao-read.component';
import { LocacaoCreateComponent } from './components/atendimento/view/locacao/locacao-create/locacao-create.component';
import { LocacaoUpdateComponent } from './components/atendimento/view/locacao/locacao-update/locacao-update.component';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ForDirective,
    AtorCrudComponent,
    AtorCreateComponent,
    AtorUpdateComponent,
    AtorReadComponent,
    ClasseCrudComponent,
    ClasseReadComponent,
    ClasseCreateComponent,
    ClasseUpdateComponent,
    DiretorCrudComponent,
    DiretorReadComponent,
    DiretorCreateComponent,
    DiretorUpdateComponent,
    TituloCrudComponent,
    TituloReadComponent,
    TituloCreateComponent,
    TituloUpdateComponent,
    ItemCrudComponent,
    ItemReadComponent,
    ItemCreateComponent,
    ItemUpdateComponent,
    ClienteCrudComponent,
    ClienteReadComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    SocioCrudComponent,
    SocioReadComponent,
    SocioCreateComponent,
    SocioUpdateComponent,
    LocacaoCrudComponent,
    LocacaoReadComponent,
    LocacaoCreateComponent,
    LocacaoUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
