import type { AppState } from '../'

import { getIsCurrentFetched } from './current/selectors'
import { getIsDailyFetched } from './daily/selectors'
import { getIsHourlyFetched } from './hourly/selectors'

export const getIsForecastFetched = (state: AppState): boolean => (
  getIsCurrentFetched(state) && getIsHourlyFetched(state) && getIsDailyFetched(state)
)
