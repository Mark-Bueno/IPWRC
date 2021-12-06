import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    const body = JSON.stringify({
      username,
      password,
    });
    return this.http.post<any>(this.baseUrl + '/login', body, {observe: 'response'});
  }
}
