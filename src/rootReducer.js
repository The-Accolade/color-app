const ADD_COLOR = 'ADD_COLOR';
const INPUT_VALUE = 'INPUT_VALUE';
const INPUT_NAME = 'INPUT_NAME';

export function addColor(name, value){
    return {
      type: ADD_COLOR,
      name,
      value
    }
  };

export function inputChange(payload){
    return {
      type: INPUT_VALUE,
      payload
    }
  };

export function inputName(payload){
    return {
      type: INPUT_NAME,
      payload
    }
  };

const initialState = {
    newValue: "",
    newName: "",
    colors: [
      {id: 1, name: 'Red', value:"Red"}, 
      {id: 2, name: 'Green', value: "Green"}, 
      {id: 3, name: 'Blue', value:"Blue"},
    ]
  }

function rootReducer(state=initialState, action){
    switch(action.type){
      case ADD_COLOR:
        const id = Math.floor(Math.random()*100)
        const newColor = {id, name: action.name, value: action.value};
        return {
          ...state,
          colors:  [newColor, ...state.colors] 
        }
      case INPUT_VALUE:
        return {
          ...state,
          newValue: action.payload
        }
        case INPUT_NAME:
        return {
          ...state,
          newName: action.payload
        }
        default: 
          return state
    }
  }

export default rootReducer;