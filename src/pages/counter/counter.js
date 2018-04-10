import Vue from 'vue'

import Counter from '@/components/Counter.vue'
import store from '../../store/counter.js'

new Vue({
  el: '#app',
  store,
  template: '<Counter />',
  components: { Counter }
})
