<template>
  <el-button
    v-bind:class="{ card: type!=='display' }"
    style="margin-right:2px;"
    @click="onClick(card)"
    :type="getColor(card.color)">
    {{card.value + 1}}
  </el-button>
</template>
<script>
  export default {
    name: 'card',
    props: ['card', 'onClick', 'type'],
    methods: {
      getColor (color) {
        return {
          '0': 'success',
          '1': 'primary',
          '2': 'danger'
        }[color]
      }
    }
  }
</script>
<style>
  .card:hover {
    top: -5px;
    position: relative;
  }
</style>
