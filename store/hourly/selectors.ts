import type { AppState } from '../'

export const getIsHourlyFetched = (state: AppState): boolean => (
  state.hourly.loadState !== 'init'
)
