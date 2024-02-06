import { c as create_ssr_component, i as subscribe, k as escape } from './exports-0cS4Qq6I.js';
import { p as page } from './stores-q3HlOxMl.js';
import './client-uMEZShIE.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-KjF0psK4.js.map
