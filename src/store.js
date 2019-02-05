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
    order: []
  },
  mutations: {
    setMenu(state, menu){
      state.menu = menu;
    },
    addItem(state, item){
      state.order.push(item);
    }
  },
  actions: {
    async getMenu(ctx){
      let menu = await axios.get('http://localhost:3001/menu');

      let Arr = menu.data.menu;

      ctx.commit('setMenu', {
          pizzas: Arr.filter(item => item.type == 'pizza'),
          salads: Arr.filter(item => item.type == 'sallad'),
       beverages: Arr.filter(item => item.type == 'dryck')
      })

    }
  }
})
