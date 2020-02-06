import { createReducer } from '@frontend/utils/reducer'
import * as actions from '../constants/me'

const initialState = {
  id: '',
  email: '',
  profile: {
    firstName: '',
    lastName: '',
  },
}

export default createReducer(initialState, {
  [actions.load]: (state, { user }) => ({ ...state, ...user }),
  [actions.clear]: () => initialState,
})
