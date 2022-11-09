import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = 'app_token';


  constructor() {
  }

  storeToken(token: string) {
    localStorage.setItem(this.token, token);
  }

  private retrieveToken() {
    const storedToken = localStorage.getItem(this.token);
    return storedToken;
  }

  public removeToken() {
    localStorage.removeItem(this.token);
  }

  getAuthorizationHeader() {
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: this.retrieveToken()
      })
    };
    return requestOptions;
  }

  isLoggedIn() {
    if (this.retrieveToken() !== null) {
      return true;
    }
    return false;
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
