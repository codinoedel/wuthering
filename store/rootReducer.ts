import { combineReducers } from 'redux'

import { currentReducer } from './current/reducer'
import { dailyReducer } from './daily/reducer'
import { hourlyReducer } from './hourly/reducer'
import { locationReducer } from './location/reducer'

export const rootReducer = combineReducers({
  current: currentReducer,
  hourly: hourlyReducer,
  daily: dailyReducer,
  location: locationReducer,
})
