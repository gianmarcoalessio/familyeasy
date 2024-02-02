<script>
  import IconPig from '$svg/IconPig.svelte';
  import IconExpense from '$svg/IconExpense.svelte';
  import IconProfile from '$svg/IconProfile.svelte';
  import { goto } from '$app/navigation';
</script>

<div class="flex flex-row items-center justify-between px-2 md:px-0">
  <div class="text-4xl font-bold text-primary">Family-easy</div>

  <ul class="menu bg-base-200 hidden lg:menu-horizontal rounded-box">
    <li>
      <button on:click={() => goto('/profilo')}>
        <div class="w-8 fill-current"><IconProfile /></div>
        Profilo
      </button>
    </li>
    <li>
      <button on:click={() => goto('/spese')}>
        <div class="w-8 fill-current"><IconExpense /></div>
        Spese
      </button>
    </li>
    <li>
      <button on:click={() => goto('/bilancio')}>
        <div class="w-8 fill-current"><IconPig /></div>
        Bilancio
      </button>
    </li>
    <li>
      <button on:click={() => goto('/test')}>
        <div class="w-8 h-8"></div>
        test
      </button>
    </li>
  </ul>
</div>
