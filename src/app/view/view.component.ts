import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  petId: any;
  pet: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.pet = { name: "", type: "", description: "", skill1: "", skill2: "", skill3: "" }
      this.petId = params['id'];
      this.getPet(this.petId);
    });
  }

  getPet(id){
    let observable = this._httpService.getOnePet(id);
    observable.subscribe(data => {
      console.log("Got our data!", data)
      this.pet = data;
    });
  }

  adopt(id){
    console.log(id);
    let observable = this._httpService.delete(id);
    observable.subscribe(data => {console.log("Removed task", data)
      this._router.navigate(['/pets']);
    });
  }

  homeClick(){
    this._router.navigate(['/pets']);
  }

}
