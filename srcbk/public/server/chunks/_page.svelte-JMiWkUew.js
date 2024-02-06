import { c as create_ssr_component, i as subscribe, v as validate_component, k as escape } from './exports-0cS4Qq6I.js';
import { N as Navigator, I as IconProfile } from './Navigator-n22bPTij.js';
import './client-uMEZShIE.js';
import { d as datilogin } from './servizi-SG-4ziVD.js';
import './stores-q3HlOxMl.js';
import './index-IhVOfo3V.js';
import 'axios';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $datilogin, $$unsubscribe_datilogin;
  $$unsubscribe_datilogin = subscribe(datilogin, (value) => $datilogin = value);
  $$unsubscribe_datilogin();
  return `<div class="flex flex-col space-y-4 md:mx-24 mx-2 mt-4">${validate_component(Navigator, "Navigator").$$render($$result, {}, {}, {})} <div class="text-6xl font-bold " data-svelte-h="svelte-b8eunv">Profilo</div></div> <div class="flex flex-col items-center justify-center space-y-8 mt-4"><div class="md:w-1/2 mx-2 md:mx-0 text-center p-4 bg-neutral-content rounded-xl" data-svelte-h="svelte-1rzqwuw">Benvenuto su Family-easy, un progetto costruito per l&#39;esame di programmazione WEB 2023-2024 dell&#39;università di Trieste svolto da Gianmarco Alessio.
        Per il front-end si è utilizzato Svelte, per il back-end Node.js e per il database MongoDB.
        Con Svelte si è fatto uso del framework TailwindCSS per la parte di stile e di DaisyUI per la parte di componenti.</div> <div data-svelte-h="svelte-1g7zl1h">User collegato</div> <div class="flex flex-row items-center justify-center space-x-2 "><div class="fill-current w-32">${validate_component(IconProfile, "IconProfile").$$render($$result, {}, {}, {})}</div> <div class="flex flex-col"><div class="text-2xl text-primary">${escape($datilogin.firstname)} ${escape($datilogin.lastname)}</div> <div class="">@${escape($datilogin.username)}</div></div></div> <div><button class="btn btn-primary" data-svelte-h="svelte-rw7o38">Logout</button></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-JMiWkUew.js.map
