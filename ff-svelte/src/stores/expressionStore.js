import { writable } from "svelte/store";


export const expression = writable([]);

export function saveExpression() {
    let payload
    expression.subscribe((value) => {
        return payload = value[value.length - 1]
    });
    console.log(payload);
}



// expression.subscribe((value) => {
//     if (value[0] == null) {
//         console.log("writable empty, not executing a save")
//     } else{
//         fetch('http://localhost:8081/receiveattributes', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({value})
//     })
//     .then((res) => res.json())
//     .then((data) => {console.log(data.message)});
//     }
//     // console.log(value)
// });







