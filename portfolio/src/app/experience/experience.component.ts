import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  exp: any = {};

  constructor(private firebaseSvc: FirebaseService) { }

  ngOnInit() {
    this.firebaseSvc.getExp().subscribe(next => {
      this.exp =next;
    });
  }

}
