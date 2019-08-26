import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Pets: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.Pets = [];
    this.getPetsFromService();
    this._route.params.subscribe((params: Params) => {
      // console.log(params['id'])
    });
  }

  createClick(){
    this._router.navigate(['/pets/new']);
  }

  getPetsFromService(){
    let observable = this._httpService.getPets();
    observable.subscribe(data => { 
      console.log("Got our products!", data) 
      this.Pets = data['anything'];
    });
  }

  viewClick(id){
    this._router.navigate(['/pets/' + id]);
  }

  editClick(id){
    this._router.navigate(['/pets/' + id + '/edit'])
  }

}
