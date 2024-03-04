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
      name: 'pic1',
      image: 'OM075_Main-Banner-1440x472.jpg'
    },
  ]
}
