import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users = [
      {
        id: 1,
        name: 'Székely Levente',
        email: 'szekely.levi01@gmail.com',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlN6w6lrZWx5IExldmVudGUiLCJpYXQiOjE1MTYyMzkwMjJ9.MDxEAcXrsonRs4cJrd9uK_dMpy8EJIs1X3qzngsaxHc'
      },
      {
        id: 2,
        name: 'Példa Géza',
        email: 'peldageza@gmail.com',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlDDqWxkYSBHw6l6YSIsImlhdCI6MTUxNjIzOTAyMn0.kDQczZ9Ea0Wj_oU-zzkBSTQ_IAkqm2YG0IpjhbdLms4'
      }
    ]

    return { users };
  }
}
