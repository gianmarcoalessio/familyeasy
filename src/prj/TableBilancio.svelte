<script>
    import { onMount, createEventDispatcher } from 'svelte';
    import Spesa from '$prj/Spesa.svelte';
    import { formatDate } from '$lib/utils.js';
    import Filtraggio from '$prj/Filtraggio.svelte';
    import { dammiQuote, datilogin, dammiSpese } from '$lib/servizi.js';
    import Search from './Search.svelte';

    let expenses = [];
    let ismodal = false;
    let selriga = {};
    let results = {};
    let bilancio = { dare: 0, avere: 0 };
    let utente = null;

    onMount(async () => {
        await reload();
    });

    function formatParticipants(participants) {
        if (participants.length === 1) {
            return `${participants[0].user.firstname} ${participants[0].user.lastname}`;
        } else if (participants.length === 0) {
            return `Nessuno`;
        } else {
            return 'Partecipanti'; // Potremmo utilizzare un dropdown per mostrare i nomi
        }
    }
    // Funzione aggiuntiva per formattare numeri in euro
    function formatCurrency(value) {
        if (!value) value=0;
        return Number(value).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
    }
    export async function reload() {
        results = await dammiQuote(utente);
        expenses = results.spese;
        bilancio = results.bilancio;
        console.log(expenses);
    }
</script>

{#if ismodal}
    <Spesa nosave open bind:expense={selriga} on:close={()=>{ismodal=false}} on:reload={()=>{ismodal=false, reload()}} />
{/if} 

<div class="flex md:flex-row flex-col space-y-8 md:space-x-24 justify-center items-center my-8 ">
    <div class="flex flex-col items-center space-y-4 justify-center">
        <div class="text-5xl">Dare</div>
        <div class="text-5xl text-error font-bold">{formatCurrency(bilancio.dare)}</div>
    </div>
    <div class="flex flex-col items-center space-y-4 justify-center">
        <div class="text-5xl ">Avere</div>
        <div class="text-5xl text-success font-bold">{formatCurrency(bilancio.avere)}</div>
    </div>

</div>

<div class="flex felx-row space-x-2 items-end my-4">
    <div class="flex-1">
<Search topleftlabel="Cerca per nome, cognome e username" on:add={async e=>{utente = e.detail; await reload()}} />
</div>

{#if utente && utente._id}
<button class="btn btn-primary" on:click={async ()=>{utente=null;await reload()}}>Reset ricerca @{utente.username}</button>
{/if}
</div>

<table class="table table-zebra w-full">
    <thead>
        <tr>
            <th class="hidden md:table-cell">Data</th> <!-- Nascondi su schermi piccoli -->
            <th>Categoria</th>
            <th class="hidden md:table-cell">Descrizione</th> <!-- Nascondi su schermi piccoli -->
            <th>Utente</th>
            <th>Dare</th>
            <th>Avere</th>
        </tr>
    </thead>
    <tbody>
        {#each expenses as expense}
            {#each expense.quote as quota, i}
                <tr class="hover:bg-neutral-content cursor-pointer" on:click={() => {selriga = expense; ismodal = true;}}>
                    <td class="hidden md:table-cell">{#if i == 0}{formatDate(expense.date)}{/if}</td> <!-- Mostra solo per il primo elemento -->
                    <td>{#if i == 0}{expense.category.name}{/if}</td>
                    <td class="hidden md:table-cell">{#if i == 0}{expense.description}{/if}</td> <!-- Mostra solo per il primo elemento -->
                    <td class={quota.user.username == $datilogin.username ? "font-bold text-md text-primary" : ""}>@{quota.user.username}</td>
                    <td class="text-error font-bold">{quota.rimborso == false ? formatCurrency(quota.cost) : ""}</td>
                    <td class="text-success font-bold">{quota.rimborso == true ? formatCurrency(quota.cost) : ""}</td>
                </tr>
            {/each}
        {/each}
    </tbody>
</table>


<!-- <Aggiungispesa open={ismodal} on:close={()=>{ismodal=false}} /> -->
