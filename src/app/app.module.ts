import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material Modules
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';


//Components
import { AboutMbComponent } from './about-mb/about-mb.component';
import { CelebReadersComponent } from './celeb-readers/celeb-readers.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HeaderComponent } from './header/header.component';
import { ResourcesComponent } from './resources/resources.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutMbComponent,
    CelebReadersComponent,
    ActivitiesComponent,
    HeaderComponent,
    ResourcesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
