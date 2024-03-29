import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent {
  selectedGender: string = 'male';
  selectedEquipment: string = 'dumbbells';

  constructor(private router: Router) { }

  startChestWorkout() {
    if (this.selectedGender === 'male') {
      if (this.selectedEquipment === 'bodyweight') {
        this.router.navigate(['/Cbody']);
      } else if (this.selectedEquipment === 'dumbbells') {
        this.router.navigate(['/Cdumb']);
      }
    } else if (this.selectedGender === 'female') {
      if (this.selectedEquipment === 'bodyweight') {
        this.router.navigate(['/Cbody']);
      } else if (this.selectedEquipment === 'dumbbells') {
        this.router.navigate(['/Cdumb']);
      }
    }
  }


  startAbdomenWorkout() {
    if (this.selectedGender === 'male') {
      if (this.selectedEquipment === 'bodyweight') {
        this.router.navigate(['/Abody']);
      } else if (this.selectedEquipment === 'dumbbells') {
        this.router.navigate(['/Adumb']);
      }
    } else if (this.selectedGender === 'female') {
      if (this.selectedEquipment === 'bodyweight') {
        this.router.navigate(['/Abody']);
      } else if (this.selectedEquipment === 'dumbbells') {
        this.router.navigate(['/Adumb']);
      }
    }
  }

  startBackWorkout() {
    if (this.selectedGender === 'male') {
      if (this.selectedEquipment === 'bodyweight') {
        this.router.navigate(['/Bbody']);
      } else if (this.selectedEquipment === 'dumbbells') {
        this.router.navigate(['/Bdumb']);
      }
    } else if (this.selectedGender === 'female') {
      if (this.selectedEquipment === 'bodyweight') {
        this.router.navigate(['/Bbody']);
      } else if (this.selectedEquipment === 'dumbbells') {
        this.router.navigate(['/Bdumb']);
      }
    }
  }

}
