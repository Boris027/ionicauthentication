import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id:string='loading.json'
  constructor(private router:Router,private activateroute:ActivatedRoute) {
    this.activateroute.paramMap.subscribe(params=>{
      this.id=params.get('id')??"loading.json"
      this.updateAnimationPath();
    })
  }

  options: AnimationOptions = {
    path: ('/assets/'+this.id),
    
  };
  
  updateAnimationPath() {
    this.options = {
      path: '/assets/' + this.id, 
    };
  }

  animationCreated(animationItem: AnimationItem): void {
  }

  

  ngOnInit() {
    
    timer(2000).subscribe({
      next:(value)=>{
        this.router.navigate(['/home'])
      },
      error:(err)=>{
          console.log(err)
      },
    })
    
  }

}
