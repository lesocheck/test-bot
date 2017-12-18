import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public userDetailView: boolean = false;
  public users: any;
  public userDetails: any;
  public indexUserUpdating: any;
  private subscriptions: any[] = [];

  constructor(
    private apiService: ApiService
  ) {  }

  ngOnInit() {
    this.subscriptions.push(
      this.fetchUsers()
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  viewUserDetails(user, index) {
    this.userDetails = user;
    this.indexUserUpdating = index;
    this.fetchUserDetails(user.id);
  }

  private fetchUsers() {
    this.apiService.fetchUsers().subscribe(response => {
      if(response){
        this.users = response.json();

        // with real API
        // this.users = response.json().result;
      }
    }, (error: any) => {
      console.error(error.json());
    });
  }

  private fetchUserDetails(id) {
    this.apiService.fetchUserDetails(id).subscribe(response => {
      if(response){
        this.userDetails = response.json();

        // with real API
        // this.userDetails = response.json().result;
      }
      this.userDetailView = true;
    }, (error: any) => {
      console.error(error.json());
    });
  }

  onChanged(update:boolean){
    if(update == false ){
      this.userDetailView = false;
      this.fetchUsers()
    }
  }




}
