import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: {
      pizzas: [],
      salads: [],
      beverages: []
    },
    order: [],
    confirmedOrder: {}
  },
  mutations: {
    setMenu(state, menu){
      state.menu = menu;
    },
    addItem(state, item){
      state.order.push(item);
    },
    setConfirmedOrder(state, order){
      state.confirmedOrder = order;
    }
  },
  actions: {
    async getMenu(ctx){
      let menu = await axios.get('http://localhost:3000/menu');

      let Arr = menu.data.menu;

      ctx.commit('setMenu', {
          pizzas: Arr.filter(item => item.type == 'pizza'),
          salads: Arr.filter(item => item.type == 'sallad'),
       beverages: Arr.filter(item => item.type == 'dryck')
      })

    }
  },
  getters: {
    confirm(ctx){
      
      let data = { items: [] };
      
      if(ctx.order.length){
        data = {
          items: ctx.order,
          service: 99,
          totalCost: ctx.order.map(a => a.price).reduce((a,b) => { return a + b }) + 99
        }
      }
      return data;
    }
  }
})
