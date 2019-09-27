<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div v-if="seller.supports" class="support" @click="showDetail">
          <span :class="[classMap[0]]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
        <div v-if="seller.supports" class="support-count">
          <span class="count">{{seller.supports.length}}</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" />
    </div>
    <div v-show="detailShow" class="detail"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      classMap: [
        'decrease icon',
        'discount icon',
        'special icon',
        'invoice icon',
        'guarantee icon'
        ],
      detailShow: false
    };
  },
  methods: {
    showDetail() {
      this.detailShow = !this.detailShow;
    }
  },
  created() {}
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin';

.header {
  position: relative
  overflow: hidden
  color: #fff;
  background: rgba(7,17,27,0.5)
  .content-wrapper {
    position : relative
    padding: 24px 12px 18px 24px;
    font-size: 0;

    .avatar {
      display: inline-block;
      vertical-align: top;

      img {
        border-radius: 2px;
      }
    }

    .content {
      display: inline-block;
      margin-left: 16px;
      font-size: 14px;
      .title {
        margin: 2px 0 8px 0;

        .brand {
          display: inline-block;
          vertical-align: top;
          width: 30px;
          height: 18px;
          bg-image('brand');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }

        .name {
          margin-left: 6px;
          font-size: 16px;
        }

        line-height: 18px;
        font-weight: bold;
      }
      .description {
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;
      }
      .support {
        .icon {
          display: inline-block;
          vertical-align: top;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.decrease {
            bg-image('decrease_1');
          }
          &.discount {
            bg-image('discount_1');
          }
          &.guarantee {
            bg-image('guarantee_1');
          }
          &.invoice {
            bg-image('invoice_1');
          }
          &.special {
            bg-image('special_1');
          }
        }
        .text {
          font-size: 12px;
          line-height: 12px;
        }
      }
      .support-count{
         position: absolute
         right: 12px
         bottom: 18px
         padding: 0 8px
         height: 24px
         line-height: 24px
         border-radius: 14px
         background: rgba(0,0,0,0.2)
         .count {
           vertical-align:top
           font-size: 15px
           margin-left: 2px
         }
        .icon-keyboard_arrow_right {
           line-height: 24px
           font-size: 15px
         }
       }
     }
   }

  .bulletin-wrapper{
     position relative
     height: 28px
     line-height: 28px
     padding: 0 22px 0 12px
     white-space : nowrap
     overflow: hidden
     text-overflow: ellipsis
     background: rgba(7,17,27,0.2)
     .bulletin-title{
       display: inline-block
       vertical-align: center
       width: 22px
       height: 12px
       bg-image('bulletin')
       background-size: 22px 12px
       background-repeat: no-repeat
       }
     .bulletin-text{
        vertical-align: top
        font-size : 11px
        margin: 0 4px
       }
     .icon-keyboard_arrow_right{
       position: absolute
       font-size: 10px
       right 12px
       top: 10px
       }
   }
  .background{
    img{
     position: absolute
     top: 0
     left: 0
     width: 100%
     height: 100%
     z-index: -1
     filter:blur(10px)
    }
  }
  .detail{
   position: fixed
   z-index: 100
   top: 0
   left: 0
   width: 100%
   height: 100%
   overflow: hidden
   background:rgba(7,17,27,0.8)
  }
}
</style>
