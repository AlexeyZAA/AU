import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { createReducer } from '@frontend/utils/reducer'
import * as actions from '../constants/security'

const initialState = {
  token: '',
  expiresIn: '',
}

const reducer = createReducer(initialState, {
  [actions.auth]: (state, { token, expiresIn }) => ({
    token,
    expiresIn,
  }),
  [actions.logout]: () => initialState,
})

export default persistReducer(
  {
    storage,
    key: 'token',
    keyPrefix: 'aunited',
    version: 1,
  },
  reducer
)
