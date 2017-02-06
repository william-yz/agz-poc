const input = {
  isRequired: false,
  label: 'Label',
  defaultValue: ''
},
number = {
  isRequired: false,
  label: 'Label',
  defaultValue: ''
},
checkbox = {
  label: 'Label',
  options: [{
    label: 'Option1',
    value: 'options1'
  }],
  defaultValue: ''
},
select = {

},
button = {

}

const metas = {
  input,
  number,
  checkbox,
  select,
  button
}

const reducer = (state = {
  metas
}, action) => {

  switch (action.type) {
    case 'UPDATE_PROPERTY':
      var newMetas = Object.assign({}, state.metas, action.payload)
      return Object.assign({}, state, {metas: newMetas});
    default: return state;
  }
};

export default reducer
