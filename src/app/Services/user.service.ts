import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {User} from 'src/app/models/user.model'
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string

  constructor(private http: HttpClient) {
    this.apiUrl = environment.baseUrl
   }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/user`)
  }
}
