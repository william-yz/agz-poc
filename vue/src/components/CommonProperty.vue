<template>
  <div>
    <el-form-item label="标签">
      <el-input v-model="element.label"></el-input>
    </el-form-item>
    <el-form-item label="是否必填">
      <el-checkbox v-model="element.isRequired"></el-input>
    </el-form-item>
  </div>
</template>
<script>
export default {
  name: 'commonProperty',
  props: ['element']
}
</script>
