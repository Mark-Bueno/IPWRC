import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  login(username: string, password: string): Observable<any> {
    const body = JSON.stringify({
      username,
      password,
    });
    return this.http.post<any>(this.baseUrl + '/login', body, {observe: 'response'});
  }

  signup(username: string, password: string): Observable<User> {
    const body = JSON.stringify({
      id: 0,
      username,
      password,
      role: 'default'
    });
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<User>(this.baseUrl, body, requestOptions);
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/' + username, this.authService.getAuthorizationHeader());
  }
}
