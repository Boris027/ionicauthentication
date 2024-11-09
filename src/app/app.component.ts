import { Component, Inject } from '@angular/core';
import { AUTHENTICATION_SERVICE } from './Core/repository/tokens';
import { IbaseAuthService } from './Core/Services/interfaces/base-service-authentication.interface';
import { User } from './Core/models/User.model';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    { title: 'Logout', url: '/logout', icon: 'log-out' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private router:Router,
    private alertcontroller:AlertController,
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


  async navigate(argu: string) {
    if(argu=="/logout"){
      const alert=await this.alertcontroller.create({
        header:"¿Quieres cerrar sesión?",
        buttons:[{
          text:"Yes",
          handler:()=>{
            this.auth.setLocalToken("")
            this.router.navigate(["/login"])
          },
        },{
          text:"No",
          handler:()=>{
            
          }
        }]
      })
      alert.dismiss()
      await alert.present()
    }else{
      this.router.navigate([argu])
    }
  }

  

}
