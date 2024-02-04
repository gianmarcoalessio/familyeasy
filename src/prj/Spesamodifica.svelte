<script>
    import { onMount } from 'svelte';
    import Input from '$daisi/Input.svelte';
    import Categoria from '$prj/Categoria.svelte';
    import { daiSpesa } from '$lib/servizi.js';
    let quota = {
        user: {
            username: '',
        },
        cost: 0,
        rimborso: false,
    };
    let expense = {
        description: '',
        quote: [quota],
        category: {},
        date: '',
    };
    let categoria = {};

    // Funzione aggiuntiva per formattare numeri in euro
    function formatCurrency(value) {
        return Number(value).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
    }
</script>

<div class="text-4xl text-third">Aggiungi la spesa</div>
<div>Completare i campi per aggiungere una spesa</div>

<textarea
    class="textarea textarea-bordered textarea-md w-full"
    bind:value={expense.description}
    placeholder="Descrizione della spesa"></textarea>

<div class="grid grid-cols-2 items-center justify-center gap-2 w-full">
    <Categoria bind:categoria />
    <Input placeholder="Data" type="date" />
</div>

<ul class="p-2 shadow bg-base-100  w-52">
{#each expense.quote as participant}
    <li>
        <div class="flex flex-row space-x-2 items-center">
            <div class="flex-1">@{participant.user.username}</div>
            <input type="number" class="w-12 {participant.rimborso ? 'text-success' : 'text-error'}" placeholder="{formatCurrency(participant.cost)}">
            <input type="checkbox" class="toggle" bind:checked={participant.rimborso} />
        </div>
    </li>
{/each}
</ul>

<button class="btn btn-primary w-full" on:click={daiSpesa}>Aggiungi</button>
