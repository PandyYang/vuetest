<template>
  <div id="app">
    <a href="#/button">点我显示button</a>
    <a href="#/buttonDetail">按钮组件的详细使用</a>
    <a href="#/link">文字链接的使用</a>
    <a href="#/tree">树形控件</a>
    <br>
    <br>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
