import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) { }


  fetchUsers() {

    return this.http.get(`http://localhost:3000/users`)
      .map((response: Response) => response);

    // with real API
    // return this.http.get(`/api/users`)
    //   .map((response: Response) => response);
  }

  fetchUserDetails(id) {
    return this.http.get(`http://localhost:3000/users/${id}`)
      .map((response: Response) => response);

    // with real API
    // return this.http.get(`/api/user/?id=${id}`)
    //   .map((response: Response) => response);
  }

  updateUserDetails(user) {
    return this.http.patch(`http://localhost:3000/users/${user.id}`, user)
      .map((response: Response) => response);

    // with real API
    // return this.http.post(`/api/user/`, user)
    //   .map((response: Response) => response);

  }

}
