<template>
  <div :class="player.position" style="position:absolute;width: 600px;">
    <div>
      <span v-for="card in putted">
        <card :card="card" type="display"></card>
      </span>
    </div>
    <br />
    <div v-if="player.isCurrent">
      <el-button v-if="player.check.canPeng">
        Peng
      </el-button>
      <el-button v-if="player.check.canGang">
        Gang
      </el-button>
      <el-button v-if="player.check.canHu">
        Hu
      </el-button>
      <el-button>
        Pass
      </el-button>
    </div>
    <div>
      <span v-for="card in cards">
        <card :card="card" :onClick="put"></card>
      </span>
    </div>
  </div>

</template>
<script>
  import Card from './Card'
  import {judge} from '../model/judge'
  import {range} from '../utils'
  import _ from 'lodash'
  export default {
    name: 'Player',
    props: ['player', 'next'],
    components: {
      Card
    },
    data () {
      return {
        putted: [],
        ting: []
      }
    },
    computed: {
      cards () {
        const cards = []
        var hasReturn = !this.lastGet
        _.each(this.player.cards, (colors, color) => {
          _.each(colors, (v, value) => {
            if (!hasReturn && this.player.lastGet.color === color && this.player.lastGet.value === value) {
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
        this.player.lastGet && cards.push(this.player.lastGet)
        return cards
      }
    },
    methods: {
      put (card) {
        if (this.player.isCurrent) {
          this.player.isCurrent = false
          var cards = this.player.cards
          cards[card.color].splice(card.value, 1, cards[card.color][card.value] - 1)
          this.putted.push(card)
          this.player.lastGet = null
          var next = this.player.next
          var check
          range(3, () => {
            check = next.check(card)
            next.check = check
            next.ting = judge(this.player.cards)
            if (check.canPeng || check.canGang || check.canHu) {
              next.isCurrent = true
              next.conside()
            }
            next = next.next
          })
        }
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
