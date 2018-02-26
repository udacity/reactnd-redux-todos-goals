import {
  ADD_GOAL,
  REMOVE_GOAL
} from '../actions/goals'

import {
  RECEIVE_DATA
} from '../actions/shared'

export default function goals (state = [], action) {
  switch(action.type) {
    case ADD_GOAL :
      return state.concat([action.goal])
    case REMOVE_GOAL :
      return state.filter((goal) => goal.id !== action.id)
    case RECEIVE_DATA :
      return action.goals
    default :
      return state
  }
}