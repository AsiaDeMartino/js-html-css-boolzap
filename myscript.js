const app = new Vue( 
    {
        el : '#container',
        data : {
            mostra: -1,
            ricercaUtente: '',
            rispostaDefault: 'Ok!',
            nuovoMessaggio: '',
            attivo : 0,
            immagineUtente : 'img/avatar-3.png',
            nomeUtente : 'Asia',
            contacts: [
                {
                name: 'Michele',
                avatar: 'img/avatar-1.png',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                    }
                ],
                },
                {
                name: 'Fabio',
                avatar: 'img/avatar-2.png',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                    }
                ],
                },
                {
                name: 'Samuele',
                avatar: 'img/avatar-5.png',
                visible: true,
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                    }
                ],
                },
                {
                name: 'Luisa',
                avatar: 'img/avatar-4.png',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                    }
                ],
                }
            ],  
        },

        methods: {
            contattoAttivo : function(j){
                this.attivo = j;
            },

            inviaMessaggio : function(j){
                (j.messages).push({
                    date: dayjs(),
                    text: this.nuovoMessaggio,
                    status: 'sent',
                });
                this.nuovoMessaggio = '';
                setTimeout( () => {
                    (j.messages).push({
                        
                        date: dayjs(),
                        text: this.rispostaDefault,
                        status: 'received',
                    });
                },1000);
            },

            formattaData : function(data) {
               return dayjs(data).format('HH:mm');
            },

            ricercaContatto : function(j) {
                if (((j.name).toLowerCase()).startsWith((this.ricercaUtente).toLowerCase())) {
                    return true;
                } else {
                    return false;
                }
            },

            dropdown : function(j) {
                this.mostra = j;
            },

            chiudi : function() {
                this.mostra = -1;
            },

            eliminaMessaggio : function(indice1, indice2){
                (indice1.messages).splice(indice2,1);
                this.mostra = -1;
            }

        }
    }
);

