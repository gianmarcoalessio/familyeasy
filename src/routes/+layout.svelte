<script>
    import '../app.css';
    import Alerts from '$prj/Alerts.svelte';
    import { goto, beforeNavigate } from '$app/navigation';
    import { datilogin,setbearer } from '$lib/servizi.js';
    import { onMount } from 'svelte';

    onMount(() => {
        let tm = JSON.parse(localStorage.getItem('token') || '{}'); //prendiamo il token
        if (tm.token) {
            setbearer(tm.token); // memorizzo il token di autenticazione
            $datilogin = tm; // memorizzo i dati dell'utente loggato
        }

        if (!$datilogin.token) {
            goto('/');
        }
    });

    beforeNavigate(async ({ to, cancel }) => {
        if (!$datilogin.token) {
            if (to?.route.id != '/registration' && to?.route.id != '/') {
                await cancel(); // impedisco di andare in altre pagine
                goto('/'); // poi il redirect
            }
        }
    });
</script>

<slot />
<div class="absolute top-2 left-[50%]">
    <Alerts />
</div>
