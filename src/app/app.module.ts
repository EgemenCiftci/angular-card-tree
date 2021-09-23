import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { CardComponent } from './card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [BrowserModule, FormsModule, AngularSplitModule, NgbModule],
  declarations: [AppComponent, ContainerComponent, CardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
