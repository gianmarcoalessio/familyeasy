<script>
    import { onMount } from 'svelte';
    import { dammiSpese } from '$lib/servizi.js';
    import Spesamodifica from '$prj/Spesamodifica.svelte';

    let expenses = [];
    let ismodal = false;

    onMount(async () => {
        expenses = await dammiSpese();
    });

    function formatParticipants(participants) {
        if (participants.length === 1) {
            return `${participants[0].firstname} ${participants[0].lastname}`;
        } else if (participants.length === 0) {
            return `Nessuno`;
        } else {
            return 'Partecipanti'; // Potremmo utilizzare un dropdown per mostrare i nomi
        }
    }

    // Funzione di aiuto per formattare la data
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // +1 perché i mesi partono da 0
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }
    // Funzione aggiuntiva per formattare numeri in euro
    function formatCurrency(value) {
        return Number(value).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
    }
</script>

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
            <tr class="hover:bg-neutral cursor-pointer" on:click={()=>{ismodal=true}}>
                <td>{formatDate(expense.date)}</td>
                <td>{formatCurrency(expense.totalcost)}</td>
                <td>
                    {#if expense.quote.length > 1}
                        <div class="dropdown">
                            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                            <div tabindex="0" role="button" class="btn btn-primary m-1">{formatParticipants(expense.quote)}</div>
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


<!-- <Spesamodifica open={ismodal} on:close={()=>{ismodal=false}} /> -->
