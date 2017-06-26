import { combineReducers } from 'redux';
import ActionTypes from '../constants';


const initial = {
  attributes: [
    'Lat', 'Lng', 'Heading', 'Speed', 'simTD_ObjectDetection_Detected',
    'simTD_ObjectDetection_RelativeSpeed', 'simTD_ObjectDetection_Distance',
    'pedalForce', 'brakeActuation'],
  colors: ['Blue', 'Green', 'Yellow', 'Black', 'Orange', 'Red', 'Grey'],
  graphs: ['Line', 'Bar', 'Spline', 'Areaspline', 'Column', 'Scatter'],
};

const initialSelected = [
  {
    name: 'Lat',
    graph: 'Line',
    color: 'Blue',
    selected: false,
  },
  {
    name: 'Lng',
    graph: 'Line',
    color: 'Blue',
    selected: false,
  },
  {
    name: 'Heading',
    graph: 'Line',
    color: 'Blue',
    selected: false,
  },
  {
    name: 'Speed',
    graph: 'Line',
    color: 'Blue',
    selected: true,
  },
  {
    name: 'simTD_ObjectDetection_Detected',
    graph: 'Line',
    color: 'Blue',
    selected: false,
  },
  {
    name: 'simTD_ObjectDetection_RelativeSpeed',
    graph: 'Line',
    color: 'Blue',
    selected: false,
  },
  {
    name: 'simTD_ObjectDetection_Distance',
    graph: 'Line',
    color: 'Blue',
    selected: false,
  },
  {
    name: 'pedalForce',
    graph: 'Line',
    color: 'Blue',
    selected: false,
  },
  {
    name: 'brakeActuation',
    graph: 'Line',
    color: 'Blue',
    selected: false,
  },
]

function general(
  state = { ...initial } , action = {}) {
    switch(action.type) {
      default:
        return state
    }
}

function selected(
  state = { ...initialSelected } , action = {}) {
    switch(action.type) {
      case ActionTypes.UnselectAttribute:
      case ActionTypes.SelectAttribute:
        return {
          ...state,
          ...Object.keys(initialSelected).map(a => {
            if(initialSelected[a].name === action.payload.attribute){
              return { ...state[a], selected: action.payload.value}
            } else {
              return state[a]
            }
          })
        }
      case ActionTypes.SelectGraph:
        return {
          ...state,
          ...Object.keys(initialSelected).map(a => {
            if(initialSelected[a].name === action.payload.attribute){
              return { ...state[a], graph: action.payload.value}
            } else {
              return state[a]
            }
          })
        }
      case ActionTypes.SelectColor:
      return {
        ...state,
        ...Object.keys(initialSelected).map(a => {
          if(initialSelected[a].name === action.payload.attribute){
            return { ...state[a], color: action.payload.value}
          } else {
            return state[a]
          }
        })
      }
      case ActionTypes.OpenModal: {

        if(Object.keys(action.payload.graphdata).map(a => Number(a)).includes(action.payload.car)) {
            console.log(...action.payload.graphdata[action.payload.car]);
            return {...action.payload.graphdata[action.payload.car].settings}
          } else {
            return state
          }
      }
      case ActionTypes.CloseModal: {
        return { ...initialSelected }
      }
      default:
        return state
    }
}

const form = combineReducers({
  general,
  selected,
});

export default form;
