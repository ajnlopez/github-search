import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }


  getIssues(text) {
    return this.http.get(`https://api.github.com/search/issues?q=repo:facebook/react+${text}:in:title`).pipe(
      map((result: any) =>
        result.items
      ));
  }
}
