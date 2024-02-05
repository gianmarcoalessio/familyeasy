<script>
    import { onMount } from 'svelte';
    import Input from '$daisi/Input.svelte';
    import Categoria from '$prj/Categoria.svelte';
    import Search from '$prj/Search.svelte';
    import { daiSpesa } from '$lib/servizi.js';

    let expense = {
        quote: [],
    };
    // let today = new Date().toISOString().slice(0, 10);
    let datiSalvati = {}
    onMount(() => {
        expense = {
            description: '',
            quote: [
                {
                    user: {
                        _id: '',
                        username: '',
                    },
                    cost: 0,
                    rimborso: false,
                },
            ],
            category: {},
            date: '',
        };

        datiSalvati = JSON.parse(localStorage.getItem('token'))
        expense.quote[0].user.username = datiSalvati.username;
        expense.quote[0].user._id = datiSalvati._id;
    });

    let categoria = {};

    // Funzione aggiuntiva per formattare numeri in euro
    function formatCurrency(value) {
        return Number(value).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
    }
    function aggiungiQuota(e) {
        expense.quote = [...expense.quote, { user: e.detail, cost: 0, rimborso: false }];
    }
    async function aggiungiSpesa() {
        expense.category = categoria;
        await daiSpesa(2023,3, expense);
    }

     // Calcola il totale delle quote dove il rimborso è false
     $: totaleCosti = expense.quote.reduce((total, quota) => {
        return total + quota.cost;
    }, 0);
</script>

<div class="text-4xl text-third">Aggiungi la spesa</div>
<div>Completare i campi per aggiungere una spesa</div>

<textarea
    class="textarea textarea-bordered textarea-md w-full"
    bind:value={expense.description}
    placeholder="Descrizione della spesa"></textarea>

<div class="grid grid-cols-2 items-center justify-center gap-2 w-full">
    <Categoria bind:categoria />
    <Input placeholder="" type="date" bind:value={expense.date}  />
</div>

<Input topleftlabel="Totale spesa" disabled value={formatCurrency(totaleCosti)} />


<Search on:add={aggiungiQuota} topleftlabel="Cerca un utente a cui associare una quota" />

<table class="table p-2 shadow bg-base-100 w-full text-center">
    <thead>
        <tr>
            <th>Username</th>
            <th>Quota</th>
            <div class="tooltip" data-tip="hello">
            <th>Partecipante/Rimborso</th>
        </div>
        </tr>
    </thead>
    <tbody>
    {#each expense.quote as quota}
        <tr>
            <td class="flex-1">@{quota.user.username}</td>
            <td>
                <input
                    type="number"
                    class="w-16 p-2 text-center rounded-lg {quota.rimborso ? 'text-success' : 'text-error'}"
                    placeholder={formatCurrency(quota.cost)} bind:value={quota.cost} /></td>

            <td>
                <input type="checkbox" disabled={quota.user._id === datiSalvati._id} class="toggle" bind:checked={quota.rimborso} />
            </td>
        </tr>
    {/each}
    <tbody>
</table>

<button class="btn btn-primary w-full" on:click={aggiungiSpesa}>Aggiungi</button>



<!-- Come funziona il rimborso: -->
<!-- Praticamente se metto le quote con rimborso true le mie quote sono positive e le quote degli altri sono negative in
modo tale che la sommando tutte le quote si ottiene l'effettiva spesa, quindi se io rimborso il valore è negativo
e se gli altri metto rimborso=false allora la quotà è positiva  (in rosso abbiamo una spesa e in verde un guadagno)-->


<!-- il valore mio è sempre positivo, sia se faccio un rimborso sia se non lo faccio, però gli altri posso cambiare, se non è un rimborso allora mi aiutano con la spesa altrimenti se è un rimborso mi prendo soldi dalla mia spesa e gli vengo accreditati al loro conto!!!!!!!

Per questo il valore di rimborso per me sarà sempre false perché un rimborso a se stessi non ha senso

Poi per calcolare il balance finale si sommano le quote ricevute come rimborso (rimborso=true) in AVERE e si sommano le quote come partecipante (rimborso=false) nel DARE -->
<!-- il rimborso è rispetto all'user e non alla spesa -->