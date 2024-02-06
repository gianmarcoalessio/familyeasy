import axios from 'axios';
import { w as writable } from './index-IhVOfo3V.js';

const datilogin = writable({});
const messaggi = writable([]);
let baseurl = "";
function addError(messaggio) {
  messaggi.update((messages) => [...messages, { messaggio, ruolo: "error" }]);
}
function getconfig() {
  return {};
}
async function dammiSpese(filtri) {
  try {
    let url = `${baseurl}/api/budget/`;
    if (filtri.year) {
      url += `${filtri.year}`;
      if (filtri.month) {
        url += `${filtri.month}`;
      }
    } else if (filtri.q) {
      url += `search?q=${encodeURIComponent(filtri.q)}`;
    }
    const response = await axios.get(url, getconfig());
    return response.data;
  } catch (error) {
    addError(error.response.data ? error.response.data : error.message);
  }
}
async function dammiQuote(utente) {
  try {
    let url = `${baseurl}/api/balance`;
    if (utente && utente._id) {
      url += `/${utente._id}`;
    }
    const response = await axios.get(url, getconfig());
    return response.data;
  } catch (error) {
    addError(error.response.data ? error.response.data : error.message);
  }
}

export { dammiQuote as a, dammiSpese as b, datilogin as d, messaggi as m };
//# sourceMappingURL=servizi-SG-4ziVD.js.map
