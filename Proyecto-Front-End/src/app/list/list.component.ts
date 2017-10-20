import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var url: string[] = document.location.toString().split("/");
    var archivo = "~JSON/" + url[url.length - 1] + ".json";
    console.log(archivo);
    var input = require(archivo);

    /*
    function convert(data: typeof input) {
      
        let rows = "<tr>";
        for (var key in data[0]) {
          rows += "<th>" + key + "</th>";
        }
        rows += "</tr></thead><tbody>"
        for(var i = 0; i <= 12; i++){
          rows += "<tr>";
          for (var key in data[i]) {
            rows += "<td>" + data[i][key] + "</td>";
          }
          rows += "</tr>";
        }
        rows += "</tbody></table>";
        document.getElementById("lista").innerHTML = "<table class=\"table table-sm col-sm-8 table-bordered table-striped table-hover\"><thead>" + rows;
    }
    */
}

}
