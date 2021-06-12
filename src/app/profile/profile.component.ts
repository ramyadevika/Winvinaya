import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile:Profile=new Profile();
  constructor() { }

  ngOnInit(): void {
  }


}
export class Profile{

  private _name: string="Ramya";
  private _email: string="fdddd21@gmail.com";
    private _dob: string="29/9/21";
    private _mobile: string="8779877777";


    public get name() {
        return this._name;
    }

    public set name(name: string) {

        this._name = name;
    }
    public get email() {
      return this._email;
  }

  public set email(email: string) {

      this._email = email;
  }
  public get dob() {
    return this._dob;
}

public set dob(dob: string) {

    this._dob = dob;
}
public get mobile() {
  return this._mobile;
}

public set mobile(mobile: string) {

  this._mobile = mobile;
}


}
