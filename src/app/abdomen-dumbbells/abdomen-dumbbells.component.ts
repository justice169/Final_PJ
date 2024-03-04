import { Component } from '@angular/core';

@Component({
  selector: 'app-abdomen-dumbbells',
  templateUrl: './abdomen-dumbbells.component.html',
  styleUrls: ['./abdomen-dumbbells.component.css']
})
export class AbdomenDumbbellsComponent {
  exercises: any[] = [
    {
      title: 'Standing Side bend',
      image: 'assets/pic/abdomen-dumb1.jpg',
      description: 'เตรียมดัมเบลตามที่ตัวเองไหว ท่านี้จะได้กล้ามท้องส่วนกลาง ส่วนที่โดนที่สุดคือกล้ามท้องด้านข้าง เริ่มจากแยกเท้าของคุณให้กว้างกว่าสะโพกเล็กน้อยหลังจากนั้นจับดัมเบลด้วยสองมือแล้วยืดขึ้นเหนือหัวแล้วงอตัวไปทางขวาแล้วดึงซี่โครงด้านซ้ายลง แล้วทำตรงกันข้ามอีกฝั่ง ซ้ายขวานับ 1 เล่นอย่างน้อย 8-12 ครั้ง / 2-3 เซตตามที่ไหว'
    },
    {
      title: 'Dumbbell Crossover Punch',
      image: 'assets/pic/abdomen-dumb2.jpg',
      description: 'ท่านี้จะได้กล้ามท้องส่วนกลางลำตัว ส่วนที่โดนเยอะที่สุดจะเป็นกล้ามท้องส่วนบน เพียงถือดัมเบลไว้ทั้ง 2 ข้าง นอนหงายโดยงอเข่าให้เท้าราบกับพิ้น ข้อศอกติดพื้นให้ดัมเบลอยู่ระหว่างหน้าอก ม้วนตัวขึ้นในท่านั่ง "ชก" ไปทางซ้ายและบิดซี่โครงแล้วค่อยดึงตัวกลับมาช้าแล้วทำซ้ำอีกข้าง 1 ซ้ายขวานับ 1 ครั้ง'
    },
    {
      title: 'Seated Russian Twist ',
      image: 'assets/pic/abdomen-dumb3.jpg',
      description: 'ถ้านี้จะได้กล้ามท้องด้านข้างเป็นหลัก ถือดัมเบลไว้ในมือทั้งสองข้างนั่งบนพื้นโดยง้อเข่าและส้นเท้าออกจากพื้น เอนหลังเล้กน้อยโดดยไม่ให้กระดูกสันหลังค่อมแล้วบิดไปท้างซ้ายช้าๆโดยให้น้ำหนักไปท้งด้านซ้ายและขวา ซ้ายขวานับ 1 ครั้ง '
    },
  ];
}
