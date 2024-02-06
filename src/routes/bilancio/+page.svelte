<script>
    import Navigator from '$prj/Navigator.svelte';
    import Input from '$daisi/Input.svelte';
    import TableBilancio from '$prj/TableBilancio.svelte';
    import { datilogin } from '$lib/servizi.js';

</script>

<div class="flex flex-col space-y-4 mx-24 mt-4">
    <Navigator />

    <div class="text-6xl font-bold ">Bilancio di @{$datilogin.username}</div>
</div>

<div class="grid grid-cols-1  mx-24 my-4">
<TableBilancio />
</div>
