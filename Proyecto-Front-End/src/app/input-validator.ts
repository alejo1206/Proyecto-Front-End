import { AbstractControl } from "@angular/forms";

export class InputValidator{
    static ValidateGreater(controls: AbstractControl){
        let fechaEntrada = controls.get("Fecha Entrada");
        let fechaSalida = controls.get("Fecha Salida");
        let horaEntrada = controls.get("Hora Entrada");
        let horaSalida = controls.get("Hora Salida");
        if(fechaEntrada !== undefined && fechaSalida !== undefined && fechaEntrada.value !== null && fechaSalida.value !== null){
            let entrada: number = Date.parse(fechaEntrada.value);
            let salida: number = Date.parse(fechaSalida.value);
            if(salida < entrada){
                return{
                    fechaEntrada: true
                }
            }
            else if(horaEntrada !== undefined && horaSalida !== undefined && horaEntrada.value !== null && horaSalida.value !== null){
                let entradaStr = horaEntrada.value;
                let salidaStr = horaSalida.value;
                entradaStr = entradaStr.split(":");
                salidaStr = salidaStr.split(":");
                let horaEnt = new Date();
                let horaSal = new Date();
                horaEnt.setHours(entradaStr[0],entradaStr[1]);
                horaSal.setHours(salidaStr[0],salidaStr[1]);
                if(horaSal.getTime() <= horaEnt.getTime() && entrada === salida){
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