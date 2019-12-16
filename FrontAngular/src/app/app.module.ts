import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { OwnersComponent } from './owners/owners.component';
import { OwnerComponent } from './owners/owner/owner.component';
import { OwnerListComponent } from './owners/owner-list/owner-list.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyComponent } from './properties/property/property.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { OwnerService } from './shared/owner.service';
import { PropertyService } from './shared/property.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    OwnerComponent,
    OwnerListComponent,
    PropertiesComponent,
    PropertyComponent,
    PropertyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [OwnerService,PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
