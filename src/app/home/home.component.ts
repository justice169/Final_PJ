import { Component, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('carousel', { static: true }) ngbCarousel!: NgbCarousel;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.ngbCarousel) {
      this.ngbCarousel.pause(); // Pause the NgbCarousel

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 4
          },
        },
      });

      // Ensure that Angular knows about changes
      this.cdr.detectChanges();
    }
  }
}
