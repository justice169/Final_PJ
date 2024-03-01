import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  image: string;
  category: string;
  servingSize: string;
  totalCalories: string;
  caloriesFromFat: string;
  totalFat: string;
  saturatedFat: string;
  transFat: string;
  cholesterol: string;
  sodium: string;
  totalCarbohydrates: string;
  dietaryFiber: string;
  sugars: string;
  protein: string;
}

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: [
    './nutrition.component.css',
    '../../assets/vendor/bootstrap/css/bootstrap.min.css',
    '../../assets/vendor/bootstrap-icons/bootstrap-icons.css',
    '../../assets/vendor/aos/aos.css',
    '../../assets/vendor/glightbox/css/glightbox.min.css',
    '../../assets/vendor/swiper/swiper-bundle.min.css'
  ]
})

export class NutritionComponent {
  fruits: MenuItem[] = [];
  vegetables: MenuItem[] = [];
  meats: MenuItem[] = [];

  constructor() {
    this.menuItems.forEach((menuItem) => {
      if (menuItem.category === 'Fruit') {
        this.fruits.push(menuItem);
      } else if (menuItem.category === 'Vegetable') {
        this.vegetables.push(menuItem);
      } else if (menuItem.category === 'Meat') {
        this.meats.push(menuItem);
      }
    });
  }

  menuItems: MenuItem[] = [
    {
      name: 'Apple',
      image: 'apple.png',
      servingSize: '100 g',
      totalCalories: '52',
      caloriesFromFat: '0',
      totalFat: '0.2',
      saturatedFat: '0',
      transFat: '0',
      cholesterol: '0',
      sodium: '1',
      totalCarbohydrates: '14',
      dietaryFiber: '2.4',
      sugars: '10',
      protein: '0.3',
      category: 'Fruit'
    },
    {
      name: 'Banana',
      image: 'banana.png',
      servingSize: '100 g',
      totalCalories: '89',
      caloriesFromFat: '3',
      totalFat: '0.3',
      saturatedFat: '0.1',
      transFat: '0',
      cholesterol: '0',
      sodium: '1',
      totalCarbohydrates: '23',
      dietaryFiber: '2.6',
      sugars: '12',
      protein: '1.1',
      category: 'Fruit'
    },
    {
      name: 'Orange',
      image: 'orange.png',
      servingSize: '100 g',
      totalCalories: '43',
      caloriesFromFat: '2',
      totalFat: '0.2',
      saturatedFat: '0',
      transFat: '0',
      cholesterol: '0',
      sodium: '0',
      totalCarbohydrates: '9',
      dietaryFiber: '2.4',
      sugars: '8',
      protein: '0.9',
      category: 'Fruit'
    },
    {
      name: 'Broccoli',
      image: 'broccoli.png',
      servingSize: '100 g',
      totalCalories: '34',
      caloriesFromFat: '3',
      totalFat: '0.4',
      saturatedFat: '0.1',
      transFat: '0',
      cholesterol: '0',
      sodium: '33',
      totalCarbohydrates: '7',
      dietaryFiber: '2.6',
      sugars: '1.7',
      protein: '2.8',
      category: 'Vegetable'
    },
    {
      name: 'Carrot',
      image: 'carrot.png',
      servingSize: '100 g',
      totalCalories: '41',
      caloriesFromFat: '2',
      totalFat: '0.2',
      saturatedFat: '0',
      transFat: '0',
      cholesterol: '0',
      sodium: '69',
      totalCarbohydrates: '10',
      dietaryFiber: '2.8',
      sugars: '4.7',
      protein: '0.9',
      category: 'Vegetable'
    },
    {
      name: 'Cucumber',
      image: 'cucumber.png',
      servingSize: '100 g',
      totalCalories: '15',
      caloriesFromFat: '1',
      totalFat: '0.2',
      saturatedFat: '0',
      transFat: '0',
      cholesterol: '0',
      sodium: '2',
      totalCarbohydrates: '3.6',
      dietaryFiber: '0.5',
      sugars: '1.7',
      protein: '0.7',
      category: 'Vegetable'
    },
    {
      name: 'Beef',
      image: 'beef.png',
      servingSize: '100 g',
      totalCalories: '250',
      caloriesFromFat: '150',
      totalFat: '17',
      saturatedFat: '7',
      transFat: '1',
      cholesterol: '80',
      sodium: '55',
      totalCarbohydrates: '0',
      dietaryFiber: '0',
      sugars: '0',
      protein: '25',
      category: 'Meat'
    },
    {
      name: 'Chicken',
      image: 'chicken.png',
      servingSize: '100 g',
      totalCalories: '165',
      caloriesFromFat: '75',
      totalFat: '8',
      saturatedFat: '2',
      transFat: '0',
      cholesterol: '85',
      sodium: '55',
      totalCarbohydrates: '0',
      dietaryFiber: '0',
      sugars: '0',
      protein: '20',
      category: 'Meat'
    },
    {
      name: 'Pork',
      image: 'pork.png',
      servingSize: '100 g',
      totalCalories: '250',
      caloriesFromFat: '150',
      totalFat: '17',
      saturatedFat: '7',
      transFat: '1',
      cholesterol: '80',
      sodium: '55',
      totalCarbohydrates: '0',
      dietaryFiber: '0',
      sugars: '0',
      protein: '25',
      category: 'Meat'
    }
  ];

  selectedMenuItem: MenuItem | null = null;

  onSelectMenuItem(menuItem: MenuItem): void {
    this.selectedMenuItem = menuItem;
  }
}
