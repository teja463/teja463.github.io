import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const HEADERS_URL = 'https://portfolio-2ef24.firebaseio.com/headers.json';
const HOME_URL = 'https://portfolio-2ef24.firebaseio.com/home.json';
const SKILLS_URL = 'https://portfolio-2ef24.firebaseio.com/skills.json';
const EXP_URL = 'https://portfolio-2ef24.firebaseio.com/exp.json';

@Injectable()
export class FirebaseService {

  constructor(private httpClient: HttpClient) { }


  getHeaders(){
    return this.httpClient.get(HEADERS_URL);
  }

  getHomeData(){
    return this.httpClient.get(HOME_URL);
  }

  getSkills(){
    return this.httpClient.get(SKILLS_URL);
  }

  getExp(){
    return this.httpClient.get(EXP_URL);
  }
}
