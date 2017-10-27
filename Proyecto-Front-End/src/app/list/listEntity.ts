export class ListEntity {
    private ids: string[] = [];
    private headerValues: string[] = [];
    private headerTypes: string[] = [];
    private rows: string[][] = [];

    constructor(data){
        for (var key in data[0]) {
            if(key !== "Habilitado" && key !== "id"){
                this.headerValues.push(key);
                switch(key){
                case "Precio": this.headerTypes.push("currency"); break;
                case "Restricciones":
                case "Secciones":
                case "Artículos": this.headerTypes.push("list"); break;
                default: this.headerTypes.push("text"); break;
                }
            }
        }
        for(var i = 0; i <= data.length - 1; i++){
            let row: string[] = [];
            for (var key in data[i]) {
                if(key !== "Habilitado" && key !== "id"){
                    data[i][key] === "" ? row.push("-") : row.push(data[i][key]);
                }
                else if(key === "id"){
                    this.ids.push(data[i][key]);
                }
            }
            this.rows.push(row);
        }
    }

}
