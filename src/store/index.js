import Vue from 'vue'
import Vuex from 'vuex'
import sentiment from '@/store/modules/sentiment'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    sentiment
  }
})
