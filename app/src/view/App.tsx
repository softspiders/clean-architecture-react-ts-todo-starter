import React, { useContext } from 'react'
import { Header, Layout, Todo } from '.'
import todoContainer from '../container/TodoContainer'
import { Container } from '@material-ui/core'
import { AppContext } from '../'

const App = (): JSX.Element => {
  const { useCase } = useContext(AppContext)
  const { state, functions } = todoContainer({ useCase })

  return (
    <Layout>
      <Header />
      <Container maxWidth="sm">
        <Todo
          todoItems={state.todoItems}
          todoTitle={state.todoTitle}
          onAddKeyDown={functions.handleAddKeyDown}
          onCompleteClick={functions.handleCompleteClick}
          onDeleteClick={functions.handleDeleteClick}
          onInputChange={functions.handleInputChange}
        />
      </Container>
    </Layout>
  )
}

export default App
