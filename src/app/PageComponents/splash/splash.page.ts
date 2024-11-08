import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { timer } from 'rxjs';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone:true,
  imports: [LottieComponent,IonicModule]

})
export class SplashPage implements OnInit {
  showSidebar = false;

  constructor(private router:Router) { }
  options: AnimationOptions = {
    path: '/assets/loading.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  ngOnInit() {
    timer(2000).subscribe({
      next:(value)=>{
        this.router.navigate(['/home'])
      },
    })
    
  }

}
