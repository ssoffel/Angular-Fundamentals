import { FormControl } from '@angular/forms';


export function restrictedWords(words) {
    return (control: FormControl): { [key: string]: any} => {
        if (!words) return null;

        console.log('this is control value', control.value);
        var restricted = words.map(word => control.value.includes(word) ? word : null)
        .filter(word => word !== null);

        return restricted.length > 0 ? { 'restrictedWords': restricted.join(', ') } : null;
    }
}