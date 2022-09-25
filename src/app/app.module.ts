import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MdbTabsModule} from "mdb-angular-ui-kit/tabs";
import {MdbScrollspyModule} from "mdb-angular-ui-kit/scrollspy";
import {MdbDropdownModule} from "mdb-angular-ui-kit/dropdown";
import {MdbModalModule} from "mdb-angular-ui-kit/modal";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbAccordionModule} from "mdb-angular-ui-kit/accordion";
import {MdbPopoverModule} from "mdb-angular-ui-kit/popover";
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";
import {MdbRadioModule} from "mdb-angular-ui-kit/radio";
import {MdbTooltipModule} from "mdb-angular-ui-kit/tooltip";
import {MdbValidationModule} from "mdb-angular-ui-kit/validation";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdbCollapseModule} from "mdb-angular-ui-kit/collapse";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {MdbCheckboxModule} from "mdb-angular-ui-kit/checkbox";
import {MdbRangeModule} from "mdb-angular-ui-kit/range";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
