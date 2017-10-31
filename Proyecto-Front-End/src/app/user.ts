export class User{
    nombre: string;
    apellido: string;
    rol: string;
    
    constructor(nombre, apellido, rol){
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
    }
}