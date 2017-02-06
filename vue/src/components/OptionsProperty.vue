<template>
  <el-form-item label="选项">
    <el-button size="mini" style="width: 20px;" @click="addOption()">+</el-button>
    <br />
    <el-row :gutter="10" v-for="(option, index) in options">
      <el-col :span="5">
        <el-input placeholder="标签" v-model="option.label"/>
      </el-col>
      <el-col :span="5">
        <el-input placeholder="值" v-model="option.value"/>
      </el-col>
      <el-col :span="5">
        <el-button size="mini" style="width: 20px;" @click="removeOption(index)">-</el-button>
      </el-col>
    </el-row>
  </el-form-item>
</template>
<script>
export default {
  name: 'numberProperty',
  props: ['options'],
  methods: {
    addOption () {
      this.options.push({
        label: '',
        value: ''
      })
    },
    removeOption (index) {
      this.options.splice(index, 1)
    }
  }
}
</script>
