<script>
    import { createEventDispatcher } from 'svelte';
    import {formatDate} from '$lib/utils.js';
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
    function doinputDate(e) {
            value = new Date(e.target.value);
            dispatch('change', value);
    }
</script>

<label class="form-control w-full">
    {#if topleftlabel || toprightlabel}
        <div class="label">
            <span class="label-text">{topleftlabel}</span>
            <span class="label-text-alt">{toprightlabel}</span>
        </div>
    {/if}

    {#if type == 'date'}
        <input
            on:blur={doinputDate}
            on:keypress={doinputDate}
            on:input={doinputDate}
            type="date"
            {disabled}
            class="input input-bordered {inputclass}"
            value={formatDate(value)} />
    {:else}
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
    {/if}

    {#if bottomleftlabel || bottomrightlabel}
        <div class="label">
            <span class="label-text-alt">{bottomleftlabel}</span>
            <span class="label-text-alt">{bottomrightlabel}</span>
        </div>
    {/if}
</label>
