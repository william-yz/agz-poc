<template>
  <div>
    <el-form>
      <CommonProperty :element="element"/>
      <OptionsProperty :options="element.options"/>
      <el-form-item label="默认值">
        <el-input v-model="element.defaultValue"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CommonProperty from './CommonProperty'
import OptionsProperty from './OptionsProperty'
export default {
  name: 'selectProperty',
  components: {
    CommonProperty,
    OptionsProperty
  },
  computed: {
    ...mapGetters(['element'])
  }
}
</script>
