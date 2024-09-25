import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
//initially assigning true 
isSlideOut=true;

  constructor(private router: Router, private snackBar: MatSnackBar) {}


toggleSlideOut(): void {
this.isSlideOut = !this.isSlideOut;
}


onDash(){
  this.router.navigate(['/budget-planner/dashboard']);
}

onProfile(){
  this.router.navigate(['/budget-planner/profile']);
}

onHistory(){
  this.router.navigate(['/budget-planner/history']);
}

onLogout(){
  this.router.navigate(['/budget-planner/login']);
}

}
