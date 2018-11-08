import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string="Brahma Teja Ponnuru";
  headerLinks: any = [];

  constructor(private firebaseSvc: FirebaseService) { }

  ngOnInit() {
    this.headerLinks = this.firebaseSvc.getHeaders();
  }

}
