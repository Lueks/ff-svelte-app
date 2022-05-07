import { writable } from "svelte/store";


export const expression = writable([]);
export const tabus = writable([]);
export const restriktionen = writable([]);
export const gunstfaktoren = writable([]);


expression.subscribe((value) => {
    if (value[0] == null) {
        console.log("writable empty, not executing a save")
    } else{
        fetch('http://localhost:8081/receiveattributes', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({value})
    })
    .then((res) => res.json())
    .then((data) => {console.log(data.message)});
    }
    console.log(value)
});

expression.subscribe((value) => {
    if (value[0] == null) {
        return;
    } else {
        let i = value.length - 1;
        if (value[i].category == "Gunstfaktor") {
            gunstfaktoren.update((value) => [...value,value[i]])
        }
        if (value[i].category == "Restriktion") {
            restriktionen.update((value) => [...value,value[i]])
        }
        if (value[i].category == "Tabu") {
            tabus.update((value) => [...value,value[i]])
        }
    }
})




