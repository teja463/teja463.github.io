import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../firebase.service";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"]
})
export class SkillsComponent implements OnInit {
  skills: any = [];
  constructor(private firebaseSvc: FirebaseService) {}

  ngOnInit() {
    this.skills = this.firebaseSvc.getSkills();
  }
}
