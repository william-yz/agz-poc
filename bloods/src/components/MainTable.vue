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
      const me = this
      const __proto__ = {
        get () {
          const next = me.next()
          this.cards[next.color].splice(next.value, 1, this.cards[next.color][next.value] + 1)
          this.lastGet = next
        },
        check (card) {
          var canPeng = false
          var canGang = false
          var canHu = false
          range(3, color => {
            range(9, value => {
              if (card.color === color && card.value === value) {
                canPeng = this.cards[color][value] > 1
                canGang = this.cards[color][value] > 2
                return false
              }
            })
            return !canPeng
          })
          for (var i = 0; i < this.ting.length; i++) {
            if (card.color === this.ting[i].color && card.value === this.ting[i].value) {
              canHu = true
              break
            }
          }
          return {canPeng, canGang, canHu}
        },
        conside () {

        }
      }
      this.north = {
        __proto__,
        cards: this.initPlayer(),
        isCurrent: false,
        position: 'north',
        ting: []
      }
      this.west = {
        __proto__,
        cards: this.initPlayer(),
        isCurrent: false,
        position: 'west',
        ting: []
      }
      this.east = {
        __proto__,
        cards: this.initPlayer(),
        isCurrent: false,
        position: 'east',
        ting: []
      }
      this.south = {
        __proto__,
        cards: this.initPlayer(),
        isCurrent: false,
        position: 'south',
        ting: []
      }
      this.north.next = this.west
      this.west.next = this.south
      this.south.next = this.east
      this.east.next = this.north
      this.players = [this.north, this.west, this.east, this.south]
      this.current = oneOf(this.players)
      this.current.isCurrent = true
      this.current.get()
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
