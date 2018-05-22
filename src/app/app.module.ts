import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import {MatButtonModule, MatInputModule, MatList} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { MatListModule } from '@angular/material';

import { PostComponent} from './post.component';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile.component';
import { Profile } from 'selenium-webdriver/firefox';
import { HttpClientModule } from '@angular/common/http';

const routes = [
  {path: '', component: PostComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'profile/:id', component: ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent, MessagesComponent , RegisterComponent,
    LoginComponent, UsersComponent, ProfileComponent,
    PostComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, MatButtonModule, MatCardModule, 
    MatToolbarModule, RouterModule.forRoot(routes),
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
