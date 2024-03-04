import { Component } from '@angular/core';

interface PicItem{
  name: string;
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  picitems: PicItem[] = [
    {
      name: 'pic0',
      image: 'OM075_Main-Banner-1440x472.jpg'
    },
    {
      name: 'pic1',
      image: 'OM026-Herobanner-1024x475-01.jpg'
    },
    {
      name: 'pic2',
      image: '1200x1200px-health-article-knowledge-warning-signs-hyperlipidemia-high-blood-fat.jpg'
    }
  
  ]
}
