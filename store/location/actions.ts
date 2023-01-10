export const fetchLocation = () => ({
  type: 'FETCH_LOCATION',
})

export const setLocation = (lat: number, long: number) => ({
  type: 'SET_LOCATION',
  lat,
  long,
})

export const setLocationError = (err: Error) => ({
  type: 'SET_LOCATION_ERROR',
  err: err.message,
})
