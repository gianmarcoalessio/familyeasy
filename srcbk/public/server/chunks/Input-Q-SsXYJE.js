import { c as create_ssr_component, o as createEventDispatcher, k as escape, l as add_attribute } from './exports-0cS4Qq6I.js';

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { topleftlabel = "", toprightlabel = "", bottomleftlabel = "", bottomrightlabel = "", placeholder = "", inputclass = "", checked = false, disabled = false, type = "text", value = "" } = $$props;
  createEventDispatcher();
  if ($$props.topleftlabel === void 0 && $$bindings.topleftlabel && topleftlabel !== void 0)
    $$bindings.topleftlabel(topleftlabel);
  if ($$props.toprightlabel === void 0 && $$bindings.toprightlabel && toprightlabel !== void 0)
    $$bindings.toprightlabel(toprightlabel);
  if ($$props.bottomleftlabel === void 0 && $$bindings.bottomleftlabel && bottomleftlabel !== void 0)
    $$bindings.bottomleftlabel(bottomleftlabel);
  if ($$props.bottomrightlabel === void 0 && $$bindings.bottomrightlabel && bottomrightlabel !== void 0)
    $$bindings.bottomrightlabel(bottomrightlabel);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.inputclass === void 0 && $$bindings.inputclass && inputclass !== void 0)
    $$bindings.inputclass(inputclass);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<label class="form-control w-full">${topleftlabel || toprightlabel ? `<div class="label"><span class="label-text">${escape(topleftlabel)}</span> <span class="label-text-alt">${escape(toprightlabel)}</span></div>` : ``} ${type == "date" ? `<input type="date" ${disabled ? "disabled" : ""} class="${"input input-bordered " + escape(inputclass, true)}"${add_attribute("value", formatDate(value), 0)}>` : `<input${add_attribute("type", type, 0)}${add_attribute("placeholder", placeholder, 0)} ${disabled ? "disabled" : ""} class="${"input input-bordered " + escape(inputclass, true)}" ${checked ? "checked" : ""}${add_attribute("value", value, 0)}>`} ${bottomleftlabel || bottomrightlabel ? `<div class="label"><span class="label-text-alt">${escape(bottomleftlabel)}</span> <span class="label-text-alt">${escape(bottomrightlabel)}</span></div>` : ``}</label>`;
});

export { Input as I, formatDate as f };
//# sourceMappingURL=Input-Q-SsXYJE.js.map
