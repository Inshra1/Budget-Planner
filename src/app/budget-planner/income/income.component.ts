import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {
  incomeForm: any;
  selectedMonth: any;
  janauaryIncomes:any[]=[
    {source:'Salary',amount:5000, investments:'401(k)'},
    {source:'Freelancing',amount:2000, investments:'Stocks'},
  ];
  februaryIncomes:any[]=[
   {source:'Salary',amount:5800, investments:'401(k)'},
    {source:'Rental Income',amount:900, investments:'Real Estate'},
   ];
  marchIncomes:any[] =[
    {source:'Salary',amount:5200, investments:'401(k)'},
    {source:'Freelancing',amount:2200, investments:'Stocks'},
    {source:'Rental Income',amount:600, investments:'Real Estate'},
  ];
 

monthSelected:boolean=false; //agr koi month select nai kia to it will remain disable
  constructor(public fb: FormBuilder, public router:Router) { 

   const currentDate= new Date();
   this.selectedMonth=currentDate.toLocaleString('default', {month:'long'});//selected date ko by default current month show kr dega

  }

  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investments: ['', Validators.required]
    });
  }

  onChange(event: any) {
    this.monthSelected=true; //jaisy hi month mil jai to 3eno fields show ho jaigy
    this.selectedMonth = event.target.value; //job ham select kr rhy hy wo value will be stored in SelectedMonth
    this.getFilteredIncomes(); //jo b month ham select kryge usky saray details show krny k lai
  }

  calculateTotalIncome(month:string):number{
    let totalIncome=0;
    for (const income of this.getIncomesForMonth(month)){
      totalIncome += income.amount;
    }
    return totalIncome;
  }
   
  getIncomesForMonth(month:string): any[] {
    switch(month){
      case 'January':
      return this.janauaryIncomes;
      case 'February':
      return this.februaryIncomes;
      case 'March':
      return this.marchIncomes;
    
      default:
      return [];
    }
  }

  getFilteredIncomes() {
    let filteredIncomes:any[]= [];
    switch(this.selectedMonth){
      case 'January':
      filteredIncomes=[...this.janauaryIncomes];
      break;
      case 'February':
      filteredIncomes=[...this.februaryIncomes]
      break;
      case 'March':
      filteredIncomes=[...this.marchIncomes];
      break;
     
      default:
      break;
    }
    return filteredIncomes;
  }

  

  onSubmit() {
    if(this.incomeForm.valid){
      const newIncome=this.incomeForm.value;
      switch(this.selectedMonth){
        case 'January':
        this.janauaryIncomes.push(newIncome);
        break;
        case 'February':
        this.februaryIncomes.push(newIncome);
        break;
        case 'March':
        this.marchIncomes.push(newIncome);
        break;
     
        default:
        break;
      }
      this.incomeForm.reset();
      this.incomeForm.patchValue({month:'', source:'', amount:'',investments:''});
    }

  }

  saveForm(){
    console.log('Form Saved');
  }

  onBack(){
    this.router.navigate(['/budget-planner/dashboard'])
  }


}
