import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  private usernameObs$: BehaviorSubject<string> = new BehaviorSubject(null);

  getUsernameObs(): Observable<string> {
    return this.usernameObs$.asObservable();
  }

  setUsernameObs(username) {
    this.usernameObs$.next(username);
  }
}
