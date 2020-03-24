<template>
  <div id="app">
    <MenuBar />
    <div class="list">
       <ItemList v-for="(item,index) in 10" :key="index"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuBar from './components/MenuBar.vue';
import ItemList from './components/ItemList.vue';

@Component({
  components: {
    MenuBar,
    ItemList
  },
})
export default class App extends Vue {}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
i {
  font-style: normal;
}
#app {
  width: 100vw;
  height: 100vh;
  background: url('http://hbimg.b0.upaiyun.com/701177326ef9c47bad726820d22fa5d3b5d7c89a752fb-zpsm1z_fw658');
}
.list {
  width: 100vw;
  padding: 20px 200px 0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>
