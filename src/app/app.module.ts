import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Sidebar } from 'ng-sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DataService } from './Data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, Page1Component, Page2Component],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatChipsModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatGridListModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forRoot(
      [
        { path: 'page1', component: Page1Component },
        { path: 'page2', component: Page2Component },
        { path: '', redirectTo: '/page1', pathMatch: 'full' },
      ],
      { enableTracing: true }
    ),
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
