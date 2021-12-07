import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  token = 'app_token';

  constructor(private http: HttpClient) {
  }

  store(content: string) {
    localStorage.setItem(this.token, content);
  }

  private retrieve() {
    const storedToken = localStorage.getItem(this.token);
    if (!storedToken) {
      localStorage.setItem(this.token, '');
      // throw new Error('no token found');
    }
    return storedToken;
  }

  public removeToken() {
    localStorage.removeItem(this.token);
  }

  getAuthorizationHeader() {
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: this.retrieve()
      })
    };
    return requestOptions;
  }


  isLoggedIn() {
    if (this.retrieve() !== null) {
      return true;
    }
    return false;
  }
}
