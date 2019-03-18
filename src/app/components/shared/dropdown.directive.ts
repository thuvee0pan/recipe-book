import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  constructor() { }

  @HostListener('click') mouseclick(eventData: Event) {
    this.isOpen = !this.isOpen
  }

}
