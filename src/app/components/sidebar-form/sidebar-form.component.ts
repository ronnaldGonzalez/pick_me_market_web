import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-form',
  templateUrl: './sidebar-form.component.html',
  styleUrls: ['./sidebar-form.component.css']
})
// foto lateral de los formularios
export class SidebarFormComponent {
  @Input() currentStep: string = '';
}
