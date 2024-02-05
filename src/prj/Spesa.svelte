<script>
    import { onMount, tick } from 'svelte';
    import Input from '$daisi/Input.svelte';
    import Categoria from '$prj/Categoria.svelte';
    import Search from '$prj/Search.svelte';
    import { createEventDispatcher } from 'svelte';
    import { updateSpesa, deleteSpesa } from '$lib/servizi.js';

    export let open = false;
    const dispatch = createEventDispatcher();
    export let expense = {
        quote: [],
        category: {},
    };

    // Funzione aggiuntiva per formattare numeri in euro
    function formatCurrency(value) {
        return Number(value).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
    }
    function aggiungiQuota(e) {
        expense.quote = [...expense.quote, { user: e.detail, cost: 0, rimborso: isrimborso ? true : false }];
    }
    async function modificaSpesa() {
        await updateSpesa(expense);
        dispatch('reload');
    }

    async function eliminaSpesa() {
        await deleteSpesa(expense);
        dispatch('reload');
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
            expense.quote.forEach((e) => (e.rimborso = false));
            return expense.quote.reduce((total, quota) => {
                return total + quota.cost;
            }, 0);
        }
    }

    // Calcola il totale delle quote dove il rimborso è false
    $: totaleCosti = gettotaleCosti(expense, categoria);
    $: isrimborso = getisrimborso(categoria);
    $: categoria = expense.category;
</script>

<dialog class="modal modal-lg" {open}>
    <div class="modal-box flex flex-col space-y-3 {isrimborso ? 'bg-neutral-content' : ''}">
        <div class="text-4xl text-primary">Modifica {isrimborso ? 'Rimborso' : 'Spesa'}</div>
        <div>Modificare i campi per la spesa selezionata</div>

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

            <Input type="date" bind:value={expense.date} />
        </div>
        <Search
            on:add={aggiungiQuota}
            topleftlabel={isrimborso ? 'Aggiungere gli utenti da rimborsare' : 'Cerca un utente a cui associare una quota'} />
        <Input topleftlabel="Totale spesa" disabled value={formatCurrency(totaleCosti)} />

        <table class="table table-sm p-2 shadow bg-base-100 text-center">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Quota</th>
                    <th>Spesa/Rimborso</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {#each expense.quote as quota, i}
                    <tr>
                        <td class="w-20">@{quota.user.username}</td>
                        <td>
                            <input
                                type="number"
                                class="w-40 text-lg p-2 text-center rounded-lg {quota.rimborso ? 'text-success' : 'text-error'}"
                                placeholder={formatCurrency(quota.cost)}
                                disabled={i == 0 && categoria.name === 'Rimborso'}
                                bind:value={quota.cost} />
                        </td>
                        <td class="w-16">
                            <input type="checkbox" disabled class="toggle" checked={quota.rimborso} />
                        </td>
                        <td
                            >{#if i > 0}<button
                                    on:click={() => {
                                        expense.quote.splice(i, 1);
                                        expense.quote = [...expense.quote];
                                    }}
                                    class="btn btn-third">x</button
                                >{/if}</td>
                    </tr>
                {/each}
            </tbody><tbody> </tbody>
        </table>

        <div class="flex flex-row space-x-2 mt-4">
            <button class="btn btn-error" on:click={eliminaSpesa}>Elimina</button>
            <button class="btn btn-success flex-1" on:click={modificaSpesa}>Modifica</button>
        </div>
        <div class="modal-action">
            <button
                class="btn"
                on:click={() => {
                    dispatch('close');
                }}>Close</button>
        </div>
    </div>
</dialog>
