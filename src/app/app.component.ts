import { Component, Inject } from '@angular/core';
import { AUTHENTICATION_SERVICE } from './Core/repository/tokens';
import { IbaseAuthService } from './Core/Services/interfaces/base-service-authentication.interface';
import { User } from './Core/models/User.model';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isloged:boolean=false

  public appPages = [
    { title: 'Home', url: '/home', icon: 'Home' },
    { title: 'People', url: '/people', icon: 'person' },
    { title: 'Groups', url: '/groups', icon: 'people' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    @Inject(AUTHENTICATION_SERVICE) private auth:IbaseAuthService<User>
  ) {
    if(auth.getLocalToken()!=""){
      this.isloged=true
    }
  }


}
