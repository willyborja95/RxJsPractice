import {asyncScheduler} from "rxjs";

const saludar = (nombre) => console.log(`Hola ${nombre} `)

const schedule = asyncScheduler.schedule(function(state){
    console.log("State:", state);
    this.schedule(state + 1, 1000);
}, 1000, 0);

asyncScheduler.schedule(function(){
    schedule.unsubscribe()
}, 10000)
