import type { AppState } from '../'

type Location = {
  lat: string
  long: string
}

export const getLocation = (state: AppState): Location => ({
  lat: state.location.lat,
  long: state.location.long,
})

export const hasLocation = (state: AppState): boolean => (
  state.location.lat !== null && state.location.long !== null
)

export const getLocationError = (state: AppState): string => state.location.err
