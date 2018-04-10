<template>
  <div id="app">
    <h2> Clicked : {{$store.state.count}} times, count is {{evenOrOdd}}</h2>
    <button @click="increment"> + </button>
    <button @click="decrement"> — </button>
    <button @click="incrementIfOdd"> Increment if Odd</button>
    <button @click="incrementAsync"> Increment async</button>
  </div>
</template>

<script>
//  辅助函数mapGetters ＝> 将store.getter映射到局部计算属性
//  辅助函数mapMutations => 将组件中的methods映射为store.commit调用
//  辅助函数mapActions => 将组件的methods映射为store.dispatch调用
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#app > button {
  display: inline-block;
  width: 200px;
  height: 50px;
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  font-size: 20px;
  line-height: 20px;
  box-sizing: border-box;
}
</style>
