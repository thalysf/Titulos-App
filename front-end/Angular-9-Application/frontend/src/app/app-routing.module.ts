import { LocacaoUpdateComponent } from './components/atendimento/view/locacao/locacao-update/locacao-update.component';
import { LocacaoCreateComponent } from './components/atendimento/view/locacao/locacao-create/locacao-create.component';
import { LocacaoCrudComponent } from './views/locacao-crud/locacao-crud.component';
import { SocioUpdateComponent } from './components/atendimento/view/socio/socio-update/socio-update.component';
import { SocioCreateComponent } from './components/atendimento/view/socio/socio-create/socio-create.component';
import { SocioCrudComponent } from './views/socio-crud/socio-crud.component';
import { ClienteUpdateComponent } from './components/atendimento/view/cliente/cliente-update/cliente-update.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ItemUpdateComponent } from './components/locadora/view/item/item-update/item-update.component';
import { ItemCrudComponent } from './views/item-crud/item-crud.component';
import { TituloUpdateComponent } from './components/locadora/view/titulo/titulo-update/titulo-update.component';
import { TituloCreateComponent } from './components/locadora/view/titulo/titulo-create/titulo-create.component';
import { TituloCrudComponent } from './views/titulo-crud/titulo-crud.component';
import { DiretorUpdateComponent } from './components/locadora/view/diretor/diretor-update/diretor-update.component';
import { DiretorCreateComponent } from './components/locadora/view/diretor/diretor-create/diretor-create.component';
import { DiretorCrudComponent } from './views/diretor-crud/diretor-crud.component';
import { ClasseCrudComponent } from './views/classe-crud/classe-crud.component';
import { AtorCreateComponent } from './components/locadora/view/ator/ator-create/ator-create.component';
import { AtorUpdateComponent } from './components/locadora/view/ator/ator-update/ator-update.component';
import { AtorCrudComponent } from './views/ator-crud/ator-crud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  {HomeComponent} from './views/home/home.component';
import { ClasseCreateComponent } from './components/locadora/view/classe/classe-create/classe-create.component';
import { ClasseUpdateComponent } from './components/locadora/view/classe/classe-update/classe-update.component';
import { ItemCreateComponent } from './components/locadora/view/item/item-create/item-create.component';
import { ClienteCreateComponent } from './components/atendimento/view/cliente/cliente-create/cliente-create.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },
  {
    path: "ator",
    component: AtorCrudComponent
  },
  {
    path: "ator/create",
    component: AtorCreateComponent
  },
  {
    path: "ator/update/:id",
    component: AtorUpdateComponent
  },
  {
    path: "classe",
    component: ClasseCrudComponent
  },
  {
    path: "classe/create",
    component: ClasseCreateComponent
  },
  {
    path: "classe/update/:id",
    component: ClasseUpdateComponent
  },
  {
    path: "diretor",
    component: DiretorCrudComponent
  },
  {
    path: "diretor/create",
    component: DiretorCreateComponent
  },
  {
    path: "diretor/update/:id",
    component: DiretorUpdateComponent
  },
  {
    path: "titulo",
    component: TituloCrudComponent
  },
  {
    path: "titulo/create",
    component: TituloCreateComponent
  },
  {
    path: "titulo/update/:id",
    component: TituloUpdateComponent
  },
  {
    path: "item",
    component: ItemCrudComponent
  },
  {
    path: "item/create",
    component: ItemCreateComponent
  },
  {
    path: "item/update/:id",
    component: ItemUpdateComponent
  },
  {
    path: "cliente",
    component: ClienteCrudComponent
  },
  {
    path: "cliente/create",
    component: ClienteCreateComponent
  },
  {
    path: "cliente/update/:id",
    component: ClienteUpdateComponent
  },
  {
    path: "socio",
    component: SocioCrudComponent
  },
  {
    path: "socio/create",
    component: SocioCreateComponent
  },
  {
    path: "socio/update/:id",
    component: SocioUpdateComponent
  },
  {
    path: "locacao",
    component: LocacaoCrudComponent
  },
  {
    path: "locacao/create",
    component: LocacaoCreateComponent
  },
  {
    path: "locacao/update/:id",
    component: LocacaoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
