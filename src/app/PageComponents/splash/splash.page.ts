import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  showSidebar = false;

  constructor(private router:Router) { }


  ngOnInit() {
    timer(2000).subscribe({
      next:(value)=>{
        this.router.navigate(['/home'])
      },
    })
    
  }

}
