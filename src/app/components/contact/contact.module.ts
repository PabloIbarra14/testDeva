import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';

import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ContactFormComponent } from './ContactForm/ContactForm.component';
import { ContactTableComponent } from './ContactTable/ContactTable.component';
import { ViewContactComponent } from './viewContact/viewContact.component';
import { MenuComponent } from './Menu/Menu.component';
@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule

  ],
  declarations: [MenuComponent, ContactFormComponent, ContactTableComponent, ViewContactComponent]
})
export class ContactModule { }
