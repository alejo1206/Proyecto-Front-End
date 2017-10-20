import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private http: Http) { }
  headers: string[] = [];
  rows: string[][] = [];
  private data = [];
  
  ngOnInit() {
    let url = document.location.href.split("/");
    this.http.get("/JSON/" + url[url.length - 1] + ".json").subscribe(resp =>{
      this.data = resp.json();
      for (var key in this.data[0]) {
        this.headers.push(key);
      }
      for(var i = 0; i <= this.data.length - 1; i++){
        let row: string[] = [];
        for (var key in this.data[i]) {
          row.push(this.data[i][key]);
        }
        this.rows.push(row);
      }
    });
  }
}
