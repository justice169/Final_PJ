import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = this.elRef.nativeElement.querySelector("#myNavbar");
    if (window.pageYOffset > 10) {
      this.renderer.setStyle(navbar, 'padding-top', '10px');
      this.renderer.setStyle(navbar, 'padding-bottom', '10px');
    } else {
      this.renderer.removeStyle(navbar, 'padding-top');
      this.renderer.removeStyle(navbar, 'padding-bottom');
    }
  }
}
