<template>
  <div>
    <Player v-for="player in players" :player="player" :next="next"></Player>
  </div>
</template>
<script>
  import Player from './Player'
  import {range, nextInt, oneOf} from '../utils'
  export default {
    name: 'MainTable',
    components: {
      Player
    },
    beforeMount () {
      this.mahjongs = (() => {
        const mahjongs = []
        range(4 * 9 * 3, Array.prototype.push.bind(mahjongs))
        range(4 * 9 * 3, i => {
          const next = nextInt(108)
          const temp = mahjongs[i]
          mahjongs[i] = mahjongs[next]
          mahjongs[next] = temp
        })
        return mahjongs
      })()
      this.north = {
        cards: this.initPlayer(),
        isCurrent: false,
        position: 'north'
      }
      this.west = {
        cards: this.initPlayer(),
        isCurrent: false,
        position: 'west'
      }
      this.east = {
        cards: this.initPlayer(),
        isCurrent: false,
        position: 'east'
      }
      this.south = {
        cards: this.initPlayer(),
        isCurrent: false,
        position: 'south'
      }
      this.north.next = this.west
      this.west.next = this.south
      this.south.next = this.east
      this.east.next = this.north
      this.players = [this.north, this.west, this.east, this.south]
      oneOf(this.players).isCurrent = true
    },
    computed: {
    },
    data () {
      return {
        mahjongs: null,
        current: null,
        north: {},
        west: {},
        east: {},
        south: {},
        players: []
      }
    },
    methods: {
      putCard (card) {
        this.current.put(card)
      },
      next () {
        const next = this.mahjongs.pop()
        const value = Math.floor(next % 36 / 4) % 9
        const color = Math.floor(next / 36)
        return {color, value}
      },
      initPlayer () {
        const cards = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]
        range(13, () => {
          const next = this.next()
          cards[next.color][next.value] ++
        })
        return cards
      }
    }
  }
</script>
