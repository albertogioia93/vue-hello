'use strict';

const app = Vue.createApp({
    data() {
        return {
            messaggio: 'Concerto di Mezzosangue al Teatro della Concordia di Venaria Reale (Torino) il 28 aprile 2023',
            imageUrl: 'img/mezzosangueimg.jpg',
            imageWidth: '500px',
            imageHeight: 'auto',
            
        }
    }
});

app.mount('#app');
