import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
login=false
  signup(){
     this.login=true
  }
  loginform(){
     this.login=false
  }

}
