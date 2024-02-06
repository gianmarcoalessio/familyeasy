# Familyeasy App

In rifenrimento al documento di esame "[Progetto di Programmazione Web](https://docs.google.com/document/d/1KbCtTKKtEkzpXYBExV0OU1v7W09rpzOCk7XPn9sSem0/edit#heading=h.ccj6mdt2qp5)" (A.A. 2023/2024), si presenta l'applicazione Familyeasy, una piattaforma per la gestione delle spese familiari.

## Provare la Piattaforma

Scaricare docker ed eseguire il comando:

```bash
docker-compose up --build
```

Successivamente, è possibile accedere con l'utente:

- Username: jaker
- Password: Pass1234

Per facilitare il test dell'applicazione, si fornisce una lista di username aggiuntivi:

```bash
mikew, sully, randall, boo
```

## Specifiche Tecniche

- **FrontEnd:** SvelteJS, TailwindCSS, DaisyUI
- **BackEnd:** Node.js, Express, Axios, JWT, MongoDB, Mongoose

## Note Importanti

- Il costo totale della spesa viene calcolato sommando le quote inserite (componente `Aggiungispesa.svelte`).
- Le componenti utilizzate nell'applicazione sono elencate nella cartella `prj` (ad esempio, `Table.svelte`).
- Il rimborso implica un costo totale pari a zero, con la quota dell'utente loggato calcolata in base alle quote degli altri utenti inseriti. In questo caso, la quota dell'utente loggato è considerata una spesa ("dare") rivolta agli utenti inseriti (componente `Search.svelte` nella `Spesa.svelte`).
- I servizi sono localizzati nel file `src/lib/servizi.js`, mentre le API REST si trovano in `srcbk/api.js`.
- È stata implementata una route verso una pagina di test utilizzata per i test.
- Gli schemi del database sono definiti nei file: `srcbk/db/categories.js`, `srcbk/db/expenses.js`, `srcbk/db/users.js`.
