<template>
  <div>
    <span v-for="card in cards">
      <card :card="card" :onClick="putCard"></card>
    </span>
  </div>

</template>
<script>
  import Card from './Card'
  import _ from 'lodash'
  export default {
    name: 'player',
    props: ['hands', 'putCard'],
    components: {
      Card
    },
    computed: {
      cards () {
        const cards = []
        _.each(this.hands, (colors, color) => {
          _.each(colors, (v, value) => {
            for (var i = 0; i < v; i++) {
              cards.push({
                color,
                value
              })
            }
          })
        })
        return cards
      }
    }
  }
</script>
