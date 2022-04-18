import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  rand = () => {
    return Math.random().toString(36).substring(2);
  };

  token() {
    return this.rand() + this.rand();
  }
}
