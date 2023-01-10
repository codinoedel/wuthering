import type { AppState } from '../'

export const getFeelsLike = (state: AppState): number => (
  state.current.data
  ? state.current.data.feelsLike
  : 0
)

export const getIsCurrentFetched = (state: AppState): boolean => (
  state.current.loadState !== 'init'
)

export const getIsCurrentValid = (state: AppState): boolean => (
  state.current.loadState !== 'loaded'
)

export const getTemp = (state: AppState): number => (
  state.current.data
  ? state.current.data.temp
  : 0
)

export const getWeatherDescription = (state: AppState): string => (
  state.current.data
  ? state.current.data.weather.description
  : 'No weather data'
)
