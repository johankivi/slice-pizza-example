<template>
    <main id="confirm">
        <header>
            <h1>Bekräfta order</h1>
        </header>
        <h1 class="big">Din order</h1>
        <section class="confirm">
            <article v-for="item in confirm.items" :key="item.id">
                <section>
                    <h1>{{ item.name }}</h1>
                    <p>{{ item.desc }}</p>
                </section>
                <section>
                    {{ item.price}}:-
                </section>
            </article>
            <article class="service">
                <section>
                    <h1>Serviceavgift</h1>
                </section>
                <section>
                    {{ confirm.service }}:-
                </section>
            </article>
            <article class="total">
                <section>
                    <h1>Total kostnad</h1>
                </section>
                <section>
                    {{ confirm.totalCost }}:-
                </section>
            </article>
        </section>
        <a href="#" class="btn" @click="sendOrder">Köp!</a>
    </main>
</template>

<script>
export default {
    name: 'confirm',
    methods: {
        async sendOrder(){

            let resp = await this.$http.post('http://localhost:3000/orders', this.$store.state.order);

            if(resp.status == 200){ 
                // sucess
                console.log(resp.data);
                this.$router.push('/track');
            } else {
                // failed
            }
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
@import '../scss/components';

#confirm {

    .btn {
        margin: 1rem;
        width: calc(100% - 2rem);
    }

    h1 {
        &.big {
        text-align: center;
        text-transform: uppercase;
        }
    }

    .confirm {
        border: 1px solid #eee;
        border-radius: 3px;
        margin: 1rem;

        article {
            display: flex;
            padding: 1rem;

            section {
                display: flex;
                flex: 1;
                flex-direction: column;
                justify-content: center;

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

                &:last-child {
                    align-items: flex-end;
                }
                
            }

            &.service {
                background: rgba(0, 0, 0, .05);
            }

            &.total {
                border-top: 1px dotted rgba(0, 0, 0, .4);
                background: rgba(0, 0, 0, .1);
            }
        
        }
    }
}



</style>
