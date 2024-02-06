<script>
    import Input from '$daisi/Input.svelte';
    import {creaUtente,addError} from '$lib/servizi.js';
    import {goto} from '$app/navigation';

    let confermapassword = '';
    let user = {
        username: '',
        password: '',
        firstname: '',
        lastname: '',
    };

    async function registra() {
        try {
            if (user.password == confermapassword) {
               user = await creaUtente(user);
               goto("/")
            } else {
                throw new Error('Le password non coincidono');
            }
        } catch (error) {addError(error.response?.data?error.response.data:error.message)}
    }
</script>

<div class="flex flex-col justify-center items-center w-1/4 space-y-4 mt-24 m-auto">
    <div class="text-4xl font-bold text-primary">Registrazione</div>
    <Input placeholder="Username" bind:value={user.username} />
    <Input placeholder="Nome" bind:value={user.firstname} />
    <Input placeholder="Cognome" bind:value={user.lastname} />
    <Input type="password" placeholder="Password" bind:value={user.password} />
    <Input type="password" placeholder="Conferma Password" bind:value={confermapassword} />
    <button on:click={registra} class="btn btn-primary">Conferma</button>

</div>
