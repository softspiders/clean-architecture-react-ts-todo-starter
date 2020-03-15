import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './view'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, colors } from '@material-ui/core'
import { TodoItemUseCase } from './usecase/TodoItemUseCase'
import { RestClient } from './adapter/RestClient'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: colors.red.A400
    },
    background: {
      default: '#fff'
    }
  }
})

const restClient = new RestClient('http://localhost:3001')
const todoUseCase = new TodoItemUseCase(restClient)

interface IContextProps {
  useCase: TodoItemUseCase
}

export const AppContext = createContext({} as IContextProps)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      <AppContext.Provider value={{ useCase: todoUseCase }}>
        <App />
      </AppContext.Provider>
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
