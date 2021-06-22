import {Observable, Observer, Subject} from "rxjs";

const observer:Observer<any> = {
    next: value => console.log("Sigueinte:", value),
    error: error => console.log("error [obs]: ",error),
    complete: () => console.log("Completado")
}

const intervalo = new Observable(subs => {
    const intervalID = setInterval(() => subs.next(Math.random()), 1000);
    return () => {
        clearInterval(intervalID);
    };
});
// const subs1 = intervalo.subscribe(rnd => console.log("Subs1: ", rnd));
// const subs2 = intervalo.subscribe(rnd => console.log("Subs2: ", rnd));

const subject$ = new Subject();
const subscription = intervalo.subscribe(subject$);

const subs1 = subject$.subscribe(rnd => console.log("Subs1: ", rnd));
const subs2 = subject$.subscribe(rnd => console.log("Subs2: ", rnd));

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);
