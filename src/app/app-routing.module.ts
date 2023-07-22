import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { SearchComponent } from './Pages/search/search.component';
import { AddComponent } from './Pages/add/add.component';
import { LikesComponent } from './Pages/likes/likes.component';
import { ProfileComponent } from './Pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'thread', component: AddComponent },
  { path: 'likes', component: LikesComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [
  HomeComponent,
  SearchComponent,
  AddComponent,
  LikesComponent,
  ProfileComponent,
];
