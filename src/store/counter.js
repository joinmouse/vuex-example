import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object
const state = {
  count: 0
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins

/*
*  更改Vuex的store中的状态的唯一方法是提交mutation
*  每个 mutation 都有一个字符串的事件类型(type)和一个回调函数 (handler)
*  这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
*
*  你不能直接调用一个mutation handler。
*  这个选项更像是事件注册: 当触发一个类型为increment的mutation时，调用此函数
*  需要以相应的type调用store.commit方法,如: store.commit('increment')
*/
const mutations = {
  increment (state) {
    state.count ++
  },
  decrement (state) {
    state.count --
  }
}


// actions are functions that cause side effects and can involve
// asynchronous operations.

/*
* Action 接受一个和store实例具有相同方法和属性的对象
* Action 通过store.dispatch方法触发 `store.dispatch('increment')`
*/
const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),

  incrementIfOdd ({commit,state}) {
    if((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({commit,state}) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      },1000)
    })
  }
}


//getters are functions
//可以理解为store的计算属性，接受state作为其第一个参数
//暴露store.getters对象
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
