import { AbstractControl } from "@angular/forms";

export class PasswordValidator {
    static MatchPasswords(controls: AbstractControl){
        let password: string = controls.get("password").value;
        let confPassword: string = controls.get("confPassword").value;
        if(password === confPassword)
            return null;
        return{
            matchPassword: true
        };
    }
}
