<template>
  <div class="index">
    <E-header :seller="seller"></E-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link :to= "{path:'/goods'}" active-class="active">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to= "{path:'/ratings'}" active-class="active">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link :to= "{path:'/seller'}" active-class="active">商家</router-link>
      </div>
    </div>
   <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
import Header from './header/header.vue';

export default {
  name: 'Index',
  components: {
    'E-header': Header
  },
  data () {
    return {
      seller: {}
    };
  },
  methods: {
    sellerList() {
      axios.get('/api/seller').then((response) => {
        if (response.status === 200) {
          const requireData = response.data;
          this.seller = requireData.data;
          console.log(this.seller);
        }
      });
    }
  },
  created() {
    this.sellerList();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
 @import ".././common/stylus/mixin.styl";

.index
   .tab
     display: flex
     width: 100%
     height: 40px
     line-height: 40px
     border-1px(rgba(7,17,27,0.1))
   .tab-item
     flex:1
     text-align:center
     & > router-link
      display: block
      font-size: 14px
      color : rgb(77, 85, 93)
      .active
       color: red
</style>
