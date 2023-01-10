import type { AppState } from '../'

type Location = {
  lat: string | null
  long: string | null
}

export const getLocation = (state: AppState): Location => ({
  lat: state.location.lat,
  long: state.location.long,
})

export const getIsLocationFetched = (state: AppState): boolean => (
  state.location.loadState !== 'init'
)

export const getIsLocationValid = (state: AppState): boolean => (
  state.location.loadState === 'loaded'
)

export const getLocationError = (state: AppState): string => state.location.err
