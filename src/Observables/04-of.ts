import {of} from "rxjs";

//const obs$ = of(1,2,3);
const obs$ = of<any>([1,2],{a:1, b:2}, function(){}, Promise.resolve(true));

console.log("Inicio del obs");
obs$.subscribe(
    next => console.log("next: ", next),
    null,
    () => console.log("Terminada la secuencia!")
);
console.log("Fin del obs");

