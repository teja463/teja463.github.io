import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string="Brahma Teja Ponnuru";
  headerLinks = [
    {
      "link": "skills",
      "title": "Skills"
    },
    {
      "link": "experience",
      "title": "Experience"
    },
    {
      "link": "resume",
      "title": "Resume"
    },
    {
      "link": "contact",
      "title": "Contact"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
