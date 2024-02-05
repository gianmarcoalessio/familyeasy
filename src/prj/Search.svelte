<script>
    import Input from '$daisi/Input.svelte';
    import { dammiUtenti } from '$lib/servizi.js';
    import { createEventDispatcher } from 'svelte';
    let utenti = [];
    export let topleftlabel = '';
    let cerca = '';
    const dispatch = createEventDispatcher();

    async function cercaUtenti(e) {
            if (cerca.trim() !== '') {
                utenti = await dammiUtenti(cerca);
            }
    }
    function selezionautente(u) {
        dispatch('add',u)
        cerca = ''
        utenti = []
    }
    

</script>
<div class="relative w-full">
<Input
    topleftlabel="{topleftlabel}"
    placeholder="Cerca per nome, cognome e username"
    inputclass=" input-primary"
    bind:value={cerca}
    on:change={cercaUtenti} />
{#if utenti.length > 0 && cerca !== ''}
<div class="flex flex-col space-y-1 absolute top-26 left-0 z-10 bg-neutral px-2 py-2 rounded-xl w-full ">
    {#each utenti as utente}
        <button on:click={()=> {selezionautente(utente)}} class="btn  flex flex-row space-x-2 items-center">
            <div class="flex-1">@{utente.username}</div>
            <div class="">{utente.firstname}</div>
            <div class="">{utente.lastname}</div>
        </button>
    {/each}
</div>
{/if} 
</div>


