<script>
    import Navigator from '$prj/Navigator.svelte';
    import IconProfile from '$svg/IconProfile.svelte';
    import {goto} from '$app/navigation';
    import {logout,datilogin, addError} from '$lib/servizi.js';
    
    async function logoutare() {
        try {
            await logout();
            goto("/");
        } catch (error) {
            addError(error.response?.data?error.response.data:error.message); // non andrà mai in errore
        }
    }
</script>

<div class="flex flex-col space-y-4 mx-24 mt-4">
    <Navigator />

    <div class="text-6xl font-bold ">Profilo</div>
</div>

<div class="flex flex-col items-center justify-center space-y-8 mt-4">
    <div class="w-1/2 text-center p-4 bg-neutral-content rounded-xl">
        Benvenuto su Family-easy, un progetto costruito per l'esame di programmazione WEB 2023-2024 dell'università di Trieste svolto da Gianmarco Alessio.
        Per il front-end si è utilizzato Svelte, per il back-end Node.js e per il database MongoDB.
        Con Svelte si è fatto uso del framework TailwindCSS per la parte di stile e di DaisyUI per la parte di componenti.
    </div>
    <div>User collegato</div>
    <div class="flex flex-row items-center justify-center space-x-2 ">
        <div class="fill-current w-32"><IconProfile /></div>

        <div class="flex flex-col">
            <div class="text-2xl text-primary">{$datilogin.firstname} {$datilogin.lastname}</div>
            <div class="">@{$datilogin.username}</div>
        </div>
    </div>
    <div>
        <button class="btn btn-primary" on:click={logoutare}>Logout</button>
    </div>
</div>
