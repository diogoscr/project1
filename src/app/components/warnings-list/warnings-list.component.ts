import { WarningService } from 'src/app/services/warning.service';
import { Component, OnInit } from '@angular/core';
import { Warning } from 'src/app/models/warning.model';

@Component({
  selector: 'app-warnings-list',
  templateUrl: './warnings-list.component.html',
  styleUrls: ['./warnings-list.component.css']
})
export class WarningsListComponent implements OnInit {

  warnings?: Warning[];
  currentWarning?: Warning;
  currentIndex = -1;
  title = '';

  constructor(private warningService: WarningService) { }

  ngOnInit(): void {
    this.retrieveWarnings();
  }

  retrieveWarnings(): void {
    this.warningService.getAll()
    .subscribe(
      data => {
        this.warnings = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.retrieveWarnings();
    this.currentWarning = undefined;
    this.currentIndex = -1;
  }

  setActiveWarning(warning: Warning, index: number): void {
    this.currentWarning = warning;
    this.currentIndex = index;
  }

  removeAllWarnings(): void {
    this.warningService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

}
