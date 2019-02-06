<template>
    <aside id="cart" @click="showCart = !showCart">
        <img src="../assets/cart.svg" alt="Cart">
        <transition name="flash">
            <div class="badge">{{confirm.items.length}}</div>
        </transition>
        <transition name="fade">
        <section class="list-view" v-if="showCart">
            <ul>
                <li v-for="(item, index) in confirm.items" :key="index"><span>{{item.name}}</span><span>{{item.price}}</span></li>
                <li class="service"><span>Service</span><span>{{confirm.service}}</span></li>
                <li class="total"><span>Total</span><span>{{confirm.totalCost}}</span></li>
            </ul>
        </section>
        </transition>
    </aside>
</template>

<script>
export default {
    name: 'cart',
    data(){
        return {
            showCart: false
        }
    },
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

    .list-view {
        width: 70vw;
        position: absolute;
        background: #222;
        color: rgba(255,255,255,.8);
        border-radius: 3px;
        transform: translate3d(-62vw,.25rem,0);
        box-shadow: .5rem .5rem 2rem rgba(0, 0, 0, .4);

        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 94%;
            width: 0;
            height: 0;
            border: 0.425em solid transparent;
            border-bottom-color: #222;
            border-top: 0;
            margin-left: -0.625em;
            margin-top: -0.425em;
        }

        ul {
            margin: 0;
            padding: 1rem;
            list-style: none;

            li {
                padding: .5rem;
                display: flex;

                span {
                    flex: 1;

                    &:last-child {
                        text-align: right;
                    }
                }
                &.service {
                    border-top: 1px dotted rgba(255,255,255,.4);
                    font-style: italic;
                    color: rgba(255,255,255,1);
                }

                &.total {
                    border-top: 2px solid rgba(255,255,255,.8);
                    font-weight: 700;
                    color: white;
                }

            }
        }
    }
} 

.flash-enter-active, .flash-leave-active {
        transition: all .3s ease;
    }

.flash-enter, .flash-leave-to {
    background: rgb(148, 46, 46); 
    transform: scale(1.2);
}

.fade-enter-active, .fade-leave-active {
        transition: all .2s ease;
    }

.fade-enter, .fade-leave-to {
   opacity: 0;
}


</style>
