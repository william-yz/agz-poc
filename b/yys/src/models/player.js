

export default {
  namespace: 'player',
  state: {
    normalChances: 1111,
    middleChances: 11111,
    advancedChances: 11111
  },
  reducers: {
    updateChances (state, {payload: {type, number}}) {
      return {...state, [type + 'Chances']: state[type + 'Chances'] + number}
    }
  }
}
