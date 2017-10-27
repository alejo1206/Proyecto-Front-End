export class FormEntity {
  private id: string;
  private labels: string[] = [];
  private values: string[] = [];
  private types: string[] = [];

  constructor(data, accion, id){
    this.id = id;
    for (var key in data) {
      if(key !== "id"){
        this.labels.push(key);
        let tipo = this.setType(key);
        this.types.push(tipo);
        if((accion === "crear" || id === 0) && tipo !== "list"){
          this.values.push("");
        }
        else{
          this.values.push(data[key]);
        }
      }
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
