import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  imports: [
    FormsModule
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    FormsModule
  ]
})
export class SharedModule { }
