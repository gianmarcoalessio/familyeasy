<script>
    import Input from '$daisi/Input.svelte';
    import Table from '$prj/Table.svelte';
    import Navigator from '$prj/Navigator.svelte';
    import Aggiungispesa from '$prj/Aggiungispesa.svelte';

    let ismodal = false;
</script>

<div class="flex flex-col space-y-4 md:mx-24 mx-2 mt-4">
    <Navigator />
    <div class="text-6xl font-bold">Spese</div>
</div>

<div class="grid md:gap-0 grid-cols-1 items-center md:mx-24 mx-4 my-4">
    <Table />
</div>



