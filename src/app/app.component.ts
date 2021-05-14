import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { pipe, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GithubService } from './github.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'github-search';
  issue: string;
  issues = ['uno', 'dos', 'tres'];
  issuesFiltered;


  constructor(private github: GithubService) {

  }

  issueChanged(event) {
    this.github.getIssues(event).subscribe(items => this.issuesFiltered = items);
  }

}
