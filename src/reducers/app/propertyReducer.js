const input = {
  isRequired: false,
  label: '1234'
},
number = {

},
checkbox = {

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
      return Object.assign({}, state, {metas: action.payload});
    default: return state;
  }
};

export default reducer
