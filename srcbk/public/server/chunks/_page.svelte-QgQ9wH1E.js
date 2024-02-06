import { c as create_ssr_component, v as validate_component, j as each, o as createEventDispatcher, k as escape, l as add_attribute } from './exports-0cS4Qq6I.js';
import { b as dammiSpese } from './servizi-SG-4ziVD.js';
import { I as Input, f as formatDate } from './Input-Q-SsXYJE.js';
import { N as Navigator } from './Navigator-nh7f6ntx.js';
import 'axios';
import './index-IhVOfo3V.js';
import './stores-q3HlOxMl.js';
import './client-uMEZShIE.js';

const Filtraggio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let filtri = { year: null, month: null };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Input, "Input").$$render(
      $$result,
      {
        placeholder: "Cerca la spesa",
        inputclass: "my-4 mx-2",
        value: filtri.q
      },
      {
        value: ($$value) => {
          filtri.q = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="mb-4"><button class="btn" data-svelte-h="svelte-1ytx9so">Tutte</button>    <div class="dropdown"><div tabindex="0" role="button" class="btn w-40">${escape("Seleziona un anno")}</div>  ${``}</div>  ${``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
function formatParticipants(participants) {
  if (participants.length === 1) {
    return `${participants[0].user.firstname} ${participants[0].user.lastname}`;
  } else if (participants.length === 0) {
    return `Nessuno`;
  } else {
    return "Partecipanti";
  }
}
function formatCurrency(value) {
  return Number(value).toLocaleString("it-IT", { style: "currency", currency: "EUR" });
}
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let expenses = [];
  let filtri = {};
  async function reload() {
    console.log("reload", filtri);
    expenses = await dammiSpese(filtri);
  }
  if ($$props.reload === void 0 && $$bindings.reload && reload !== void 0)
    $$bindings.reload(reload);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${``} ${``} <button class="btn btn-primary" data-svelte-h="svelte-11ed6hy">Aggiungi Spesa</button> ${validate_component(Filtraggio, "Filtraggio").$$render($$result, {}, {}, {})} <table class="table table-zebra w-full"> <thead data-svelte-h="svelte-tqqxf3"><tr><th>Data</th> <th>Totale</th> <th>Partecipanti</th> <th>Descrizione</th> <th>Categoria</th></tr></thead> <tbody>${each(expenses, (expense) => {
      return `<tr class="hover:bg-neutral-content cursor-pointer"><td>${escape(formatDate(expense.date))}</td> <td>${escape(formatCurrency(expense.totalcost))}</td> <td>${expense.quote.length > 1 ? `<div class="dropdown">  <div tabindex="0" role="button" class="btn btn-primary m-1">${escape(formatParticipants(expense.quote))}</div>   <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">${each(expense.quote, (participant) => {
        return `<li><div class="flex flex-row space-x-2 items-center"><div class="flex-1">@${escape(participant.user.username)}</div> <div class="${"w-12 " + escape(participant.rimborso ? "text-success" : "text-error", true)}">${escape(formatCurrency(participant.cost))}</div> <input type="checkbox" disabled class="toggle"${add_attribute("checked", participant.rimborso, 1)}> </div></li>`;
      })}</ul> </div>` : `${escape(formatParticipants(expense.quote))}`}</td> <td>${escape(expense.description)}</td> <td><div class="badge badge-secondary">${escape(expense.category.name)}</div></td> </tr>`;
    })}</tbody></table> `;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col space-y-4 md:mx-24 mx-2 mt-4">${validate_component(Navigator, "Navigator").$$render($$result, {}, {}, {})} <div class="text-6xl font-bold" data-svelte-h="svelte-1kqp0vg">Spese</div></div> <div class="grid md:gap-0 grid-cols-1 items-center md:mx-24 mx-4 my-4">${validate_component(Table, "Table").$$render($$result, {}, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-QgQ9wH1E.js.map
