import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updatedPet: any;
  petId: any;
  message: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.updatedPet = { name: "", type: "", description: "", skill1: "", skill2: "", skill3: "" }
      // this.getProduct(params['id']);
      this.petId = params['id'];
      console.log(this.petId);
      // this.message = {};
      this.getPet();
    });
  }

  getPet(){
    let observable = this._httpService.getOnePet(this.petId);
    observable.subscribe(data => { 
      console.log("Got our products!", data) 
      this.updatedPet = {name: data['name'], type: data['type'], description: data['description'], skill1: data['skill1'], skill2: data['skill2'], skill3: data['skill3']}
      console.log(this.updatedPet);
    });
  }

  Update() {
    console.log(this.updatedPet);
    let observable = this._httpService.update(this.updatedPet, this.petId);
    console.log(this.petId);
    observable.subscribe(data => {console.log("Updated our data", data)
    this.message = data;
    console.log(this.message);
    this.updatedPet = { name: "", type: "", description: "", skill1: "", skill2: "", skill3: "" }
    if(!this.message.errors){
      this._router.navigate(['/pets/' + this.petId]);
    }
    else{
      this.getPet();
    }
    });
  }

  homeClick(){
    this._router.navigate(['/pets']);
  }

}
