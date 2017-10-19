import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*var tabla: string = "<table class=\"table table-sm table-striped table-bordered table-hover\"><thead>";
    var url: string[] = document.location.toString().split("/");
    switch(url[url.length - 1]){
      case "articulos":{
        tabla += ""
      }
    }
    document.getElementById("lista").innerHTML = tabla;
  }*/

  let input = {
    "data":[{"idArticulo":"1", "nombreArticulo":"Hamburguesa", "descripcionArticulo":"Hamburguesa completa con jam\u00f3n, queso y huevo", "precioArticulo":"30", "tipoArticulo":"Plato", "calorias":"150", "tiempoPreparacion":"10", "imagen":"2017-09-20 12_09_21Hamburguesa.jpg", "fechaBajaArticulo":"", "cantVecesPedido":"7", "idRestriccion":"", "nombreRestriccion":"", "descripcionRestriccion":"", "idCalificacionArticulo":"4", "calificacionArticulo":"Regular", "comentarioArticulo":"Mejorable", "fechaCalificacionArticulo":"2017-09-01"},
    {"idArticulo":"1", "nombreArticulo":"Hamburguesa", "descripcionArticulo":"Hamburguesa completa con jam\u00f3n, queso y huevo", "precioArticulo":"30", "tipoArticulo":"Plato", "calorias":"150", "tiempoPreparacion":"10", "imagen":"2017-09-20 12_09_21Hamburguesa.jpg", "fechaBajaArticulo":"", "cantVecesPedido":"7", "idRestriccion":"", "nombreRestriccion":"", "descripcionRestriccion":"", "idCalificacionArticulo":"1", "calificacionArticulo":"Bueno", "comentarioArticulo":"Todo ok", "fechaCalificacionArticulo":"2017-09-01"},
    {"idArticulo":"1", "nombreArticulo":"Hamburguesa", "descripcionArticulo":"Hamburguesa completa con jam\u00f3n, queso y huevo", "precioArticulo":"30", "tipoArticulo":"Plato", "calorias":"150", "tiempoPreparacion":"10", "imagen":"2017-09-20 12_09_21Hamburguesa.jpg", "fechaBajaArticulo":"", "cantVecesPedido":"7", "idRestriccion":"", "nombreRestriccion":"", "descripcionRestriccion":"", "idCalificacionArticulo":"6", "calificacionArticulo":"Bueno", "comentarioArticulo":"", "fechaCalificacionArticulo":"2017-09-19"},
    {"idArticulo":"2", "nombreArticulo":"Milanesa Napolitana", "descripcionArticulo":"Milanesa de carne vacuna a la napolitana", "precioArticulo":"40", "tipoArticulo":"Plato", "calorias":"200", "tiempoPreparacion":"15", "imagen":"2017-09-20 12_09_39Milanesa Napolitana.jpg", "fechaBajaArticulo":"", "cantVecesPedido":"12", "idRestriccion":"", "nombreRestriccion":"", "descripcionRestriccion":"", "idCalificacionArticulo":"2", "calificacionArticulo":"Regular", "comentarioArticulo":"Tard\u00f3 mucho en llegar", "fechaCalificacionArticulo":"2017-09-01"},
    {"idArticulo":"2", "nombreArticulo":"Milanesa Napolitana", "descripcionArticulo":"Milanesa de carne vacuna a la napolitana", "precioArticulo":"40", "tipoArticulo":"Plato", "calorias":"200", "tiempoPreparacion":"15", "imagen":"2017-09-20 12_09_39Milanesa Napolitana.jpg", "fechaBajaArticulo":"", "cantVecesPedido":"12", "idRestriccion":"", "nombreRestriccion":"", "descripcionRestriccion":"", "idCalificacionArticulo":"7", "calificacionArticulo":"Bueno", "comentarioArticulo":"", "fechaCalificacionArticulo":"2017-09-19"},
    {"idArticulo":"", "nombreArticulo":"Papas fritas", "descripcionArticulo":"Porci\u00f3n de papas fritas de 200g aprox.", "precioArticulo":"15", "tipoArticulo":"Plato", "calorias":"200", "tiempoPreparacion":"5", "imagen":"2017-09-20 12_09_49Papas Fritas.png", "fechaBajaArticulo":"", "cantVecesPedido":"2", "idRestriccion":"2", "nombreRestriccion":"Vegetariano", "descripcionRestriccion":"Apto para vegetarianos (no para veganos)", "idCalificacionArticulo":"", "calificacionArticulo":"", "comentarioArticulo":"", "fechaCalificacionArticulo":""},
    {"idArticulo":"", "nombreArticulo":"Papas fritas", "descripcionArticulo":"Porci\u00f3n de papas fritas de 200g aprox.", "precioArticulo":"15", "tipoArticulo":"Plato", "calorias":"200", "tiempoPreparacion":"5", "imagen":"2017-09-20 12_09_49Papas Fritas.png", "fechaBajaArticulo":"", "cantVecesPedido":"2", "idRestriccion":"1", "nombreRestriccion":"Cel\u00edaco", "descripcionRestriccion":"Apto para personas con celiaqu\u00eda", "idCalificacionArticulo":"", "calificacionArticulo":"", "comentarioArticulo":"", "fechaCalificacionArticulo":""},
    {"idArticulo":"", "nombreArticulo":"Coca Cola 2.5l", "descripcionArticulo":"Botella de gaseosa marca Coca Cola de 2.5 litros", "precioArticulo":"45", "tipoArticulo":"Bebida", "calorias":"400", "tiempoPreparacion":"0", "imagen":"2017-09-20 12_08_11Coca Cola 2,5.jpg", "fechaBajaArticulo":"", "cantVecesPedido":"6", "idRestriccion":"4", "nombreRestriccion":"Sin alcohol", "descripcionRestriccion":"Bebida sin alcohol", "idCalificacionArticulo":"", "calificacionArticulo":"", "comentarioArticulo":"", "fechaCalificacionArticulo":""},
    {"idArticulo":"5", "nombreArticulo":"Manaos Pomelo 3l", "descripcionArticulo":"Botella de gaseosa marca Manaos, sabor pomelo blanco, de 3 litros", "precioArticulo":"30", "tipoArticulo":"Bebida", "calorias":"300", "tiempoPreparacion":"0", "imagen":"2017-09-19 16_55_18manaos.png", "fechaBajaArticulo":"", "cantVecesPedido":"8", "idRestriccion":"4", "nombreRestriccion":"Sin alcohol", "descripcionRestriccion":"Bebida sin alcohol", "idCalificacionArticulo":"5", "calificacionArticulo":"Bueno", "comentarioArticulo":"Me gust\u00f3", "fechaCalificacionArticulo":"2017-08-01"},
    {"idArticulo":"5", "nombreArticulo":"Manaos Pomelo 3l", "descripcionArticulo":"Botella de gaseosa marca Manaos, sabor pomelo blanco, de 3 litros", "precioArticulo":"30", "tipoArticulo":"Bebida", "calorias":"300", "tiempoPreparacion":"0", "imagen":"2017-09-19 16_55_18manaos.png", "fechaBajaArticulo":"", "cantVecesPedido":"8", "idRestriccion":"4", "nombreRestriccion":"Sin alcohol", "descripcionRestriccion":"Bebida sin alcohol", "idCalificacionArticulo":"3", "calificacionArticulo":"Bueno", "comentarioArticulo":"Excelente producto", "fechaCalificacionArticulo":"2017-08-31"},
    {"idArticulo":"", "nombreArticulo":"Vino Santa Julia Blanco 750 ml.", "descripcionArticulo":"Vino Santa Julia, blanco, en botella de vidrio de 750 ml.", "precioArticulo":"74.99", "tipoArticulo":"Bebida", "calorias":"250", "tiempoPreparacion":"0", "imagen":"2017-09-20 12_09_57Santa Julia Blanco 750ml.png", "fechaBajaArticulo":"", "cantVecesPedido":"15", "idRestriccion":"", "nombreRestriccion":"", "descripcionRestriccion":"", "idCalificacionArticulo":"", "calificacionArticulo":"", "comentarioArticulo":"", "fechaCalificacionArticulo":""},
    {"idArticulo":"", "nombreArticulo":"Ensalada Mixta", "descripcionArticulo":"Ensalada de lechuga, tomate y cebolla", "precioArticulo":"12", "tipoArticulo":"Plato", "calorias":"25", "tiempoPreparacion":"2", "imagen":"2017-09-20 12_09_10Ensalada mixta.jpg", "fechaBajaArticulo":"", "cantVecesPedido":"0", "idRestriccion":"", "nombreRestriccion":"", "descripcionRestriccion":"", "idCalificacionArticulo":"", "calificacionArticulo":"", "comentarioArticulo":"", "fechaCalificacionArticulo":""}]
  }
  
  function convert(data: typeof input) {
    
      /*let rows = data.data.map(d => `<tr><td>${data.data}</td></tr>`);
      return `<table>${rows}</table>`;*/
      let rows = "<tr>";
      for (var key in data.data[0]) {
        rows += "<th>" + key + "</th>";
      }
      rows += "</tr></thead><tbody>"
      for(var i = 0; i <= data.data.length - 1; i++){
        rows += "<tr>";
        for (var key in data.data[i]) {
          rows += "<td>" + data.data[i][key] + "</td>";
        }
        rows += "</tr>";
      }
      rows += "</tbody></table>";
      document.getElementById("lista").innerHTML = "<table class=\"table table-sm col-sm-8 table-bordered table-striped table-hover\"><thead>" + rows;
  }
  
  console.log(convert(input));}

}
