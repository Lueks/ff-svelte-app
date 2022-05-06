import { writable } from "svelte/store";


export const expression = writable([]);

export let expressionLoading = false

export const exportToDB = expression.subscribe((value) => {;
    expressionLoading = true
    if (value[0] == null) {
        console.log("writable empty")
    } else{
    fetch('http://localhost:8081/receiveattributes', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({value})
    })
    .then((res) => res.json())
    .then((data) => {console.log(data.message)
                    expressionLoading = false
                    return expressionLoading
        });
    }
});





