import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }         from './components/app/app.component';
import { HomeComponent }        from './components/home/home.component';
import { PageNotFoundComponent} from './components/page-not-found/page-not-found.component'

const routes: Routes = [  
  { path: 'home', component: HomeComponent },  
  //defaults to
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )    
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
