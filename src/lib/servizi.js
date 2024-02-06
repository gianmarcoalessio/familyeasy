import axios from 'axios';
import { dev } from '$app/environment'; // environment è una libreria di sveltekit che mi dice se sono in ambiente di sviluppo o di produzione
import { writable } from 'svelte/store';

export const datilogin = writable({}); // user è un oggetto che contiene i dati dell'utente loggato, guardare svelte store
export const messaggi = writable([]); // messaggi è un array che contiene i messaggi da visualizzare, guardare svelte store

let baseurl = dev ? "http://localhost:3000" : "" // mi indica che sono in un ambiente di sviluppo 
//let baseurl = ""  // mi indica che sono in un ambiente di sviluppo
let bearer = null; // bearer è una variabi3le che mi serve per memorizzare il token di autenticazione


// ----------------- gestione dei messaggi ----------------- //

export function addWarning(messaggio) {
    messaggi.update(messages => [...messages, { messaggio, ruolo: 'warning' }]);
}

export function addError(messaggio) {
    messaggi.update(messages => [...messages, { messaggio, ruolo: 'error' }]);
}

export function addSuccess(messaggio) {
    messaggi.update(messages => [...messages, { messaggio, ruolo: 'success' }]);
}

export function clearMessages() {
    messaggi.set([]);
}


// ----------------- gestione del token di autenticazione ----------------- //

function getconfig() { // funzione per gestire il bearer da parte di axios 
    if (bearer) {
        return {
            headers: {
                Authorization: `Bearer ${bearer}`
            }
        }
    }
    return {};
}

// ----------------- servizi per la gestione dell'autenticazione ----------------- //

export async function creaUtente(user) {
    const response = await axios.post(`${baseurl}/api/auth/signup`, user);
    return response.data;
}

export async function login(user) {
    const response = await axios.post(`${baseurl}/api/auth/signin`, user);
    let data = response.data;
    bearer = data.token; // memorizzo il token di autenticazione
    datilogin.set(response.data); // memorizzo i dati dell'utente loggato
    localStorage.setItem('token', JSON.stringify(response.data, null, 2))
    return data;
}

export async function logout() {
    bearer = null; // resetto il token di autenticazione
    localStorage.removeItem('token') // togliamo anche il token
    datilogin.set({}); // resetto i dati dell'utente loggato 
}

export function setbearer(token) {
    bearer = token;
}


// ----------------- servizi per la gestione dei dati ----------------- //

export async function dammiUtenti(q) {
    const response = await axios.get(`${baseurl}/api/users/search?q=${q || ''}`, getconfig()); // q || '' is a default value if q is undefined
    return response.data; // Assuming the user data is directly in the response data
}

export async function dammiUser() {
    const response = await axios.get(`${baseurl}/api/budget/whoami`, getconfig());
    return response.data;
}

export async function dammiCategorie() {
    const response = await axios.get(`${baseurl}/api/categories`, getconfig());
    return response.data;
}

export async function dammiSpese(filtri) {
    try {
        let url = `${baseurl}/api/budget/`;
        if(filtri.year) {
            url += `${filtri.year}`;
            if(filtri.month) {
                url += `${filtri.month}`;
            }
        }else if(filtri.q){
            url += `search?q=${encodeURIComponent(filtri.q)}`;
        }

        const response = await axios.get(url, getconfig());
        return response.data;
        
    } catch (error) {
        addError(error.response.data?error.response.data : error.message);
    }

}

export async function dammiQuote(utente) {
    try {
        let url = `${baseurl}/api/balance`;
        if (utente && utente._id) {
            url += `/${utente._id}`;
        }

        const response = await axios.get(url, getconfig());
        return response.data;
        
    } catch (error) {
        addError(error.response.data?error.response.data : error.message);
    }

}

export async function daiSpesa(year, month,expense) {
    try {
        // Costruisci l'URL inserendo direttamente i valori di year e month
        const url = `${baseurl}/api/budget/${year}/${month}`;
        const response = await axios.post(url,expense, getconfig());
        return response.data;

    } catch (error) {
        addError(error.response.data?error.response.data : error.message);
    }
}

export async function deleteSpesa(expense) {
    try {
        const url = `${baseurl}/api/budget/0/0/${expense._id}`;
        console.log(url);
        const response = await axios.delete(url, getconfig());
        return response.data;
        
    } catch (error) {
        addError(error.response.data?error.response.data : error.message);
        
    }

}

export async function updateSpesa(expense) {
    try {
        const url = `${baseurl}/api/budget/0/0/${expense._id}`;
        const response = await axios.put(url,expense, getconfig());
        return response.data;
    } catch (error) {
        addError(error.response.data?error.response.data : error.message);
    }
}



