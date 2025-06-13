import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// landing page home new
export class HomeComponent {

  constructor(private router: Router){
    
  }

  goToClientForm(){
    this.router.navigate(['/clientInformation']);
  }

}
