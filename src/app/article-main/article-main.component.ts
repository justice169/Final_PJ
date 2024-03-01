// article-main.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-article-main',
    templateUrl: './article-main.component.html',
    styleUrls: ['./article-main.component.css']
})
export class ArticleMainComponent {
    currentPage: number = 1; // หน้าปัจจุบัน
    totalPages: number = 38; // จำนวนหน้าทั้งหมด
    pageSize: number = 5; // จำนวนหน้าที่จะแสดงในแต่ละช่วง
    pagesArray: number[];

    constructor() {
        this.pagesArray = Array.from({length: this.totalPages}, (_, i) => i + 1);
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    }

    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }

    goToPage(pageNumber: number) {
        this.currentPage = pageNumber;
    }

    getPageRange(): number[] {
      let startPage = Math.max(1, this.currentPage - Math.floor(this.pageSize / 2));
      let endPage = Math.min(this.totalPages, startPage + this.pageSize - 1);
  
      // Ensure endPage is within totalPages
      endPage = Math.min(endPage, this.totalPages);
  
      // Ensure startPage and endPage show `pageSize` pages if possible
      if (endPage === this.totalPages && endPage - startPage + 1 < this.pageSize) {
          startPage = Math.max(1, endPage - this.pageSize + 1);
      } else if (startPage === 1 && endPage - startPage + 1 < this.pageSize) {
          endPage = Math.min(this.totalPages, startPage + this.pageSize - 1);
      }
  
      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }
  
}
