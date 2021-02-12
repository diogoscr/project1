import { WarningService } from 'src/app/services/warning.service';
import { Component, OnInit } from '@angular/core';
import { Warning } from 'src/app/models/warning.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-warning-details',
  templateUrl: './warning-details.component.html',
  styleUrls: ['./warning-details.component.css']
})
export class WarningDetailsComponent implements OnInit {
  currentWarning: Warning = {
    title: '',
    description: '',
    pubDate: '',
    visDate: '',
  };
  message = '';

  constructor(
    private warningService: WarningService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getWarning(this.route.snapshot.params.id);
  }

  getWarning(id: string): void {
    this.warningService.get(id)
    .subscribe(
      data => {
        this.currentWarning = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  updateWarning(): void {
    this.warningService.update(this.currentWarning.id, this.currentWarning)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteWarning(): void {
    this.warningService.delete(this.currentWarning.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/warnings']);
        },
        error => {
          console.log(error);
        });
  }
}
