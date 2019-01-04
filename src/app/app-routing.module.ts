import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RedditComponent } from './reddit/reddit.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'reddit', component: RedditComponent},
  {path: 'forms', component: FormsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
