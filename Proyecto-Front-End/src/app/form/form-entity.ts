export class FormEntity {
    private id: string;
    private labels: string[];
    private values: string[];
    private types: string[];

    constructor(){
        var url: string[] = document.location.href.split("/");
        let clase: string = url[url.length - 2];
        var accion: string = url[url.length - 1];
        let id: number = 0;
        if(accion !== "crear"){
          id = Number.parseInt(accion);
          accion = clase;
          clase = url[url.length - 3];
        }
        this.http.get("/JSON/" + clase + ".json").subscribe(resp =>{
          this.entidad = this.getOne(resp.json(), id);
          
          if(this.entidad === null){
            alert("La entidad indicada no existe");
          }
          else{
            for (var key in this.entidad) {
              if(key !== "id"){
                let input = new Input();
                input.label = key;
                input.type = this.setType(key);
                if(accion === "crear" && input.type !== "list"){
                  input.value = "";
                }
                else{
                  input.value = this.entidad[key];
                } 
                this.inputs.push(input);
              }
            }
          }
          if(accion === "eliminar")
            (<HTMLInputElement> document.getElementById("fieldset")).disabled = true;
        });
    }

    getOne(jsonArray, id: number): any{
        if(id === 0)
          return jsonArray[0];
        else{
          let row = null;
          jsonArray.forEach(element => {
            if(Number.parseInt(element.id) === id){
              row = element;
            }
          });
          return row;
        }
      }
    
      setType(key: string): string{
        switch(key){
          case "Nombre":
          case "Descripción":
          case "Apellido":
          case "Usuario":
          case "Contraseña": return "text";
          case "Precio":
          case "Calorías":
          case "Tiempo Preparación":
          case "DNI":
          case "Código de Seguridad": return "number";
          case "Email": return "email";
          case "Restricciones": 
          case "Artículos": 
          case "Secciones": return "list";
          case "Entrada":
          case "Salida": return "datetime";
          case "Hora Inicio":
          case "Hora Fin": return "time";
          case "Fecha Baja": 
          case "Fecha Creación": return "date";
          case "Puesto": 
          case "Rol": return "enum";
          default: return "text";
        }
      }
}
