import { writable } from "svelte/store";

export const attributeStore = writable([]);



const fetchAttributes = async () => {
    fetch('http://localhost:8081/getattributes')
        .then((res) => res.json())
        .then((data) => {attributeStore.set(data)});
};
fetchAttributes();
