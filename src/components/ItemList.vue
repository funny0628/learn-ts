<template>
  <div class="item">
    <div class="top">
      <span class="title">伊朗导弹袭击美军基地</span>
      <span>
        <i class="iconfont icon-bianji edit"></i>
        <i class="iconfont icon-shanchu"></i>
      </span>
    </div>
    <div class="femlei">
      <span>2020-01-20 21:32</span>
      <span class="live">分类: <i>生活</i></span>
    </div>
    <div class="content">
      没有文化就是相当的牛,没有办法
      没有文化就是相当的牛,没有办法
      没有文化就是相当的牛,没有办法
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Itemlist extends Vue {}
</script>

<style lang="less">
.item {
  width: 300px;
  height: 350px;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 20px;
  .top {
    display: flex;
    justify-content: space-between;
    .title {
    color: #646767;
      display: block;
      font-size: 14px;
      line-height: 30px;
      border-bottom: 1px solid #ccc;
    }
    i {
      font-size: 18px;
      &.edit {
        margin-right: 20px;
      }
    }
  }
  .femlei {
      margin-top: 5px;
      font-size: 12px;
      color: #a4a2a6;
      .live {
          color: #c3c0ca;
      }
  }
  .content {
      color: #646767;
      margin-top: 10px;
      overflow: hidden;
  }
}
</style>
