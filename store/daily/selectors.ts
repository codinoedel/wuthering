import type { AppState } from '../'

export const getIsDailyFetched = (state: AppState): boolean => (
  state.daily.loadState !== 'init'
)
