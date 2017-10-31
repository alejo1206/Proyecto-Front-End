import { AbstractControl } from "@angular/forms";

export class InputValidator{
    static ValidateGreater(controls: AbstractControl){
        let fechaEntrada = controls.get("Fecha Entrada");
        let fechaSalida = controls.get("Fecha Salida");
        let horaEntrada = controls.get("Hora Entrada");
        let horaSalida = controls.get("Hora Salida");
        if(fechaEntrada !== undefined && fechaSalida !== undefined && horaEntrada !== undefined && horaSalida !== undefined && fechaEntrada !== null && fechaSalida !== null && horaEntrada !== null && horaSalida !== null){
            let entrada: number = Date.parse(fechaEntrada.value);
            let salida: number = Date.parse(fechaSalida.value);
            if(salida < entrada){
                return{
                    fechaEntrada: true
                }
            }
            else{
                let entradaStr = horaEntrada.value;
                let salidaStr = horaSalida.value;
                entradaStr = entradaStr.split(":");
                salidaStr = salidaStr.split(":");
                let horaEnt = new Date();
                let horaSal = new Date();
                horaEnt.setHours(entradaStr[0],entradaStr[1],entradaStr[2]);
                horaSal.setHours(salidaStr[0],salidaStr[1],salidaStr[2]);
                if(horaSal.getTime() <= horaEnt.getTime()){
                    return{
                        horaEntrada: true
                    }
                }
                else{
                    return null;
                }
            }
        }
        else{
            return null;
        }
    }
}