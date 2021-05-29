<template>
  <div id="app">
<!--    <a href="#/button">点我显示button</a>-->
<!--    <br>-->
<!--    <br>s-->
<!--    <a href="#/buttonDetail">按钮组件的详细使用</a>-->
<!--    <br>-->
<!--    <br>-->
<!--    <a href="#/link">文字链接的使用</a>-->
<!--    <br>-->
<!--    <br>-->
<!--    <a href="#/tree">树形控件</a>-->
<!--    <br>-->
<!--    <br>-->
<!--    <a href="#/layout">布局组件的使用</a>-->
<!--    <br>-->
<!--    <br>-->
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="/index">主页</el-menu-item>
          <el-menu-item index="/userList">用户管理</el-menu-item>
          <el-menu-item index="/message">消息中心</el-menu-item>
          <el-menu-item index="/order">订单管理</el-menu-item>
        </el-menu>
        <div class="line"></div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/index'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push(key)
    }
  }
}
</script>

<style>
</style>
