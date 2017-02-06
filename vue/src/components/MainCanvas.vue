<template>
  <div>
    <el-form>
      <div v-for="(e, index) in elements" @click="edit(e, index)" v-bind:class="{isSelected: isSelected(index)}">
        <el-form-item :label="e.label" :required="e.isRequired">
          <el-input v-model="e.defaultValue"  v-if="e.type === 'text'" />
          <el-input-number v-model="e.defaultValue"  v-if="e.type === 'number'" />
          <el-checkbox-group v-if="e.type === 'checkbox'">
            <el-checkbox :label="option.value" v-for="option in e.options" :checked="option.checked">{{option.label}}</el-checkbox>
          </el-checkbox-group>
          <el-select v-model="e.defaultValue" placeholder="请选择" v-if="e.type === 'select'">
            <el-option
              v-for="option in e.options"
              :label="option.label"
              :value="option.value">
            </el-option>
          </el-select>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'mainCanvas',
  computed: {
    ...mapState(['elements', 'underEdit'])
  },
  methods: {
    edit (e, index) {
      this.$store.dispatch('setEdit', index)
      this.$router.push(e.type + 'Property')
    },
    isSelected (index) {
      return this.underEdit === index
    }
  }
}
</script>
<style>
  .isSelected {
    background: rgba(0, 0, 0,.04);
  }
</style>
