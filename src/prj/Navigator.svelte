<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import IconPig from '$svg/IconPig.svelte';
  import IconExpense from '$svg/IconExpense.svelte';
  import IconProfile from '$svg/IconProfile.svelte';
  import { derived } from 'svelte/store';

  // Deriva lo store per ottenere il percorso dell'URL corrente
  const path = derived(page, $page => $page.url.pathname);
</script>

<div class="flex flex-row items-center justify-between px-2 md:px-0">
  <div class="text-4xl font-bold text-primary">Family-easy</div>

  <ul class="menu bg-base-200 menu-horizontal rounded-box">
    {#each [['/profilo', IconProfile], ['/spese', IconExpense], ['/bilancio', IconPig]] as [link, Icon]}
      <li>
        <button on:click={() => goto(link)} class:active={$path === link} >
          <div class="w-8 fill-current"><Icon /></div>
          {#if link === '/profilo'}Profilo{/if}
          {#if link === '/spese'}Spese{/if}
          {#if link === '/bilancio'}Bilancio{/if}
        </button>
      </li>
    {/each}
    <!-- <li>
      <button on:click={() => goto('/test')} class:active={$path === '/test'}>
        <div class="w-8 h-8"></div>
        Test
      </button>
    </li> -->
  </ul>
</div>

