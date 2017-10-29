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

  getLabels(): string[]{
    return this.labels;
  }

  setLabels(labels: string[]): void{
    this.labels = labels;
  }

  getValues(): string[]{
    return this.values;
  }

  setValues(values: string[]): void{
    this.values = values;
  }

  getTypes(): string[]{
    return this.types;
  }

  setTypes(types: string[]): void{
    this.types = types;
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
      case "Hora Entrada":
      case "Hora Salida":
      case "Hora Inicio":
      case "Hora Fin": return "time";
      case "Fecha Entrada":
      case "Fecha Salida":
      case "Fecha Baja": 
      case "Fecha Creación": return "date";
      case "Puesto": 
      case "Rol": return "enum";
      default: return "text";
    }
  }
}
