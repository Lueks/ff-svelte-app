import { writable, get } from "svelte/store";


export const expression = writable([]);

// export function saveExpression() {
//     let payload
//     expression.subscribe((value) => {
//         return payload = value
//     });
//     console.log(payload)
//     fetch('http://localhost:8081/receiveattributes', {
//                 method: 'POST',
//                 headers: {'Content-Type': 'application/json'},
//                 body: JSON.stringify(payload)
//             })
//             .then((res) => res.json())
//             .then((data) => {return (data.message)});
//}



// expression.subscribe((value) => {
//         fetch('http://localhost:8081/receiveattributes', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({value})})
//     .then((res) => res.json())
//     .then((data) => {console.log(data.message)})
// });

// export function loadExpressions() {
//     fetch('http://localhost:8081/sendattributes')
//     .then((res) => res.json())
//     .then((data) => expression.set(data))
// }



// function saveExpressions() {
//     let payload = get(expression)
//     console.log(payload)
//     fetch('http://localhost:8081/receiveattributes', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({payload})
//     })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
// }

