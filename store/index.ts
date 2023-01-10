import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './rootReducer'
import { weatherApi } from './weatherApi'
import { locationMiddleware } from './location/middleware'

export const configureStore = () => {
  const middlewares = [ locationMiddleware, weatherApi ]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [ middlewareEnhancer ]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, composedEnhancers)

  return store
}

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = ReturnType<typeof configureStore>

export type LoadState = 'init' | 'loading' | 'loaded' | 'error'
