<script>
    export let topleftlabel = '',
        toprightlabel = '',
        bottomleftlabel = '',
        bottomrightlabel = '',
        placeholder = '',
        inputclass ='',
        checked = false,
        disabled = false,
        type = 'text',
        value = '';

    function doinput(e) {
        value = e.target.value;
    }
</script>

<label class="form-control w-full">
    {#if topleftlabel || toprightlabel}
    <div class="label">
        <span class="label-text">{topleftlabel}</span>
        <span class="label-text-alt">{toprightlabel}</span>
    </div>
    {/if}

    <input on:blur={doinput} on:keypress={doinput} on:input={doinput} type={type} placeholder="{placeholder}" disabled="{disabled}" class="input input-bordered {inputclass}" checked="{checked}" {value}  />


    {#if bottomleftlabel || bottomrightlabel}
    <div class="label">
        <span class="label-text-alt">{bottomleftlabel}</span>
        <span class="label-text-alt">{bottomrightlabel}</span>
    </div>
    {/if}

</label>
