// Importing necessary libraries and components
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Importing the App component
import App from './App'

// Importing the reducers
import rootReducer from './reducers'

// Creating the Redux store with thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk))

// Creating the navigation stack
const Stack = createStackNavigator()

// The main component of the app
const Main = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={App} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

// Exporting the main component
export default Main
