import {of, from} from "rxjs";

const observer = {
    next: val => console.log("Next:", val),
    complete: ()=>console.log("Completado!")
}

//const source$ = from("Fernando");
const source$ = from(fetch("https://api.github.com/user/willyborja95"));
source$.subscribe(observer);

