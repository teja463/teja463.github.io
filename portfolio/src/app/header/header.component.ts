import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  navbar: any = {};

  constructor(private firebaseSvc: FirebaseService) { }

  ngOnInit() {
    this.firebaseSvc.getHeaders().subscribe(next => {
      this.navbar = next;
    });
  }

}
