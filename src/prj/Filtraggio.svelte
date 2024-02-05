
<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    import Input from '$daisi/Input.svelte';
  
    let dispatch = createEventDispatcher();
    let selectedMonth = null;
    let selectedYear = null;
    let months = [];
    let years = [];
    //i due filtri che facciamo 
    let filtri = {
      year: null,
      month: null
    }
  
    onMount(() => {
      // Inizializza qui i tuoi mesi e anni, potresti volerli generare dinamicamente
      months = [
        { id: 1, name: 'Gennaio' },
        { id: 2, name: 'Febbraio' },
        { id: 3, name: 'Marzo' },
        { id: 4, name: 'Aprile' },
        { id: 5, name: 'Maggio' },
        { id: 6, name: 'Giugno' },
        { id: 7, name: 'Luglio' },
        { id: 8, name: 'Agosto' },
        { id: 9, name: 'Settembre' },
        { id: 10, name: 'Ottobre' },
        { id: 11, name: 'Novembre' },
        { id: 12, name: 'Dicembre' }
      ];
  
      const currentYear = new Date().getFullYear();
      years = Array.from({ length: 10 }, (_, index) => ({
        id: currentYear - index,
        name: `${currentYear - index}`
      }));
    });
  
    function resetFilter(f) {
      selectedYear = null
      selectedMonth = null
      filtri = {
        year: null,
        month: null,
        q:'',
      }
      dispatch('filtra',filtri)
    }
  
    function selectMonth(month) {
      selectedMonth = month 
      filtri.month = month.id
      dispatch('filtra',filtri)
    }
  
    function selectYear(year) {
      selectedYear = year
      filtri.year = year.id
      dispatch('filtra',filtri)
    }
  </script>
  
  <Input placeholder="Cerca la spesa" on:change={()=>{dispatch('filtra',filtri)}} inputclass="my-4 mx-2" bind:value={filtri.q}/>
  <div class="mb-4">
    <button class="btn" on:click={() => resetFilter('all')}>Tutte</button>
    <!-- anno -->
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn w-full">{selectedYear ? selectedYear.name : 'Seleziona un anno'}</div>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full">
        {#each years as year}
          <li>
            <button class="w-full text-left" on:click={() => selectYear(year)}>
              {year.name}
            </button>
          </li>
        {/each}
      </ul>
    </div>
    <!-- mesi -->
    {#if filtri.year}
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn w-full">
        {selectedMonth ? selectedMonth.name : 'Seleziona un mese'}
      </div>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full">
        {#each months as month}
          <li>
            <button class="w-full text-left" on:click={() => selectMonth(month)}>
              {month.name}
            </button>
          </li>
        {/each}
      </ul>
    </div>

    {/if}

  </div>
  