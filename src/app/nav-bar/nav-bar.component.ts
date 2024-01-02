import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  selectedComponent:string = 'student';

  showComponent(component: string): void {
    this.selectedComponent = component;
  }
}
