<script>
    import { onMount } from 'svelte';
    import { dammiSpese } from '$lib/servizi.js';
    import { createEventDispatcher } from 'svelte';
    import Aggiungispesa from '$prj/Aggiungispesa.svelte';
    import Spesa from '$prj/Spesa.svelte';
    import { formatDate } from '$lib/utils.js';
    import Filtraggio from '$prj/Filtraggio.svelte';

    let expenses = [];
    let ismodal = false;
    let ismodalagg = false;
    let selriga ={}
    let filtri = {}

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
        return Number(value).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
    }
    export async function reload(){
        console.log('reload',filtri)
        expenses = await dammiSpese(filtri);
    }
</script>

{#if ismodal}
    <Spesa open bind:expense={selriga} on:close={()=>{ismodal=false}} on:reload={()=>{ismodal=false; reload()}} />
{/if}

{#if ismodalagg}
    <Aggiungispesa open on:close={()=>{ismodalagg=false}} on:reload={()=>{ismodalagg=false; reload()}} />
{/if}

<button class="btn btn-primary" on:click={()=>{ismodalagg=true}}>Aggiungi Spesa</button>


<Filtraggio on:filtra={async e=>{filtri = e.detail; await reload()}}  />

    <table class="table table-zebra w-full">
        <thead>
            <tr>
                <th>Data</th>
                <th>Totale</th>
                <!-- Nascondi su schermi piccoli, mostra su md e superiori -->
                <th class="hidden md:table-cell">Partecipanti</th>
                <!-- Nascondi su schermi piccoli, mostra su md e superiori -->
                <th class="hidden md:table-cell">Descrizione</th>
                <th>Categoria</th>
            </tr>
        </thead>
        <tbody>
            {#each expenses as expense}
                <tr class="hover:bg-neutral-content cursor-pointer" on:click={()=>{selriga=expense;ismodal=true}}>
                    <td>{formatDate(expense.date)}</td>
                    <td>{formatCurrency(expense.totalcost)}</td>
                    <!-- Nascondi su schermi piccoli, mostra su md e superiori -->
                    <td class="hidden md:table-cell">
                        {#if expense.quote.length > 1}
                            <div class="dropdown">
                                <div tabindex="0" role="button" class="btn btn-primary m-1" on:click|stopPropagation={()=>{}}>{formatParticipants(expense.quote)}</div>
                                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    {#each expense.quote as participant}
                                        <li>
                                            <div class="flex flex-row space-x-2 items-center">
                                                <div class="flex-1">@{participant.user.username}</div>
                                                <div class="w-12 {participant.rimborso ? 'text-success' : 'text-error'}">{formatCurrency(participant.cost)}</div>
                                                <input type="checkbox" disabled class="toggle" bind:checked={participant.rimborso} />
                                            </div>
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        {:else}
                            {formatParticipants(expense.quote)}
                        {/if}
                    </td>
                    <!-- Nascondi su schermi piccoli, mostra su md e superiori -->
                    <td class="hidden md:table-cell">{expense.description}</td>
                    <td><div class="badge badge-secondary">{expense.category.name}</div></td>
                </tr>
            {/each}
        </tbody>
    </table>
    

<!-- <Aggiungispesa open={ismodal} on:close={()=>{ismodal=false}} /> -->
