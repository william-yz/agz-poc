<template>
  <div>
    <el-button @click="addText()">添加文本</el-button>
    <el-button @click="addNumber()">添加数字</el-button>
    <el-button @click="addCheckbox()">添加复选框</el-button>
    <el-button @click="addSelect()">添加下拉框</el-button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'elements',
  methods: {
    ...mapActions([
      'addText',
      'addNumber',
      'addCheckbox',
      'addSelect'
    ])
  }
}
</script>
