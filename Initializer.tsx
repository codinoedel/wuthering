import React, { ChildrenProps } from 'react'

import { useAppDispatch, useAppSelector } from './hooks'
import { getIsLocationFetched, getIsLocationValid } from './store/location/selectors'
import { fetchLocation } from './store/location/actions'
import { fetchForecast } from './store/crossActions'
import { getIsForecastFetched } from './store/crossSelectors'

interface Props {
  children: ChildrenProps
}

export const Initializer = ({ children }: Props) => {
  const isLocationFetched = useAppSelector(getIsLocationFetched)
  const isLocationValid = useAppSelector(getIsLocationValid)
  const isForecastFetched = useAppSelector(getIsForecastFetched)

  if (!isLocationFetched) {
    const dispatch = useAppDispatch()
    dispatch(fetchLocation())
  }

  if (isLocationValid && !isForecastFetched) {
    const dispatch = useAppDispatch()
    dispatch(fetchForecast())
  }

  return children
}
