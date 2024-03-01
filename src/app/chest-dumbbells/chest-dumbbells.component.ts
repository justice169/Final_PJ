import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-chest-dumbbells',
  templateUrl: './chest-dumbbells.component.html',
  styleUrls: ['./chest-dumbbells.component.css']
})
export class ChestDumbbellsComponent {

  exercises: any[] = [
    {
      title: 'Dumbbell Bench Press',
      image: '../../assets/pic/chest-dumb1.jpg',
      description: 'เริ่มต้นนอนหงายหน้าบนม้านั่งออกกำลังกาย จับดัมเบลยกขึ้นในลักษณะที่แขนตึง โดยหันฝ่ามือออกไปทางด้านหน้าของลำตัว ค่อยๆคลายกล้ามเนื้อหน้าอก งอแขนเพื่อลดดัมเบลลงจนสุด โดยให้แขนทำมุม 60 องศากับลำตัว พร้อมกับสูดหายใจเข้ายกดัมเบลขึ้น เพื่อกลับสู่ท่าเตรียม พร้อมกับปล่อยลมหายใจออกจนสุด'
    },
    {
      title: 'Incline Dumbbell Press',
      image: '../../assets/pic/chest-dumb2.jpg',
      description: 'เริ่มต้นนอนบนเบาะม้านั่งออกกำลังกายเอียงขึ้น 45 องศา ยกดัมเบลขึ้นในลักษณะที่แขนตึง แล้วค่อยๆลดดัมเบลลงจนกล้ามเนื้อหน้าอกถูกเหยียดตัวจนสุดโดยให้แขนทำมุมประมาณ 70 องศากับลำตัว พร้อมกับสูดลมหายใจเข้าจนสุดจากนั้นยกดัมเบลขึ้นจนสุดเพื่อกลับสู่ท่าเตรียม พร้อมกับปล่อยลมหายใจออกจนสุด'
    },
    {
      title: 'Decline Dumbbell Bench Press',
      image: '../../assets/pic/chest-dumb3.jpg',
      description: 'เริ่มต้นนอนหงายหน้าบนเบาะม้านั่งออกกำลังกายเอียงลง 45 องศาเกี่ยวขาทั้งสองข้างล็อคกับเบาะรองไว้ จับดัมเบลดันขึ้นในลักษณะที่แขนตึงค่อยๆคลายกล้ามเนื้อหน้าอก ลดดัมเบลลงจนกล้ามเนื้อหน้าอกถูกเหยียดตัวจนสุด พร้อมกับสูดลมหายใจเข้าจนสุดจากนั้นยกดัมเบลขึ้นจนสุด พร้อมกับปล่อยลมหายใจออกจนสุด'
    },
  ];

}
