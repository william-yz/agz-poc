

export default {
  namespace: 'card',
  state: {
    cards: []
  },
  reducers: {
    add (state, { payload: { card } }) {
      return {...state, cards: [...state.cards, card]}
    }
  }
}
