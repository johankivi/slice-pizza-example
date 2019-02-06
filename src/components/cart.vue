<template>
    <aside id="cart">
        <img src="../assets/cart.svg" alt="Cart">
        <transition name="flash">
            <div class="badge">{{confirm.items.length}}</div>
        </transition>
        <section class="list-view">

        </section>
    </aside>
</template>

<script>
export default {
    name: 'cart',
    computed: {
        confirm(){
            return this.$store.getters.confirm;
        }
    }
}
</script>

<style lang="scss">
#cart {
    position: absolute;
    right: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;

    img {
        height: 100%;
    }

    .badge {
        width: 1rem;
        height: 1rem;
        padding: .25rem;
        background: rgb(216, 62, 62);
        top: -.75rem;
        right: -.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 99rem;
        position: absolute;
        z-index: 999;
        font-weight: 600;
        color: white;
        font-size: .8rem;
        transform: scale(1);
    }
} 

.flash-enter-active, .flash-leave-active {
        transition: all .3s ease;
    }

.flash-enter, .flash-leave-to {
    background: rgb(148, 46, 46); 
    transform: scale(1.2);
}

</style>
