import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    elements: [],
    underEdit: -1
  },
  mutations: {
    add (state, payload) {
      state.elements.push(payload)
    },
    setEdit (state, payload) {
      state.underEdit = payload
    },
    setElements (state, payload) {
      state.elements = payload
    }
  },
  getters: {
    element: state => {
      const index = state.underEdit
      if (index > -1) {
        return state.elements[state.underEdit]
      } else {
        return {}
      }
    }
  },
  actions: {
    addText ({commit}) {
      commit('add', {
        type: 'text',
        label: 'Label',
        defaultValue: '',
        isRequired: false
      })
    },
    addNumber ({commit}) {
      commit('add', {
        type: 'number',
        label: 'Label',
        defaultValue: '',
        isRequired: false
      })
    },
    addCheckbox ({commit}) {
      commit('add', {
        type: 'checkbox',
        label: 'Label',
        defaultValue: '',
        isRequired: false,
        options: []
      })
    },
    addSelect ({commit}) {
      commit('add', {
        type: 'select',
        label: 'Label',
        defaultValue: '',
        isRequired: false,
        options: []
      })
    },
    setEdit ({commit}, payload) {
      commit('setEdit', payload)
    },
    setElements ({commit}, elements) {
      commit('setElements', elements)
    }
  }
})
