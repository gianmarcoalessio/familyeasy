import { c as create_ssr_component, i as subscribe, j as each, p as add_classes, v as validate_component } from './exports-0cS4Qq6I.js';
import { p as page } from './stores-q3HlOxMl.js';
import './client-uMEZShIE.js';
import { d as derived } from './index-IhVOfo3V.js';

const IconPig = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M640-520q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-320-80h200v-80H320v80ZM180-120q-34-114-67-227.5T80-580q0-92 64-156t156-64h200q29-38 70.5-59t89.5-21q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22.5T702-751l91 91h87v279l-113 37-67 224H480v-80h-80v80H180Zm60-80h80v-80h240v80h80l62-206 98-33v-141h-40L620-720q0-20 2.5-38.5T630-796q-29 8-51 27.5T547-720H300q-58 0-99 41t-41 99q0 98 27 191.5T240-200Zm240-298Z"></path></svg>`;
});
const IconExpense = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"></path></svg>`;
});
const IconProfile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"></path></svg>`;
});
const Navigator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $path, $$unsubscribe_path;
  const path = derived(page, ($page) => $page.url.pathname);
  $$unsubscribe_path = subscribe(path, (value) => $path = value);
  $$unsubscribe_path();
  return `<div class="flex flex-row items-center justify-between px-2 md:px-0"><div class="text-4xl font-bold text-primary" data-svelte-h="svelte-1gdf3ej">Family-easy</div> <ul class="menu bg-base-200 hidden lg:menu-horizontal rounded-box">${each([["/profilo", IconProfile], ["/spese", IconExpense], ["/bilancio", IconPig]], ([link, Icon]) => {
    return `<li><button${add_classes(($path === link ? "active" : "").trim())}><div class="w-8 fill-current">${validate_component(Icon, "Icon").$$render($$result, {}, {}, {})}</div> ${link === "/profilo" ? `Profilo` : ``} ${link === "/spese" ? `Spese` : ``} ${link === "/bilancio" ? `Bilancio` : ``}</button> </li>`;
  })} </ul></div>`;
});

export { IconProfile as I, Navigator as N };
//# sourceMappingURL=Navigator-nh7f6ntx.js.map
