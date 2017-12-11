import 'rxjs/add/operator/switchMap';
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {VoorstellingService} from '../../../services/voorstelling.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {Voorstelling} from '../../../models/voorstelling.model';

@Component({
  selector: 'app-add-voorstelling',
  templateUrl: './voorstelling-add.component.html',
  styleUrls: ['../../../app.component.css']
})

export class VoorstellingAddComponent {
  voorstellingAddForm: FormGroup;
  voorstelling = new Voorstelling();

  constructor(private voorstellingService: VoorstellingService,
              private router: Router,
              private location: Location,
              private formBuilder: FormBuilder) {
    this.buildForm();
  };

  buildForm(): void {
    this.voorstellingAddForm = this.formBuilder.group({
      name: [this.voorstelling.name, Validators.required],
      genre: [this.voorstelling.genre, Validators.required],
      imagePath: [this.voorstelling.imagePath, Validators.required],
      time: [this.voorstelling.time, Validators.required],
   

   
    
    });
  }

  add(): void {
    const voorstelling = this.voorstellingAddForm.value as Voorstelling;
    this.voorstellingService.add(voorstelling)
      .then(response => {
        console.log('response', response);
        this.router.navigate(['/voorstellingen']);
      });
  }

  goBack(): void {
    this.location.back();
  }
}
