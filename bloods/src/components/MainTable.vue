<template>
  <player :hands="hands" :putCard="putCard"></player>
</template>
<script>
  import Player from './Player'
  import Mahjong from 'src/model/Mahjong'
  import Hand from 'src/model/Hand'

  const mahjong = new Mahjong()
  const hand = new Hand(mahjong)
  export default {
    name: 'MainTable',
    components: {
      Player
    },
    data () {
      return {
        hands: hand.hands
      }
    },
    methods: {
      putCard: hand.put.bind(hand)
    }
  }
</script>
