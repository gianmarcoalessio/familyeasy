# Familyeasy app

## Database di test per provare la piattaforma

Per caricare i dati sul database usare il seguente script:

```bash
node dbtest
```

Dopo di che collegarsi con l'utente:

- Username: jaker
- Password: Pass1234

Per la ricerca di ulteriori utenti, si elencono gli username per facilitare il test dell'applicazione:

```bash
mikew, sully, randall, boo
```

## Specifiche

- FrontEnd: Sveltejs, tailwindcss, daisyUI
- BackEnd: Node.js, express, axios, jwt, mongodb, mongoose 

## Note 

- Il costo totale della spesa è calcolato dalle quote inserite (Aggiungispesa.svelte).
- Dentro la cartella prj (e.g. Table.svelte) sono elencate le componenti utilizzate per l'applicazione.
- Il rimborso implica che il costo totale sia zero e la quota del user loggato e calcolata in base alle quote(rimborso) degli utenti inseriti. La quota dell'user loggato in tal caso è considerata una spesa (dare) rivolta all'utente inserito (Search.svelte nella componente Spesa.svelte)
- I servizi si trovano dentro `src/lib/servizi.js` mentre le API rest dentro `srcbk/api.js`
- È presente una route verso una pagina di test utilizzata per i test.
- Gli schema del database sono definite dentro: `srcbk/db/categories.js`, `srcbk/db/expenses.js`,`srcbk/db/users.js` 
  