<template>
  <div class="index">
    <E-header></E-header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
    <div></div>
  </div>
</template>

<script>
import Header from './header/header.vue'

export default {
  name: 'Index',
  components: {
    'E-header': Header
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.index
   .tab
     display: flex
     width: 100%
     height: 40px
     line-height: 40px
   .tab-item
     flex:1
     text-align:center
</style>
