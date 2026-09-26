import {
  Component,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  menuOpen = false;
  activeSection = 'home';

  private sections = [
    'home',
    'sobre',
    'projetos',
    'certificados',
    'contato'
  ];

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

  @HostListener('window:scroll')
  onScroll(): void {

    const scrollPosition = window.scrollY + 120;

    for (let i = this.sections.length - 1; i >= 0; i--) {

      const section = document.getElementById(
        this.sections[i]
      );

      if (!section) {
        continue;
      }

      const sectionTop =
        section.getBoundingClientRect().top +
        window.scrollY;

      if (scrollPosition >= sectionTop) {

        this.activeSection = this.sections[i];

        break;
      }
    }
  }
}