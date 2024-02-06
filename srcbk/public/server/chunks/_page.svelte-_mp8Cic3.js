import { c as create_ssr_component, v as validate_component, k as escape, o as createEventDispatcher, l as add_attribute, j as each } from './exports-0cS4Qq6I.js';
import { N as Navigator } from './Navigator-n22bPTij.js';
import { I as Input } from './Input-Q-SsXYJE.js';
import { S as Search } from './Search-ucFWDftP.js';
import './stores-q3HlOxMl.js';
import './client-uMEZShIE.js';
import './index-IhVOfo3V.js';

const Categoria = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let categorie = [];
  let { categoria = {} } = $$props;
  if ($$props.categoria === void 0 && $$bindings.categoria && categoria !== void 0)
    $$bindings.categoria(categoria);
  return `<select class="select select-bordered"${add_attribute("value", categoria._id, 0)}><option disabled value="" data-svelte-h="svelte-1si2e75">Seleziona categoria</option>${each(categorie, (option) => {
    return `<option ${option._id == categoria._id ? "selected" : ""}${add_attribute("value", option._id, 0)}>${escape(option.name)}</option>`;
  })}</select>`;
});
function formatCurrency(value) {
  return Number(value).toLocaleString("it-IT", { style: "currency", currency: "EUR" });
}
const Aggiungispesa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let categoria;
  let totaleCosti;
  let isrimborso;
  let { open = false } = $$props;
  createEventDispatcher();
  let expense = { quote: [], category: {} };
  function getisrimborso() {
    return categoria.name === "Rimborso" ? true : false;
  }
  function gettotaleCosti() {
    let quote = expense.quote;
    if (isrimborso && quote.length > 1) {
      let totale = 0;
      for (let i = 1; i < quote.length; i++) {
        totale += quote[i].cost;
        quote[i].rimborso = true;
      }
      quote[0].cost = totale;
      quote[0].rimborso = false;
      return 0;
    } else {
      return expense.quote.reduce(
        (total, quota) => {
          quota.rimborso = false;
          return total + quota.cost;
        },
        0
      );
    }
  }
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    categoria = expense.category;
    totaleCosti = gettotaleCosti();
    isrimborso = getisrimborso();
    $$rendered = `<dialog class="modal" ${open ? "open" : ""}><div class="${"modal-box flex flex-col space-y-3 " + escape(isrimborso ? "bg-neutral-content" : "", true)}"><div class="text-4xl text-primary ">Aggiungi ${escape(isrimborso ? "Rimborso" : "Spesa")}</div> <div>Completare i campi per aggiungere ${escape(isrimborso ? "un rimborso" : "una spesa")}</div> <textarea class="textarea textarea-bordered textarea-md w-full" placeholder="Descrizione della spesa">${escape(expense.description || "")}</textarea> <div class="grid grid-cols-2 items-center justify-center gap-2 w-full">${validate_component(Categoria, "Categoria").$$render(
      $$result,
      { categoria: expense.category },
      {
        categoria: ($$value) => {
          expense.category = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        placeholder: "",
        type: "date",
        value: expense.date
      },
      {
        value: ($$value) => {
          expense.date = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${validate_component(Search, "Search").$$render(
      $$result,
      {
        topleftlabel: isrimborso ? "Aggiungere gli utenti da rimborsare" : "Cerca un utente a cui associare una quota"
      },
      {},
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        topleftlabel: "Totale spesa (somma delle quote)",
        disabled: true,
        value: formatCurrency(totaleCosti)
      },
      {},
      {}
    )} <table class="table p-2 shadow bg-base-100 w-full text-center"><thead data-svelte-h="svelte-1ashv4j"><tr><th>Username</th> <th>Quota</th> <th>Spesa/Rimborso</th> <th></th></tr></thead> <tbody>${each(expense.quote, (quota, i) => {
      return `<tr><td class="flex-1">@${escape(quota.user.username)}</td> <td><input type="number" class="${"w-40 text-lg p-2 text-center rounded-lg " + escape(quota.rimborso ? "text-success" : "text-error", true)}"${add_attribute("placeholder", formatCurrency(quota.cost), 0)} ${i == 0 && categoria.name === "Rimborso" ? "disabled" : ""}${add_attribute("value", quota.cost, 0)}></td> <td><input type="checkbox" disabled class="toggle"${add_attribute("checked", quota.rimborso, 1)}></td> <td>${i > 0 ? `<button class="btn" data-svelte-h="svelte-3scbwu">x</button>` : ``}</td> </tr>`;
    })} </tbody><tbody data-svelte-h="svelte-1pa1zxo"></tbody></table> <button class="btn btn-primary w-full" data-svelte-h="svelte-v4vzth">Aggiungi</button> <div class="modal-action"><button class="btn" data-svelte-h="svelte-9u1up7">Close</button></div></div></dialog>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let categoria = {};
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex flex-col space-y-4 mx-24 mt-4">${validate_component(Navigator, "Navigator").$$render($$result, {}, {}, {})} <div class="text-6xl font-bold " data-svelte-h="svelte-1k2z2ea">test</div></div> <div class="flex flex-col justify-center items-center w-1/2 space-y-4 mt-24 m-auto"><button data-svelte-h="svelte-n4xfdz">Prova</button> <pre>${escape(JSON.stringify(categoria, null, 2))}</pre> ${validate_component(Categoria, "Categoria").$$render(
      $$result,
      { categoria },
      {
        categoria: ($$value) => {
          categoria = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Aggiungispesa, "Aggiungispesa").$$render($$result, {}, {}, {})}</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-_mp8Cic3.js.map
