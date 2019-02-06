<template>
    <article class="menu-item">
        <section>
            <h1>{{ item.name }}</h1>
            <p>{{ item.desc }}</p>
        </section>
        <section>
            {{ item.price}}:-
        </section>
        <section>
            <img src="../assets/add-icon.svg" alt="add item" @click="addItem(item)">
        </section>
    </article>
</template>

<script>
export default {
    name: 'menu-item',
    props: ['item'],
    methods: {
        addItem(item){
            this.$store.commit('addItem', item);
        }
    }
}
</script>

<style lang="scss">

.menu-item {
    display: flex;
    border: 1px solid #eee;
    border-radius: 3px;
    padding: .5rem;
    margin-bottom: .125rem;

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;

        &:first-child {
            flex: 3;
    
            h1 {
                font-size: 1rem;
                text-transform: uppercase;
                margin: 0;
            }

            p {
                padding: 0;
                margin: 0;
                color: rgba(0, 0, 0, .8);
                font-size: .8rem;
            }
        }

        img:active {
            animation: flash .3s;
        }
    }
}

        @keyframes flash {
            from { transform: scale(1.0) rotateZ(0deg);  }
              to { transform: scale(1.2) rotateZ(90deg); }
        }

</style>
