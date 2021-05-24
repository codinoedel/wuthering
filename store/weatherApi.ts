import { Middleware } from 'redux'
import { AppState } from './'

import type { Dispatch, Action } from 'redux'

import { apiKey } from '../config'

export const weatherApi = (): Middleware<{}, AppState> => (
  ({ state, dispatch }) => next => action => {
    switch(action.type) {
      case 'FETCH_ALL':
        fetch('https://openweather.com')
          .then(response => response.json())
          .then(data => {
            console.log('fetch_all data', data)
          })
          break

      case 'FETCH_CURRENT_WEATHER':
        fetch('https://openweather.com')
          .then(response => response.json())
          .then(data => {
            console.log('fetch_current_weather data', data)
          })
          break
      }

    return next(action)
  }
)

