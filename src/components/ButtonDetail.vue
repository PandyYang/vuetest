<template>
  <div>
    <h1>创建简单得按钮</h1>
    <el-button>默认按钮</el-button>
    <h1>使用按钮的属性</h1>
    <el-button type="primary" size="mini">primary</el-button>
    <el-button type="info" size="small" circle>info</el-button>
    <el-button type="success" plain round loading>success</el-button>
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button icon="el-icon-arrow-right">下一页</el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: 'ButtonDetail'
}
</script>

<style scoped>

</style>
