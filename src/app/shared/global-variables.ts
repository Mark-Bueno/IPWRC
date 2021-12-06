import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalVariables {

  constructor() {
  }

  value = 1;
  page = 'login';

  getValue() {
    return this.value;
  }

  getPage() {
    return this.page;
  }

  setValue(value: number) {
    this.value = value;
  }

  setPage(page: string) {
    this.page = page;
  }
}
