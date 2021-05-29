<template>
  <div>
    <h1>layout组件的使用</h1>
    <el-row>
      <el-col :span="8"><div style="border: 1px red solid; height: 5px"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div style="border: 1px pink solid;"></div></el-col>
      <el-col :span="8"><div style="border: 1px deeppink solid;"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style scoped>

</style>
