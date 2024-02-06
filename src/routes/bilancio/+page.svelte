<script>
    import Navigator from '$prj/Navigator.svelte';
    import Input from '$daisi/Input.svelte';
    import TableBilancio from '$prj/TableBilancio.svelte';
    import { datilogin } from '$lib/servizi.js';

</script>

<div class="flex flex-col space-y-4 md:mx-24 mx-2 mt-4">
    <Navigator />

    <div class="text-6xl font-bold ">Bilancio di @{$datilogin.username}</div>
</div>

<div class="grid md:gap-0 grid-cols-1 items-center md:mx-24 mx-4 my-4">
<TableBilancio />
</div>
