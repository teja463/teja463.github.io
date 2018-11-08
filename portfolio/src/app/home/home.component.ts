import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData: any = {};
  constructor(private firebaseSvc: FirebaseService) { }

  ngOnInit() {
    this.firebaseSvc.getHomeData().subscribe(next => {
      this.homeData = next;
    });
  }

}
