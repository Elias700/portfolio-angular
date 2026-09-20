import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  menuOpen = false;
  activeSection = 'home';

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  setActiveSection(section: string): void {
    this.activeSection = section;
    this.closeMenu();
  }
  
}
