'use strict';

const app = Vue.createApp({
    data() {
      return {
        messaggio: 'Questo è il messaggio che voglio visualizzare nel browser'
      }
    }
});
  
app.mount('#app');
  