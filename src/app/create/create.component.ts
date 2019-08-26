import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newPet: any;
  message: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newPet = { name: "", type: "", description: "", skill1: "", skill2: "", skill3: "" }
  }

  Create() {
    console.log(this.newPet);
    let observable = this._httpService.createNew(this.newPet);
    observable.subscribe(data => {console.log("Added our data", data)
      this.message = data;
      console.log(data);
      this.newPet = { name: "", type: "", description: "", skill1: "", skill2: "", skill3: "" }
      if(!this.message.errors){
        this._router.navigate(['/pets']);
      }
    });
  }

  homeClick(){
    this._router.navigate(['/pets']);
  }

}
