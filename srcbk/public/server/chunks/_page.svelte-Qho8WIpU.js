import { c as create_ssr_component, i as subscribe, v as validate_component, k as escape, j as each, l as add_attribute } from './exports-0cS4Qq6I.js';
import { N as Navigator } from './Navigator-n22bPTij.js';
import { f as formatDate } from './Input-Q-SsXYJE.js';
import { d as datilogin, a as dammiQuote } from './servizi-SG-4ziVD.js';
import { S as Search } from './Search-ucFWDftP.js';
import './stores-q3HlOxMl.js';
import './client-uMEZShIE.js';
import './index-IhVOfo3V.js';
import 'axios';

function formatCurrency(value) {
  if (!value)
    value = 0;
  return Number(value).toLocaleString("it-IT", { style: "currency", currency: "EUR" });
}
const TableBilancio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $datilogin, $$unsubscribe_datilogin;
  $$unsubscribe_datilogin = subscribe(datilogin, (value) => $datilogin = value);
  let expenses = [];
  let results = {};
  let bilancio = { dare: 0, avere: 0 };
  let utente = null;
  async function reload() {
    results = await dammiQuote(utente);
    expenses = results.spese;
    bilancio = results.bilancio;
    console.log(expenses);
  }
  if ($$props.reload === void 0 && $$bindings.reload && reload !== void 0)
    $$bindings.reload(reload);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${``} <div class="flex md:flex-row flex-col space-y-8 md:space-x-24 justify-center items-center my-8 "><div class="flex flex-col items-center space-y-4 justify-center"><div class="text-5xl" data-svelte-h="svelte-gs36ac">Dare</div> <div class="text-5xl text-error font-bold">${escape(formatCurrency(bilancio.dare))}</div></div> <div class="flex flex-col items-center space-y-4 justify-center"><div class="text-5xl " data-svelte-h="svelte-1fegl1">Avere</div> <div class="text-5xl text-success font-bold">${escape(formatCurrency(bilancio.avere))}</div></div></div> <div class="flex felx-row space-x-2 items-end my-4"><div class="flex-1">${validate_component(Search, "Search").$$render(
      $$result,
      {
        topleftlabel: "Cerca per nome, cognome e username"
      },
      {},
      {}
    )}</div> ${``}</div> <table class="table table-zebra w-full"><thead data-svelte-h="svelte-13rrd77"><tr><th class="hidden md:table-cell">Data</th>  <th>Categoria</th> <th class="hidden md:table-cell">Descrizione</th>  <th>Utente</th> <th>Dare</th> <th>Avere</th></tr></thead> <tbody>${each(expenses, (expense) => {
      return `${each(expense.quote, (quota, i) => {
        return `<tr class="hover:bg-neutral-content cursor-pointer"><td class="hidden md:table-cell">${i == 0 ? `${escape(formatDate(expense.date))}` : ``}</td>  <td>${i == 0 ? `${escape(expense.category.name)}` : ``}</td> <td class="hidden md:table-cell">${i == 0 ? `${escape(expense.description)}` : ``}</td>  <td${add_attribute(
          "class",
          quota.user.username == $datilogin.username ? "font-bold text-md text-primary" : "",
          0
        )}>@${escape(quota.user.username)}</td> <td class="text-error font-bold">${escape(quota.rimborso == false ? formatCurrency(quota.cost) : "")}</td> <td class="text-success font-bold">${escape(quota.rimborso == true ? formatCurrency(quota.cost) : "")}</td> </tr>`;
      })}`;
    })}</tbody></table> `;
  } while (!$$settled);
  $$unsubscribe_datilogin();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $datilogin, $$unsubscribe_datilogin;
  $$unsubscribe_datilogin = subscribe(datilogin, (value) => $datilogin = value);
  $$unsubscribe_datilogin();
  return `<div class="flex flex-col space-y-4 md:mx-24 mx-2 mt-4">${validate_component(Navigator, "Navigator").$$render($$result, {}, {}, {})} <div class="text-6xl font-bold ">Bilancio di @${escape($datilogin.username)}</div></div> <div class="grid md:gap-0 grid-cols-1 items-center md:mx-24 mx-4 my-4">${validate_component(TableBilancio, "TableBilancio").$$render($$result, {}, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Qho8WIpU.js.map
