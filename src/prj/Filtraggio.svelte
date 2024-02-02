
<script>
    import { onMount } from 'svelte';
  
    let selectedMonth = null;
    let selectedYear = null;
    let months = [];
    let years = [];
    let filter = 'all';
  
    onMount(() => {
      // Inizializza qui i tuoi mesi e anni, potresti volerli generare dinamicamente
      months = [
        { id: 1, name: 'Gennaio' },
        { id: 2, name: 'Febbraio' },
        // ...aggiungi tutti i mesi
        { id: 12, name: 'Dicembre' }
      ];
  
      const currentYear = new Date().getFullYear();
      years = Array.from({ length: 10 }, (_, index) => ({
        id: currentYear - index,
        name: `${currentYear - index}`
      }));
    });
  
    function setFilter(f) {
      filter = f;
      // Potresti voler comunicare questo filtro al componente della tabella
    }
  
    function selectMonth(month) {
      selectedMonth = month;
    //   setFilter('month');
    }
  
    function selectYear(year) {
      selectedYear = year;
    //   setFilter('year');
    }
  </script>
  
  <div class="mb-4">
    <button class="btn" on:click={() => setFilter('all')}>Tutte</button>
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
  </div>
  