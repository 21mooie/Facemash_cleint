import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component';

const routes = [
  {path: 'register', component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent, MessagesComponent , RegisterComponent
  ],
  imports: [
    BrowserModule, HttpModule, MatButtonModule, MatCardModule, MatToolbarModule, RouterModule.forRoot(routes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
