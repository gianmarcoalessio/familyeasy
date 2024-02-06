import { c as create_ssr_component, v as validate_component } from './exports-0cS4Qq6I.js';
import { I as Input } from './Input-Q-SsXYJE.js';
import './client-uMEZShIE.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let confermapassword = "";
  let user = {
    username: "",
    password: "",
    firstname: "",
    lastname: ""
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex flex-col justify-center items-center w-1/4 space-y-4 mt-24 m-auto"><div class="text-4xl font-bold text-primary" data-svelte-h="svelte-180t9oo">Registrazione</div> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        placeholder: "Username",
        value: user.username
      },
      {
        value: ($$value) => {
          user.username = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        placeholder: "Nome",
        value: user.firstname
      },
      {
        value: ($$value) => {
          user.firstname = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        placeholder: "Cognome",
        value: user.lastname
      },
      {
        value: ($$value) => {
          user.lastname = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "password",
        placeholder: "Password",
        value: user.password
      },
      {
        value: ($$value) => {
          user.password = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "password",
        placeholder: "Conferma Password",
        value: confermapassword
      },
      {
        value: ($$value) => {
          confermapassword = $$value;
          $$settled = false;
        }
      },
      {}
    )} <button class="btn btn-primary" data-svelte-h="svelte-8imyrg">Conferma</button></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CLdjQ-5d.js.map
