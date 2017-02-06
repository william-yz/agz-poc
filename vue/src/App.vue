<template>
  <el-row :gutter="10">
    <el-col :span="6">
      <Elements />
    </el-col>
    <el-col :span="12">
      <MainCanvas />
    </el-col>
    <el-col :span="6">
      <Properties />
    </el-col>
  </el-row>
</template>
<script>
import Elements from 'components/Elements'
import MainCanvas from 'components/MainCanvas'
import Properties from 'components/Properties'
export default {
  name: 'app',
  components: {
    Elements,
    MainCanvas,
    Properties
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
