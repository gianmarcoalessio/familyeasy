<script>
    import Input from '$daisi/Input.svelte';
    import {login,addError} from '$lib/servizi.js'
    import {goto} from '$app/navigation'

    let user ={
        username: '',
        password: ''
    }
    let loading = false

    async function loginnare() {
        try {
            loading = true
            await login(user)
            goto("/profilo")
        } catch (error) {
            loading = false
            addError(error.response?.data?error.response.data:error.message)
        }
        loading = false
    }
</script>

<div class="flex flex-col justify-center items-center w-1/4 space-y-4 mt-24 m-auto">
    <div class="text-4xl font-bold text-primary">FamilyEasy</div>
    <Input bind:value={user.username} placeholder="Username" />
    <Input type="password" bind:value={user.password} placeholder="Password" />
    <a href="/registration" class="btn btn-link">Registrati</a>
    <button class="btn btn-primary" on:click={loginnare} >  
        {#if loading}
        <span class="loading loading-spinner"></span> Loading
        {:else}
        Log in 
        {/if}
    </button>
</div>
