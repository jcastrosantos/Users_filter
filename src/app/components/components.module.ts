import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { UserListComponent } from './user-list/user-list.component';
import { PipesModule } from "../pipes/pipes.module";


@NgModule({
  declarations: [
    FilterComponent,
    UserListComponent,
    UserDetailsComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    PipesModule,
    AngularMaterialModule,
  ],
  exports: [
    FilterComponent,
    UserListComponent,
    UserDetailsComponent,
  ],
})
export class ComponentsModule { }