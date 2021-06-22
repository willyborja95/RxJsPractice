import { Observable, Observer } from "rxjs";

const observer:Observer<any> = {
    next: value => console.log("Sigueinte:", value),
    error: error => console.log("error [obs]: ",error),
    complete: () => console.log("Completado")
}

const obs$ = new Observable(subs => {
    subs.next("Hola mundo");
    subs.next("Hola mundo");
    subs.next("Hola mundo");
    subs.next("Hola mundo");
    const a = undefined;
    a.nombre = "Wil"
    subs.complete();

})

// obs$.subscribe(
//     valor => console.log("Next: ", valor),
//     error => console.error("Error: ", error),
//     () => console.info("Completado")
// );

obs$.subscribe(observer);
