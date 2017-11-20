import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { RouterModule }             from '@angular/router';
import { HeroesModule }             from './components/heroes/heroes.module';
import { AppRoutingModule }         from './app-routing.module';
import { FormsModule }              from '@angular/forms';

import { NavBarComponent }          from './components/nav-bar/nav-bar.component';
import { AppComponent }             from './components/app/app.component';
import { HomeComponent }            from './components/home/home.component';
import { PageNotFoundComponent }    from './components/page-not-found/page-not-found.component';
import { HeroDetailComponent }      from './components/hero-detail/hero-detail.component';
import { HeroesComponent }          from './components/heroes/heroes.component';
import { ModulesComponent }         from './components/modules/modules.component';

import { HeroService }              from './services/hero.service';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent,        
    ModulesComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
