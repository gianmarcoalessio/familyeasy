<script>
    import { onMount } from 'svelte';
    import { dammiSpese } from '$lib/servizi.js';
    import { createEventDispatcher } from 'svelte';
    import Aggiungispesa from '$prj/Aggiungispesa.svelte';
    import Spesa from '$prj/Spesa.svelte';
    import { formatDate } from '$lib/utils.js';

    let expenses = [];
    let ismodal = false;
    let selriga ={}

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
    async function reload(){
        expenses = await dammiSpese();
    }
</script>

{#if ismodal}
    <Spesa open bind:expense={selriga} on:close={()=>{ismodal=false}} on:reload={()=>{ismodal=false, reload()}} />
{/if}

<table class="table table-zebra w-full">
    <!-- head -->
    <thead>
        <tr>
            <th>Data</th>
            <th>Totale</th>
            <th>Partecipanti</th>
            <th>Descrizione</th>
            <th>Categoria</th>
        </tr>
    </thead>
    <tbody>
        {#each expenses as expense}
            <tr class="hover:bg-neutral cursor-pointer" on:click={()=>{selriga=expense;ismodal=true}}>
                <td>{formatDate(expense.date)}</td>
                <td>{formatCurrency(expense.totalcost)}</td>
                <td>
                    {#if expense.quote.length > 1}
                        <div class="dropdown">
                            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <div tabindex="0" role="button" class="btn btn-primary m-1" on:click|stopPropagation={()=>{}}>{formatParticipants(expense.quote)}</div>
                            <!-- Dropdown per visualizzare i partecipanti -->
                            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                {#each expense.quote as participant}
                                    <li>
                                        <div class="flex flex-row space-x-2 items-center">
                                    <div class="flex-1">@{participant.user.username}</div>
                                    <div class="w-12 {participant.rimborso ? 'text-success' : 'text-error'}">{formatCurrency(participant.cost)}</div>
                                    <input type="checkbox" disabled class="toggle" bind:checked={participant.rimborso} />
                                </div></li>
                                {/each}
                            </ul>
                        </div>
                    {:else}
                        {formatParticipants(expense.quote)}
                    {/if}
                </td>
                <td>{expense.description}</td>
                <td>{expense.category.name}</td>
            </tr>
        {/each}
    </tbody>
</table>


<!-- <Aggiungispesa open={ismodal} on:close={()=>{ismodal=false}} /> -->
