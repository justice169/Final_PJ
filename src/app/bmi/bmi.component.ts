import { ChangeDetectorRef, Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent implements OnInit {
  public newBmi: number = 0;
  public newBmiText: string = '';
  public newBmr: number = 0; // เพิ่มตัวแปรสำหรับเก็บค่า BMR
  public newTdee: number = 0; // เพิ่มตัวแปรสำหรับเก็บค่า TDEE

  constructor(private el: ElementRef, private renderer: Renderer2, private changeDetectorRef: ChangeDetectorRef) {
  ;
  }

  ngOnInit(): void {
    this.calculateBMI();
  }

  getBmi = (heightNum: number, weightNum: number): number => {
    this.newBmi = weightNum / Math.pow(heightNum / 100, 2);
    this.newBmi = Math.round(this.newBmi * 100) / 100;
    return this.newBmi;
  }

  calculateBMI(): void {
    let ageNum: number = +this.el.nativeElement.querySelector("#age").value;
    let weightNum: number = +this.el.nativeElement.querySelector("#weight").value;
    let heightNum: number = +this.el.nativeElement.querySelector("#height").value;
    let genderNum: number = +this.el.nativeElement.querySelector("#gender").value;
    let activeNum: number = +this.el.nativeElement.querySelector("#active").value;
    let errorMsg = "";
    this.newBmi = 0;
    this.newBmiText = "";
    this.newBmr = 0;
    this.newTdee = 0;
  
    // เคลียร์ข้อความ error ทุกครั้งที่กด "Start calculate"
    this.el.nativeElement.querySelector("#error").innerText = "";
  
    if (ageNum === 0 || ageNum > 100 || ageNum < 0) {
      errorMsg = "Please enter correct age";
    }
    if (heightNum === 0 || heightNum > 200 || heightNum < 0) {
      errorMsg = "Please enter correct height";
    }
    if (weightNum === 0 || weightNum > 150 || weightNum < 0) {
      errorMsg = "Please enter correct weight";
    }
  
    if (errorMsg === "") {
      if (genderNum === 1) {
        this.newBmr = weightNum * 10 + heightNum * 6.25 + ageNum * 5 + 6;
        this.getBmi(heightNum, weightNum);
      }
      if (genderNum === 2) {
        this.newBmr = weightNum * 10 + heightNum * 6.25 - ageNum * 5 - 161;
        this.getBmi(heightNum, weightNum);
      }
      
      if (this.newBmi < 18.5) {
        this.newBmiText = "Too light";
      } else if (this.newBmi < 24 && this.newBmi >= 18.5) {
        this.newBmiText = "normal range";
      } else if (this.newBmi < 27 && this.newBmi >= 24) {
        this.newBmiText = "Overweight";
      } else if (this.newBmi < 30 && this.newBmi >= 27) {
        this.newBmiText = "mild obesity";
      } else if (this.newBmi < 35 && this.newBmi >= 30) {
        this.newBmiText = "moderate obesity";
      } else {
        this.newBmiText = "severe obesity";
      }
  
      this.newTdee = Math.round(this.newBmr * activeNum * 100) / 100;
    } else {
      // แสดงข้อความ error ใน HTML
      this.el.nativeElement.querySelector("#error").innerText = errorMsg;
    }
  }
}
