<script>
    import Navigator from '$prj/Navigator.svelte';
    import Input from '$daisi/Input.svelte';
    import Filtraggio from '$prj/Filtraggio.svelte';
    import Table from '$prj/Table.svelte';

</script>

<div class="flex flex-col space-y-4 mx-24 mt-4">
    <Navigator />

    <div class="text-6xl font-bold ">Bilancio</div>
</div>

<div class="grid grid-cols-1  mx-24 my-4">
<div class="flex flex-row space-x-24 justify-center items-center my-8">
    <div class="flex flex-col items-center space-y-4 justify-center ">
        <div class="text-5xl">Dare</div>
        <div class="text-5xl">0€</div>
    </div>
    <div class="flex flex-col items-center space-y-4 justify-center">
        <div class="text-5xl">Avere</div>
        <div class="text-5xl">0€</div>
    </div>
</div>

<Input placeholder="Filtra per utente" inputclass="my-4 mx-2" />
<Filtraggio />
<Table />
</div>
