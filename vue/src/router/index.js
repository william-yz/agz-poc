import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import TextProperty from 'components/TextProperty'
import NumberProperty from 'components/NumberProperty'
import CheckboxProperty from 'components/CheckboxProperty'
import SelectProperty from 'components/SelectProperty'

export default new Router({
  routes: [
    {
      path: '/textProperty',
      name: 'textProperty',
      component: TextProperty
    },
    {
      path: '/numberProperty',
      name: 'numberProperty',
      component: NumberProperty
    },
    {
      path: '/checkboxProperty',
      name: 'checkboxProperty',
      component: CheckboxProperty
    },
    {
      path: '/selectProperty',
      name: 'selectProperty',
      component: SelectProperty
    }
  ]
})
