import { Component, Inject } from '@angular/core';
import { AUTHENTICATION_SERVICE } from './Core/repository/tokens';
import { IbaseAuthService } from './Core/Services/interfaces/base-service-authentication.interface';
import { User } from './Core/models/User.model';
import { timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isloged:boolean=true

  public appPages = [
    { title: 'Home', url: '/home', icon: 'Home' },
    { title: 'People', url: '/people', icon: 'person' },
    { title: 'Groups', url: '/groups', icon: 'people' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    @Inject(AUTHENTICATION_SERVICE) private auth:IbaseAuthService<User>
  ) {
    auth.getLocalToken().subscribe({
      next:(value)=>{

        if(value==""){
          this.isloged=false;
        }else{
          timer(2500).subscribe({
            next:(value2)=>{
              this.isloged=true;
            }
          })
        }

        
      },
    })
  }


}
