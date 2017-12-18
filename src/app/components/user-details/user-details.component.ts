import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: any;
  @Output() userChange = new EventEmitter<string>();
  @Output() onChanged = new EventEmitter<boolean>();


  public edit: boolean = true;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  save(user) {
    this.userChange.emit(user);

    this.updateUserDetails(user)
  }
  private updateUserDetails(user) {
    this.apiService.updateUserDetails(user).subscribe(response => {

      this.onChanged.emit(false);
    }, (error: any) => {
      console.error(error.json());
    });
  }

}
