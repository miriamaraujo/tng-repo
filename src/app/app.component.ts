import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    CommonModule, 
    SideNavComponent, 
    MobileMenuComponent],
    
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tng';
  sideNavCollapsed = false;
  isMobile = window.innerWidth <= 768;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  onSideNavToggle(collapsed: boolean) {
    this.sideNavCollapsed = collapsed;
  }
}
