import React from 'react'
import Battle from '../models/Battle'
import Team from '../models/BaseTeam'

import JiuTunTongZi from '../models/cards/SSR/JiuTunTongZi'
import Skill from '../models/skills/JiuTunTongzi'

export default class BattleC extends React.Component {
  constructor(args) {
    super(...args)
    const card = new JiuTunTongZi()
    const skill = new Skill()
    card.skill = skill
    const team = new Team()
    team.add(card)
    const target = new Team()
    target.add(card)
    const battle = new Battle(team, target)

    this.state = {
      team: battle.team.cards,
      target: []
    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        {this.state.team.map((t) => {
          return (
            <div key={t.id}>
              <div>
                {t.id} {t.name}
              </div>
              <div>
                <button>{t.skills[0]}</button>
                <button>{t.skills[1]}</button>
                <button>{t.skills[2]}</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
