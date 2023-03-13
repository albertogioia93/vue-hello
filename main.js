'use strict';

const app = Vue.createApp({
    data() {
        return {
            messaggio: 'Concerto di Mezzosangue al Teatro della Concordia di Venaria Reale (Torino) il 28 aprile 2023',
            imageUrl: 'img/mezzosangueimg.jpg',
            // non ho usato un numero ma una stringa contenente un numero (500) e una parola (px). sul browser funziona, l'img viene ridimensionata
            imageWidth: '500px',
            imageHeight: 'auto'  
        }
    }
});

app.mount('#app');
