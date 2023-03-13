Descrizione
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

COME SVOLGO QUESTO ESERCIZIO:

- Vado sul sito di Vue.js 
- Vado su "QUICK START"
- Copio lo script tag "Using Vue from CDN" e lo incollo nel mio foglio index.html vicino allo script del main.js
- dentro il body, prima dei 2 script, inserisco questo specifico codice:
  <div id="app">
        <h1>{{ messaggio }}</h1>
  </div>

- Nel file main.js creo un'istanza di Vue.js e definisco il data object che contiene le proprietà che voglio utilizzare nel template HTML.
- Infine, utilizzo il metodo app.mount() per montare l'istanza Vue.js all'interno dell'elemento HTML con l'id "app".
