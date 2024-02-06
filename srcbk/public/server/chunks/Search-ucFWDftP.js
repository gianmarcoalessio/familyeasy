import { c as create_ssr_component, o as createEventDispatcher, v as validate_component, j as each, k as escape } from './exports-0cS4Qq6I.js';
import { I as Input } from './Input-Q-SsXYJE.js';

const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let utenti = [];
  let { topleftlabel = "" } = $$props;
  let cerca = "";
  createEventDispatcher();
  if ($$props.topleftlabel === void 0 && $$bindings.topleftlabel && topleftlabel !== void 0)
    $$bindings.topleftlabel(topleftlabel);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="relative w-full">${validate_component(Input, "Input").$$render(
      $$result,
      {
        topleftlabel,
        placeholder: "Cerca per nome, cognome e username",
        inputclass: " input-primary",
        value: cerca
      },
      {
        value: ($$value) => {
          cerca = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${utenti.length > 0 && cerca !== "" ? `<div class="flex flex-col space-y-1 absolute top-26 left-0 z-10 bg-primary px-2 py-2 rounded-xl w-full ">${each(utenti, (utente) => {
      return `<button class="btn flex flex-row space-x-2 items-center"><div class="flex-1">@${escape(utente.username)}</div> <div class="">${escape(utente.firstname)}</div> <div class="">${escape(utente.lastname)}</div> </button>`;
    })}</div>` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Search as S };
//# sourceMappingURL=Search-ucFWDftP.js.map
