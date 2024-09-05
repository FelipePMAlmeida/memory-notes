import { AbstractControl } from "@angular/forms";

// Test class to create custom validator
export function minusculoValidator(control: AbstractControl) {
    const autoria = control.value as string;
    if(autoria !== autoria?.toLowerCase()) {
        return { minusculo: true };
    } else
    return null;
}
