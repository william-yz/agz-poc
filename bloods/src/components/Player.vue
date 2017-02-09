<template>
  <div :class="player.position" style="position:absolute;width: 600px;">
    <div>
      <span v-for="card in putted">
        <card :card="card" type="display"></card>
      </span>
    </div>
    <br />
    <div>
      <span v-for="card in cards">
        <card :card="card" :onClick="put"></card>
      </span>
    </div>
  </div>

</template>
<script>
  import Card from './Card'
  import _ from 'lodash'
  export default {
    name: 'Player',
    props: ['player', 'next'],
    components: {
      Card
    },
    data () {
      return {
        lastGet: null,
        putted: []
      }
    },
    computed: {
      cards () {
        const cards = []
        var hasReturn = !this.lastGet
        _.each(this.player.cards, (colors, color) => {
          _.each(colors, (v, value) => {
            if (!hasReturn && this.lastGet.color === color && this.lastGet.value === value) {
              hasReturn = true
              return
            }
            for (var i = 0; i < v; i++) {
              cards.push({
                color,
                value
              })
            }
          })
        })
        this.lastGet && cards.push(this.lastGet)
        return cards
      }
    },
    methods: {
      get () {
        const next = this.next()
        this.hands[next.color][next.value] ++
        this.lastGet = next
      },
      put (card) {
        var cards = this.player.cards
        cards[card.color].splice(card.value, 1, cards[card.color][card.value] - 1)
        this.putted.push(card)
        this.lastGet = null
        // this.ting = judge(cards)
        // var next = this.next
        // var check
        // range(3, () => {
        //   check = next.check(card)
        //   if (check.canPeng || check.canGang || check.canHu) {
        //     return false
        //   }
        //   next = next.next
        // })
        // return {next, ...check}
      }
    }
  }
</script>
<style >
  .north {
    transform: rotateZ(180deg);
    left: 35%
  }
  .west {
    transform: rotateZ(90deg);
    top: 40%
  }
  .east {
    transform: rotateZ(270deg);
    top: 40%;
    left: 75%;
  }
  .south {
    top: 80%;
    left: 35%
  }
</style>
