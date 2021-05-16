<template>
  <div id="app">
    <button @click="handleToggle">toggle</button>
    <CActionSheet v-model="show" :menus="menus" show-cancel>
      <div slot="header">我是头</div>
    </CActionSheet>

    <br />
    <!-- <HelloJSX msg="Welcome to Your Vue.js App"></HelloJSX> -->
  </div>
</template>

<script>
import CActionSheet from './components/ActionSheet'

import HelloJSX from './examples/HelloJSX'

export default {
  name: 'App',
  components: {
    CActionSheet,
    HelloJSX
  },
  data () {
    return {
      menus: [
        {name: '这个是menu', id: '1'},
        {name: '这个是menu', id: '2'},
        {name: '这个是menu', id: '3'},
        {name: '这个是menu', id: '4', subText: '含有描述信息'},
        '这个是字符串'
      ],
      show: false
    }
  },
  methods: {
    handleClickMenuItem () {},
    handleToggle () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="less">
@import url('./components/style/var');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: @font-size-md;
}

.c-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: @mask-z-index;
  background: @mask-background-color;
}
</style>
