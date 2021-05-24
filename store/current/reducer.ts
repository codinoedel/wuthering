// current/reducer
import update from 'immutability-helper'
import { Action as ReduxAction } from 'redux'

interface SetCurrentWeather extends ReduxAction<'SET_CURRENT_WEATHER'> { }

type Action =
  | SetCurrentWeather

export type CurrentWeather = {
  dt: string
  sunrise: string
  sunset: string
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  clouds: number
  uvi: number
  visibility: number
  wind_speed: number
  wind_gust: number
  wind_deg: number
  weather: {
    id: string
    main: string
    description: string
    icon: string
  }
}

const initialState: CurrentWeather = {
  dt: '',
  sunrise: '',
  sunset: '',
  temp: 0,
  feels_like: 0,
  pressure: 0,
  humidity: 0,
  dew_point: 0,
  clouds: 0,
  uvi: 0,
  visibility: 0,
  wind_speed: 0,
  wind_gust: 0,
  wind_deg: 0,
  weather: {
    id: '',
    main: '',
    description: '',
    icon: ''
  },
}

export const currentReducer = (state=initialState, a: Action): CurrentWeather => {
  switch (a.type) {
    case 'SET_CURRENT_WEATHER':
      return state

    default:
      return state
  }
}
