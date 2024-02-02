
<script>
    import { onMount } from 'svelte';
    import Input from '$daisi/Input.svelte'; // Assicurati di avere questo componente o adattalo al tuo caso
  
    export let open = true;
    let descrizione = '';
    let categoria = '';
    let data = '';
    let importoTotale = '';
    let rimborso = false;
    let participants = []; // Assumeremo che questa sia una lista di partecipanti disponibili
    let selectedParticipants = []; // I partecipanti selezionati per la spesa
    import { createEventDispatcher } from 'svelte';
  // Resto dell'import e dello script

  const dispatch = createEventDispatcher();
  
    // Dati fittizi per selectOptions, sostituire con dati reali secondo necessità
    let selectOptions = [
      { value: 'cibo', label: 'Cibo' },
      { value: 'trasporto', label: 'Trasporto' },
      // Aggiungi altre categorie qui...
    ];
  
    onMount(() => {
      // Inizializzazione o caricamento di dati, se necessario
    });
  
    function aggiungiSpesa() {
      // Logica per aggiungere o modificare la spesa
      console.log('Aggiungi/Modifica Spesa', { descrizione, categoria, data, importoTotale, rimborso, selectedParticipants });
      // Implementa la logica per salvare la spesa nel backend o nello stato globale dell'app
    }
  
    function toggleParticipant(participant, checked) {
      if (checked) {
        selectedParticipants = [...selectedParticipants, participant];
      } else {
        selectedParticipants = selectedParticipants.filter(p => p.id !== participant.id);
      }
    }
  </script>
  
  <dialog class="modal" open={open}>
    <div class="modal-box">
      <div class="flex flex-col justify-center items-center space-y-4 m-auto">
        <div class="text-4xl text-third">Aggiungi la spesa</div>
        <div>Completare i campi per aggiungere una spesa</div>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text mr-4">Rimborso</span>
            <input type="checkbox" class="toggle" bind:checked={rimborso} />
          </label>
        </div>
        
        <textarea class="textarea textarea-bordered textarea-md w-full" bind:value={descrizione} placeholder="Descrizione"></textarea>
        
        <div class="grid grid-cols-2 items-center justify-center gap-2 w-full">
          <select class="select select-bordered" bind:value={categoria}>
            <option disabled value="">Seleziona categoria</option>
            {#each selectOptions as option}
              <option value={option.value}>{option.label}</option>
            {/each}
          </select>
          <Input bind:value={data} placeholder="Data" type="date" />
        </div>
        
        <Input bind:value={importoTotale} placeholder="Importo Totale" inputclass="input-primary" />
        <div>Le spese sono condivise equamente per default</div>
        
        <!-- Qui potresti voler implementare la logica per gestire la visualizzazione e la selezione dei partecipanti -->
        
        <button class="btn btn-primary w-full" on:click={aggiungiSpesa}>Aggiungi</button>
      </div>
      <div class="modal-action">
        <button class="btn" on:click={()=>{dispatch('close')}}>Close</button>
      </div>
    </div>
  </dialog>