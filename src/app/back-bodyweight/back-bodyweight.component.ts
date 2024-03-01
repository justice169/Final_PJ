import { Component } from '@angular/core';

@Component({
  selector: 'app-back-bodyweight',
  templateUrl: './back-bodyweight.component.html',
  styleUrls: ['./back-bodyweight.component.css']
})
export class BackBodyweightComponent {

  exercises: any[] = [
    {
      title: 'Superman',
      image: '../../assets/pic/back-body1.jpg',
      description: ' นอนคว่ำหน้าลงบนเสื่อออกกำลัง ขณะที่เหยียดแขนทั้งสองข้างไปด้านหน้า ขาเหยียดตึงไปด้านหลัง (ท่าเหมือนจะบิน) จากนั้นให้ยกแขน ขา และหน้าอกขึ้นเหนือพื้นเล็กน้อย ค้างไว้สัก 2 วินาทีแล้วปล่อยตัวลงกลับสู่ท่าเริ่มต้น ทำทั้งหมด 4 เซต เซตละ 12 ครั้ง'
    },
    {
      title: 'Hug Knees To Chest',
      image: '../../assets/pic/back-body2.jpg',
      description: 'นอนหงายลงบนเสื่อออกกำลัง แล้วยกเข่าทั้งสองข้างขึ้นมาที่หน้าอกโดยที่ใช้แขนกอดเข่าไว้ให้มั่น ทำค้างไว้ 10-20 วินาที ทั้งหมด 4 เซต'
    },
    {
      title: 'Frozen V-sit',
      image: '../../assets/pic/back-body3.jpg',
      description: 'เริ่มต้นให้นอนหงายลงบนพื้น เหยียดแขนทั้งสองข้างไปด้านบน เสร็จแล้วให้ยกตัวและขาขึ้นมาพร้อมกัน (บอดี้เราขณะทำท่านี้จะคล้ายตัว V ) ทำค้างไว้ให้ได้ราว 30 วินาที'
    },
  ];

}
