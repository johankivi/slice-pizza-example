<template>
    <main id="tracking">
        <header>
            <h1>Spåra order</h1>
        </header>
        <section class="tracking">
            <img src="../assets/drone.svg" alt="Out for delivery">
            <ul class="states">
                <li :class="{ active : order.state == 'pending' }">Förbereds</li>
                <li :class="{ active : order.state == 'baking' }">Bakas</li>
                <li :class="{ active : order.state == 'out for delivery' }">Ute för leverans</li>
                <li :class="{ active : order.state == 'delivered' }">Levererad</li>
            </ul>
        </section>
    </main>
</template>

<script>
// Init + settings i main.js
import firebase from 'firebase';

let db = firebase.firestore();

export default {
    name: 'tracking',
    data(){
        return {
            order: {}
        }
    },
    beforeMount(){

        let orderId = this.$store.state.confirmedOrder.id;
        
        if(orderId){

            db.collection('orders').doc(orderId).onSnapshot( snap => {
                this.order = snap.data() 
            });

        } else {
            console.log('Hittar inte ordern.');
        }
    }
}
</script>

<style lang="scss">
@import '../scss/components';

#tracking {

    .tracking {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            margin: 4rem 2rem;    
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;

            li {
                padding: .5rem 0;
                font-size: 1.1rem;
                color: rgba(0, 0, 0, .6);
                text-align: center;

                &.active {
                    font-weight: 700;
                    font-size: 1.6rem;
                    color: rgba(0, 0, 0, 1);
                }
            
            }
        }

    }
}

</style>
