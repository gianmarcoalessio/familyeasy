<script>
    import axios from 'axios';
    import Navigator from '$prj/Navigator.svelte';
    import Categoria from '$prj/Categoria.svelte';
    import Table from '$prj/Table.svelte';
    import Aggiungispesa from '$prj/Aggiungispesa.svelte';
    import { onMount } from 'svelte';

    let utenti = [];
    let categoria = {}

    async function dammiUtenti() {
        try {
            const response = await axios.get(`http://localhost:3000/api/users/search?q=mari`);
            utenti = response.data; // Assuming the user data is directly in the response data
        } catch (err) {
            console.error(err);
            utenti = err.message;
        }
    }

</script>

<div class="flex flex-col space-y-4 mx-24 mt-4">
    <Navigator />

    <div class="text-6xl font-bold ">test</div>
</div>

<div class="flex flex-col justify-center items-center w-1/2 space-y-4 mt-24 m-auto">

    <button on:click={dammiUtenti}>Prova</button>
    <pre>{JSON.stringify(categoria, null, 2)}</pre>

   <Categoria bind:categoria />

   <Aggiungispesa />


</div>
