import { ChangeDetectorRef, Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent implements OnInit {
  public newBmi: number = 0; // Parameter TDEE
  public newBmiText: string = ''; // Parameter TDEE
  public newBmr: number = 0; // Parameter BMR
  public newTdee: number = 0; // Parameter TDEE

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
    let healthCondition: string = this.el.nativeElement.querySelector("#healthCondition").value;

    let errorMsg = "";
    this.newBmi = 0;
    this.newBmiText = "";
    this.newBmr = 0;
    this.newTdee = 0;

    // Clear Message error every time "Start calculate" is clicked
    this.el.nativeElement.querySelector("#error").innerText = "";

    if (ageNum === 0 || ageNum > 100 || ageNum < 0) {
      errorMsg = "โปรดกรอกอายุให้ถูกต้อง";
      // Show error message in HTML
      this.el.nativeElement.querySelector("#error").innerText = errorMsg;
      return;
    }
    if (heightNum === 0 || heightNum > 200 || heightNum < 0) {
      errorMsg = "โปรดกรอกส่วนสูงให้ถูกต้อง";
      // Show error message in HTML
      this.el.nativeElement.querySelector("#error").innerText = errorMsg;
      return;
    }
    if (weightNum === 0 || weightNum > 150 || weightNum < 0) {
      errorMsg = "โปรดกรอกนํ้าหนักให้ถูกต้อง";
      // Show error message in HTML
      this.el.nativeElement.querySelector("#error").innerText = errorMsg;
      return;
    }
    // Check Error
    if (errorMsg !== "") {
      // Show error message in HTML
      this.el.nativeElement.querySelector("#error").innerText = errorMsg;
      return; // 
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
        this.newBmiText = "ผอมเกินไป";
      } else if (this.newBmi < 24 && this.newBmi >= 18.5) {
        this.newBmiText = "นํ้าหนักปกติ";
      } else if (this.newBmi < 27 && this.newBmi >= 24) {
        this.newBmiText = "น้ำหนักเกิน";
      } else if (this.newBmi < 30 && this.newBmi >= 27) {
        this.newBmiText = "โรคอ้วน";
      } else if (this.newBmi < 35 && this.newBmi >= 30) {
        this.newBmiText = "โรคอ้วนระยะสอง";
      } else {
        this.newBmiText = "โรคอ้วนระยะสุดท้าย";
      }

      // Adjust TDEE based on health condition
      let healthConditionFactor = 1; // Factor to adjust TDEE based on health condition
      if (healthCondition === "diabetes") {
        healthConditionFactor = 0.9; // Adjust TDEE for diabetes
      } else if (healthCondition === "hypertension") {
        healthConditionFactor = 0.85; // Adjust TDEE for hypertension
      } else if (healthCondition === "heartDisease") {
        healthConditionFactor = 0.8; // Adjust TDEE for heart disease
        // Add more conditions as needed
      } else if (healthCondition === "asthma") {
        healthConditionFactor = 0.88; // Adjust TDEE for asthma
      } else if (healthCondition === "arthritis") {
        healthConditionFactor = 0.87; // Adjust TDEE for arthritis
      } else if (healthCondition === "chronicKidneyDisease") {
        healthConditionFactor = 0.82; // Adjust TDEE for chronic kidney disease
      } else if (healthCondition === "chronicObstructivePulmonaryDisease") {
        healthConditionFactor = 0.85; // Adjust TDEE for chronic obstructive pulmonary disease
      } else if (healthCondition === "osteoporosis") {
        healthConditionFactor = 0.88; // Adjust TDEE for osteoporosis
      } else if (healthCondition === "thyroidDisorders") {
        healthConditionFactor = 0.85; // Adjust TDEE for thyroid disorders
      }

      this.newTdee = Math.round(this.newBmr * activeNum * healthConditionFactor * 100) / 100; // Apply health condition factor

    } else {
      // Show error message in HTML
      this.el.nativeElement.querySelector("#error").innerText = errorMsg;
    }
  }
}  
