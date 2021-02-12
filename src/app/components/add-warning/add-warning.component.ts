import { Component, OnInit } from '@angular/core';
import { Warning } from 'src/app/models/warning.model';
import { WarningService } from 'src/app/services/warning.service';

@Component({
  selector: 'app-add-warning',
  templateUrl: './add-warning.component.html',
  styleUrls: ['./add-warning.component.css']
})
export class AddWarningComponent implements OnInit {
  warning: Warning = {
    title: '',
    description: '',
    pubDate: '',
    visDate: ''
  };
  submitted = false;

  constructor(private warningService: WarningService) { }

  ngOnInit(): void {
  }

  saveWarning(): void {
    const data = {
      title: this.warning.title,
      description: this.warning.description,
      pubDate: this.warning.pubDate,
      visDate: this.warning.visDate,
    };

    this.warningService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
    },
    error => {
      console.log(error);

    });
  }

  newWarning(): void {
    this.submitted = false;
    this.warning = {
      title: '',
      description: '',
      pubDate: '',
      visDate: ''
    };
  }

}
