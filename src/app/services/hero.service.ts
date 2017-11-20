import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from '../models/hero/hero';
import { HEROES } from '../models/hero/mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {    
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {    
    return of(HEROES.find(hero => hero.id === id));
  }
}
