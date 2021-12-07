import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FooterComponent } from './footer/footer.component';
import { CategorieProduitComponent } from './categorie-produit/categorie-produit.component';
import { HttpClientModule} from "@angular/common/http";
import { ProduitComponent } from './produit/produit.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ReponseReclamationComponent } from './reponse-reclamation/reponse-reclamation.component';

import { FormCategorieproduitComponent } from './form-categorieproduit/form-categorieproduit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { FormReclamationComponent } from './form-reclamation/form-reclamation.component';
import { FormReponsereclamationComponent } from './form-reponsereclamation/form-reponsereclamation.component';
import {GoogleChartsModule} from "angular-google-charts";
import { StatReclamationComponent } from './stat-reclamation/stat-reclamation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {NgxStarRatingModule} from "ngx-star-rating";
import {FormProduitComponent} from "./form-produit/form-produit.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    FooterComponent,
    CategorieProduitComponent,
    ProduitComponent,
    ReclamationComponent,
    ReponseReclamationComponent,
    FormCategorieproduitComponent,
    FormProduitComponent,
    FormReclamationComponent,
    FormReponsereclamationComponent,
    StatReclamationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
