import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EventEmitter} from 'events';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = 'app_token';
  userId = 'user';
  username = 'username';


  constructor(private http: HttpClient) {
  }

  storeToken(token: string) {
    localStorage.setItem(this.token, token);
  }

  storeUser(userId: string, username: string) {
    localStorage.setItem(this.userId, userId);
    localStorage.setItem(this.username, username);
  }

  private retrieveToken() {
    const storedToken = localStorage.getItem(this.token);
    return storedToken;
  }

  public retrieveUserId() {
    const storedUserId = localStorage.getItem(this.userId);
    return storedUserId;
  }

  public retrieveUsername() {
    const storedUsername = localStorage.getItem(this.username);
    return storedUsername;
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
