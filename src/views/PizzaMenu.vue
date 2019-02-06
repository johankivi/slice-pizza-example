<template>
<main id="menu">
    <header>
        <h1>Order</h1>
        <cart />
    </header>
    <section class="menu">
    <h2>Pizzor</h2>
    <menu-item v-for="item in menu.pizzas" :key="item.id" :item="item" />

    <h2>Sallader</h2>
    <menu-item v-for="item in menu.salads" :key="item.id" :item="item" />

    <h2>Drycker</h2> 
    <menu-item v-for="item in menu.beverages" :key="item.id" :item="item" />

    <a href="#" class="btn" @click="$router.push('/confirm')">Klar!</a>

    </section>

</main>
</template>

<script>

import menuItem from '@/components/menu-item';
import cart from '@/components/cart';

export default {
    name: 'menu',
    data(){
        return {

        }
    },
    methods: {
    
    },
    components: {
        menuItem,
        cart
    },
    computed: {
        menu(){
            return this.$store.state.menu;
        },
        order(){
            return this.$store.state.order;
        }
    },
    beforeMount(){
        // körs innan vi SER components
        this.$store.dispatch('getMenu');
    }
}
</script>

<style lang="scss">
@import '../scss/components';

#menu {
    
    .menu {
        padding: 1rem;

        h2 {
            font-size: 2rem;
            margin: .5rem 0;
        }
    }
}

.btn {
    margin-top: 3rem;
}

</style>
