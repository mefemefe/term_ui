import { dateId } from "./elemIds.js";

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById(dateId).innerText = Date().slice(0, 21);
    setInterval(() => {
        document.getElementById(dateId).innerText = Date().slice(0, 21);
    }, 60000);
})
