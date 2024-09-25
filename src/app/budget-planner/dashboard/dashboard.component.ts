import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule,SideNavComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

//income data
lastMonthsIncome=['January:$1000', 'February: $2000','March:$3000'];
currentMonthIncome= '$4000';

//expense data
lastMonthsExpense=['January:$500', 'February:$600','March:$800'];
currentMonthExpense='$1500';

//todo transactions
todotrans=[
  {description:'Pay Gas Bill'},
  {description:'Pay Electricity Bill'},
  {description:'Buy Groceries'},
  {description:'Pay Shop Tax'}
];

//total trans

totalCurrentMonthIncome= 2000;
totalCurrentMonthExpense=1000;
//by - above 2 we get currentMonthSavings 

constructor(private router:Router){}

onIncome(){
  this.router.navigate(['/budget-planner/income'])
}

onExpense(){
  this.router.navigate(['/budget-planner/expense'])
}
onTodo(){
  this.router.navigate(['/budget-planner/todo'])
}

get currentMonthSavings(): number{
  return this.totalCurrentMonthIncome-this.totalCurrentMonthExpense;
}

}
