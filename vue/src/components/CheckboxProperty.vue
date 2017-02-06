<template>
  <div>
    <el-form>
      <CommonProperty :element="element"/>
      <OptionsProperty :options="element.options"/>
    </el-form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CommonProperty from './CommonProperty'
import OptionsProperty from './OptionsProperty'
export default {
  name: 'numberProperty',
  components: {
    CommonProperty,
    OptionsProperty
  },
  computed: {
    ...mapGetters(['element'])
  },
  methods: {
    addOption () {
      this.element.options.push({
        label: '',
        value: ''
      })
    },
    removeOption (index) {
      this.element.options.splice(index, 1)
    }
  }
}
</script>
