import { Observable, Observer } from "rxjs";

const observer:Observer<any> = {
    next: value => console.log("Sigueinte:", value),
    error: error => console.log("error [obs]: ",error),
    complete: () => console.log("Completado")
}
let x = 0;
const intervalo$ = new Observable<number>(subscriber => {
    const intervalo = setInterval(()=>{
        x++;
        subscriber.next(x);
    }, 1000)

    return () => {
        clearInterval(intervalo);
        console.log("Intervalo Destruido!");
    }

})

const subs = intervalo$.subscribe(num => console.log("Num: ", num))
const subs1 = intervalo$.subscribe(num => console.log("Num: ", num))
const subs2 = intervalo$.subscribe(num => console.log("Num: ", num))

setTimeout(()=>{
    subs.unsubscribe()
    subs1.unsubscribe()
    subs2.unsubscribe()
}, 3000)
