import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {VoorstellingService} from '../../services/voorstelling.service';
import {Voorstelling} from '../../models/voorstelling.model';

@Component({
  selector: 'app-voorstelling-list',
  templateUrl: './voorstelling-list.component.html',
  styleUrls: ['../../app.component.css'],
  providers: [VoorstellingService]
})

export class VoorstellingListComponent implements OnInit {
  voorstellingen: Voorstelling[];

  constructor(private router: Router,
              private voorstellingService: VoorstellingService) {
  }

  /**
   * Gets the existing users
   */
  getVoorstellingen(): void {
    this.voorstellingService.getVoorstellingen()
      .then(voorstellingen => {
        this.voorstellingen = voorstellingen;
      });
  }

  ngOnInit(): void {
    this.getVoorstellingen();
  }

  

  viewDetail(id: string): void {
    this.router.navigate(['/detail/voorstelling', id]);
  }
}
