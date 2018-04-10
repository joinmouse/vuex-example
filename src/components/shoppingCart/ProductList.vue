<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }} - {{ product.price }}
      <br>
      <button @click="addProductToCart">Add to Cart</button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    products: 'allProducts'
  }),
  methods: mapActions([
    'addProductToCart'
  ]),
  created() {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
