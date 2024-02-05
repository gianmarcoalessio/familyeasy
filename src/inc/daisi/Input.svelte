<script>
    import { createEventDispatcher } from 'svelte';
    export let topleftlabel = '',
        toprightlabel = '',
        bottomleftlabel = '',
        bottomrightlabel = '',
        placeholder = '',
        inputclass = '',
        checked = false,
        disabled = false,
        type = 'text',
        value = '';

    const dispatch = createEventDispatcher();

    function doinput(e) {
        if (value !== e.target.value) {
            value = e.target.value;
            dispatch('change', value);
        }
    }
</script>

<label class="form-control w-full">
    {#if topleftlabel || toprightlabel}
        <div class="label">
            <span class="label-text">{topleftlabel}</span>
            <span class="label-text-alt">{toprightlabel}</span>
        </div>
    {/if}

    <input
        on:blur={doinput}
        on:keypress={doinput}
        on:input={doinput}
        {type}
        {placeholder}
        {disabled}
        class="input input-bordered {inputclass}"
        {checked}
        {value} />

    {#if bottomleftlabel || bottomrightlabel}
        <div class="label">
            <span class="label-text-alt">{bottomleftlabel}</span>
            <span class="label-text-alt">{bottomrightlabel}</span>
        </div>
    {/if}
</label>
