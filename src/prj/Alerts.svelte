<script>
    import { messaggi } from '$lib/servizi.js';
    import { goto } from '$app/navigation';
    let fl = false;
    // let messaggi =[
    //     {id:1, messaggio: 'Hai 3 messaggi non letti. Tocca qui per vedere.', ruolo:"error"},
    //     {id:2, messaggio: 'Hai 3 messaggi non letti. Tocca qui per vedere.', ruolo:"warning"},
    //     {id:3, messaggio: 'Hai 3 messaggi non letti. Tocca qui per vedere.', ruolo:"success"},
    // ]
    async function rimuoviMessaggio(index) {
        // Memorizza il messaggio prima di modificarlo
        if (index >= 0 && index < $messaggi.length) {
            const messaggioSelezionato = $messaggi[index].messaggio;
            // Rimuovi il messaggio
            messaggi.update((currentMessaggi) => {
                currentMessaggi.splice(index, 1);
                return currentMessaggi;
            });

            // Controlla il messaggio e reindirizza se necessario
            if (messaggioSelezionato === 'User not authenticated') {
                await goto('/');
                window.location.reload();
            }
        }
    }
</script>

<div class="stack" style="transform: translateX(-50%);">
    {#each $messaggi as messaggio, i}
        <!-- svelte-ignore a11y-no-interactive-element-to-noninteractive-role -->
        <!-- messaggi =[...messaggi] rende reattiva la variabile messaggi -->
        <button
            on:click={() => {
                rimuoviMessaggio(i);
            }}
            role="alert"
            class="alert"
            class:alert-error={messaggio.ruolo == 'error'}
            class:alert-warning={messaggio.ruolo == 'warning'}
            class:alert-success={messaggio.ruolo == 'success'}>
            {#if messaggio.ruolo == 'error'}
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {:else if messaggio.ruolo == 'warning'}
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {/if}
            <span>{messaggio.messaggio}</span>
        </button>
    {/each}
</div>
