import { Middleware } from 'redux'

import type { Dispatch, Action } from 'redux'

import { apiKey } from '../config'

import { setCurrent } from './current/actions'
import { setDaily } from './daily/actions'
import { setHourly } from './hourly/actions'
import { getLocation } from './location/selectors'

const fetchForecast = (getState, dispatch) => {
 const loc: Location = getLocation(getState())

 if (loc.lat === null || loc.long === null) { return }

 const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${loc.lat}&lon=${loc.long}&exclude=minutely&appid=${apiKey}&units=imperial`

 fetch(url).then(response => response.json())
   .then(data => {
     dispatch(setCurrent(data.current))
     dispatch(setDaily(data.daily))
     dispatch(setHourly(data.hourly))
   })
}


const fetchCurrentWeather = (getState, dispatch) => {
  console.log('not fetching current weather rn')
}

export const weatherApi: Middleware<{}, AppState> = ({ getState, dispatch }) => next => action => {
  switch(action.type) {
    case 'FETCH_FORECAST':
      fetchForecast(getState, dispatch)
      break

    case 'FETCH_CURRENT_WEATHER':
      break
  }

  return next(action)
}

