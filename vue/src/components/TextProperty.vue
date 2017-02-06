<template>
  <div>
    <el-form>
      <CommonProperty :element="element"/>
      <el-form-item label="默认值">
        <el-input v-model="element.defaultValue"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CommonProperty from './CommonProperty'
export default {
  name: 'textProperty',
  components: {
    CommonProperty
  },
  computed: {
    ...mapGetters(['element'])
  }
}
</script>
