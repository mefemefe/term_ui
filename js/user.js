const myKey = 'termIp'

function getLocalIp() {
    return window.localStorage.getItem(myKey);
}

function setLocalIp(ip) {
    window.localStorage.setItem(myKey, ip);
}

async function getIpOnline() {
    try {
        let response = await fetch('https://api.ipify.org');
        let data = await response.text()
        return data;
    } catch (error) {
        console.error(error);
        return '127.0.0.1';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let user = document.getElementById('userIp');
    let local = getLocalIp()
    if (local) {
        user.innerText = local + ':';
    } else {
        getIpOnline().then(ip => {
            user.innerText = ip + ':';
            setLocalIp(ip);
        });
    }
});
