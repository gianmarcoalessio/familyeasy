<script>
    import { onMount } from 'svelte';
    import { dammiCategorie } from '$lib/servizi.js';

    function cambiaCategoria(event) {
        categoria = categorie.find((c) => c._id === event.target.value);
    }

    let categorie = [];
    export let categoria = {};

    onMount(async () => {
        categorie = await dammiCategorie();
        if(!categoria._id){
            categoria = categorie[0];
        }

    });
</script>

<select class="select select-bordered" value={categoria._id} on:change={cambiaCategoria}>
    <option disabled value="">Seleziona categoria</option>
    {#each categorie as option}
        <option value={option._id}>{option.name}</option>
    {/each}
</select>
