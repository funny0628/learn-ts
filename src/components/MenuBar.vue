<template>
  <div class="menubar">
    <img src="../assets/logo.png" alt="" />
    <ul>
      <li>新建</li>
      <li>
        ^
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </li>
      <li class="liall">全部 <span>99</span></li>
      <li>
        ^
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class MenuBar extends Vue {}
</script>

<style lang="less">
.menubar {
  width: 100vw;
  height: 100px;
  background-color: #ccc;
  padding: 0 200px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  img {
    height: 100%;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    li {
      margin-right: 20px;
      position: relative;
      cursor: pointer;
      span {
        background-color: #787678;
        padding: 0 3px;
        border-radius: 5px;
        margin-left: 10px;
      }
      &.liall {
        margin-left: 20px;
      }
      ul {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 20px;
          display: none;
      }
    }
  }
}
</style>
