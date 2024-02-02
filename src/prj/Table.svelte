<script>
    let expenses = [
        {
            data: '2024-01-15',
            totale: '50.00',
            partecipanti: [{ firstname: 'Luca', lastname: 'Rossi' }],
            descrizione: 'Pranzo di lavoro',
            categoria: 'Cibo',
        },
        {
            data: '2024-01-20',
            totale: '120.00',
            partecipanti: [
                { firstname: 'Mario', lastname: 'Bianchi' },
                { firstname: 'Giuseppe', lastname: 'Verdi' },
            ],
            descrizione: 'Materiali ufficio',
            categoria: 'Bisogno',
        },
        {
            data: '2024-02-05',
            totale: '200.00',
            partecipanti: [
                { firstname: 'Paolo', lastname: 'Gialli' },
                { firstname: 'Giovanni', lastname: 'Neri' },
            ],
            descrizione: 'Festa di compleanno',
            categoria: 'Divertimento',
        },
        { data: '2024-02-12', totale: '75.00', partecipanti: [], descrizione: 'Abbigliamento sportivo', categoria: 'Sport' },
        {
            data: '2024-02-18',
            totale: '30.00',
            partecipanti: [{ firstname: 'Mario', lastname: 'Bianchi' }],
            descrizione: 'Aiuto trasloco',
            categoria: 'Favore',
        },
        {
            data: '2024-03-03',
            totale: '60.00',
            partecipanti: [
                { firstname: 'Giuseppe', lastname: 'Verdi' },
                { firstname: 'Giovanni', lastname: 'Neri' },
            ],
            descrizione: 'Cena aziendale',
            categoria: 'Cibo',
        },
        {
            data: '2024-03-11',
            totale: '100.00',
            partecipanti: [{ firstname: 'Paolo', lastname: 'Gialli' }],
            descrizione: 'Libri per il corso',
            categoria: 'Bisogno',
        },
        {
            data: '2024-03-20',
            totale: '150.00',
            partecipanti: [
                { firstname: 'Luca', lastname: 'Rossi' },
                { firstname: 'Mario', lastname: 'Bianchi' },
                { firstname: 'Giuseppe', lastname: 'Verdi' },
            ],
            descrizione: 'Gita fuori porta',
            categoria: 'Divertimento',
        },
        {
            data: '2024-04-01',
            totale: '85.00',
            partecipanti: [{ firstname: 'Giovanni', lastname: 'Neri' }],
            descrizione: 'Abbonamento palestra',
            categoria: 'Sport',
        },
        {
            data: '2024-04-15',
            totale: '45.00',
            partecipanti: [
                { firstname: 'Paolo', lastname: 'Gialli' },
                { firstname: 'Luca', lastname: 'Rossi' },
            ],
            descrizione: 'Pizza tra amici',
            categoria: 'Favore',
        },
    ];
    // Function to format the participants display
    function formatParticipants(participants) {
        if (participants.length === 1) {
            return `${participants[0].firstname} ${participants[0].lastname}`;
        } else if (participants.length === 0) {
            return `Nessuno`;
        } else {
            return 'Partecipanti'; // We will use a dropdown to show names
        }
    }
</script>




<table class="table w-full">
    <!-- head -->
    <thead>
        <tr>
            <th>Data</th>
            <th>Totale</th>
            <th>Partecipanti</th>
            <th>Descrizione</th>
            <th>Categoria</th>
        </tr>
    </thead>
    <tbody>
        {#each expenses as expense}
            <tr>
                <td>{expense.data}</td>
                <td>{expense.totale}</td>
                <td>
                    {#if expense.partecipanti.length > 1}
                        <div class="dropdown">
                            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                            <div tabindex="0" class="btn">{formatParticipants(expense.partecipanti)}</div>
                            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                            <ul tabindex="0" class="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-44">
                                {#each expense.partecipanti as participant}
                                    <li>{participant.firstname} {participant.lastname}</li>
                                {/each}
                            </ul>
                        </div>
                    {:else}
                        {formatParticipants(expense.partecipanti)}
                    {/if}
                </td>
                <td>{expense.descrizione}</td>
                <td>{expense.categoria}</td>

            </tr>
        {/each}
    </tbody>
</table>