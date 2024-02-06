import { c as create_ssr_component, v as validate_component } from './exports-0cS4Qq6I.js';
import { I as Input } from './Input-Q-SsXYJE.js';
import './client-uMEZShIE.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user = { username: "", password: "" };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex flex-col justify-center items-center w-1/4 space-y-4 mt-24 m-auto"><div class="text-4xl font-bold text-primary" data-svelte-h="svelte-mafesa">FamilyEasy</div> ${validate_component(Input, "Input").$$render(
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
    )} <a href="/registration" class="btn btn-link" data-svelte-h="svelte-1n6elde">Registrati</a> <button class="btn btn-primary">${`Log in`}</button></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-SNG1eWz0.js.map
