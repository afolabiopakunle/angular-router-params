import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AwayComponent } from './away/away.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'away', component: AwayComponent},
  {path: 'games/:id', component: GamesComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }