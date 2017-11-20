import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
 
import { HeroesComponent }    from './heroes.component';
import { HeroDetailComponent }  from '../hero-detail/hero-detail.component';
 
import { HeroService } from '../../services/hero.service';
 
import { HeroRoutingModule } from './heroes-routing.module';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroDetailComponent
  ],
  providers: [ HeroService ]
})
export class HeroesModule {}