import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './Pages/search/search.component';
import { AddComponent } from './Pages/add/add.component';
import { LikesComponent } from './Pages/likes/likes.component';
import { ProfileComponent } from './Pages/profile/profile.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './Components/menu/menu.component';
import { PostComponent } from './Components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    SearchComponent,
    AddComponent,
    LikesComponent,
    ProfileComponent,
    MenuComponent,
    PostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
