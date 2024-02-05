<script>
    import { onMount,tick } from 'svelte';
    import Input from '$daisi/Input.svelte';
    import Categoria from '$prj/Categoria.svelte';
    import Search from '$prj/Search.svelte';
    import { daiSpesa } from '$lib/servizi.js';
    import { createEventDispatcher } from 'svelte';

    export let open = false;
    const dispatch = createEventDispatcher();
    let expense = {
        quote: [],
        category:{},
    };
    // let today = new Date().toISOString().slice(0, 10);
    let datiSalvati = {};
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
            date: new Date().toISOString().slice(0, 10),
        };

        datiSalvati = JSON.parse(localStorage.getItem('token'));
        expense.quote[0].user.username = datiSalvati.username;
        expense.quote[0].user._id = datiSalvati._id;
    });

    // Funzione aggiuntiva per formattare numeri in euro
    function formatCurrency(value) {
        return Number(value).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
    }
    function aggiungiQuota(e) {
        expense.quote = [...expense.quote, { user: e.detail, cost: 0, rimborso: false }];
    }
    async function aggiungiSpesa() {
        expense.category = categoria;
        await daiSpesa(0, 0, expense);
    }

    function getisrimborso() {
        return categoria.name === 'Rimborso' ? true : false;
    }

    function gettotaleCosti() {
        let quote = expense.quote;

        if (isrimborso && quote.length > 1) {
            let totale = 0;
            for (let i = 1; i < quote.length; i++) {
                totale += quote[i].cost;
                quote[i].rimborso = true;
            }
            quote[0].cost = totale;

            quote[0].rimborso = false;
            return 0;
        } else {
            return expense.quote.reduce((total, quota) => {
                quota.rimborso = false;
                return total + quota.cost;
            }, 0);
        }
    }

    // Calcola il totale delle quote dove il rimborso è false
    $: categoria = expense.category;
    $: totaleCosti = gettotaleCosti(expense,categoria);
    $: isrimborso = getisrimborso(categoria);
</script>

<dialog class="modal" {open}>
    <div class="modal-box flex flex-col space-y-3 {isrimborso?"bg-neutral-content":""}">

<div class="text-4xl text-primary ">Aggiungi {isrimborso?"Rimborso":"Spesa"}</div>
<div>Completare i campi per aggiungere una spesa</div>

<textarea
    class="textarea textarea-bordered textarea-md w-full"
    bind:value={expense.description}
    placeholder="Descrizione della spesa"></textarea>

<div class="grid grid-cols-2 items-center justify-center gap-2 w-full">
    <Categoria
    bind:categoria={expense.category}
    on:change={async (e) => {
        gettotaleCosti(); // errore di svelte
        await tick(); //aspettare un giro prima di aggiornare la tabella l'ordine è importante
        expense.quote = [...expense.quote];
    }} />
    <Input placeholder="" type="date" bind:value={expense.date} />
</div>

<Search on:add={aggiungiQuota} topleftlabel={isrimborso?"Aggiungere gli utenti da rimborsare" :"Cerca un utente a cui associare una quota"} />
<Input topleftlabel="Totale spesa" disabled value={formatCurrency(totaleCosti)} />



<table class="table p-2 shadow bg-base-100 w-full text-center">
    <thead>
        <tr>
            <th>Username</th>
            <th>Quota</th>
            <th>Spesa/Rimborso</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {#each expense.quote as quota,i}
            <tr>
                <td class="flex-1">@{quota.user.username}</td>
                <td>
                    <input
                        type="number"
                        class="w-40 text-lg p-2 text-center rounded-lg {quota.rimborso ? 'text-success' : 'text-error'}"
                        placeholder={formatCurrency(quota.cost)}
                        disabled={i==0 && categoria.name === 'Rimborso'}
                        bind:value={quota.cost} />
                </td>
                <td>
                    <input
                        type="checkbox"
                        disabled
                        class="toggle"
                        bind:checked={quota.rimborso} />
                </td>
                <td>{#if i>0}<button on:click={()=>{expense.quote.splice(i,1); expense.quote = [...expense.quote]}} class="btn" >x</button>{/if}</td>
            </tr>
        {/each}
    </tbody><tbody> </tbody>
</table>

<button class="btn btn-primary w-full" on:click={aggiungiSpesa}>Aggiungi</button>

<div class="modal-action">
    <button
      class="btn"
      on:click={() => {
        dispatch('close');
      }}>Close</button>
  </div>

</div>
</dialog>

<!-- Come funziona il rimborso: -->
<!-- Praticamente se metto le quote con rimborso true le mie quote sono positive e le quote degli altri sono negative in
modo tale che la sommando tutte le quote si ottiene l'effettiva spesa, quindi se io rimborso il valore è negativo
e se gli altri metto rimborso=false allora la quotà è positiva  (in rosso abbiamo una spesa e in verde un guadagno)-->

<!-- il valore mio è sempre positivo, sia se faccio un rimborso sia se non lo faccio, però gli altri posso cambiare, se non è un rimborso allora mi aiutano con la spesa altrimenti se è un rimborso mi prendo soldi dalla mia spesa e gli vengo accreditati al loro conto!!!!!!!

Per questo il valore di rimborso per me sarà sempre false perché un rimborso a se stessi non ha senso

Poi per calcolare il balance finale si sommano le quote ricevute come rimborso (rimborso=true) in AVERE e si sommano le quote come partecipante (rimborso=false) nel DARE -->
<!-- il rimborso è rispetto all'user e non alla spesa -->
