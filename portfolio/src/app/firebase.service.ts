import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const HEADERS_JSON_URL = 'https://portfolio-2ef24.firebaseio.com/headers.json';

@Injectable()
export class FirebaseService {

  constructor(private httpClient: HttpClient) { }


  getHeaders(){
    return this.httpClient.get(HEADERS_JSON_URL);
  }
}
