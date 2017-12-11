import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {VoorstellingService} from "../../../services/voorstelling.service";
import {Voorstelling} from "../../../models/voorstelling.model";

@Component({
  selector: 'voorstelling-detail',
  templateUrl: './voorstelling-detail.component.html',
  styleUrls: ['../../../app.component.css']
})

export class VoorstellingDetailComponent implements OnInit{
  voorstelling: Voorstelling;

  constructor(
    private voorstellingService: VoorstellingService,
    private route: ActivatedRoute,
    private location: Location
  ){};

  ngOnInit(): void{
    this.route.params
      .switchMap((params: Params) => this.voorstellingService.getVoorstelling(params['id']))
      .subscribe(voorstelling => this.voorstelling = voorstelling);
  }

  goBack(): void{
    this.location.back();
  }
}
