<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in images" :key="item">
        <el-image
          :src="item"
          fit="fill"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import homeImage1 from '../assets/indexImages/1.png'
import homeImage2 from '../assets/indexImages/2.jpg'
import homeImage3 from '../assets/indexImages/3.jpg'
import homeImage4 from '../assets/indexImages/4.jpg'

export default {
  name: 'Index',
  data () {
    return {
      images: [homeImage1, homeImage2, homeImage3, homeImage4]
    }
  }
}
</script>

<style scoped>

</style>
