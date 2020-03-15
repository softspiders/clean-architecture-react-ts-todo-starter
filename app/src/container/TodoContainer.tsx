import React, { useState, useCallback, useEffect } from 'react'
import { TodoItem } from '../entity/TodoItem'
import { TodoItemUseCase } from '../usecase/TodoItemUseCase'

interface TodoContainerProps {
  useCase: TodoItemUseCase
}

const TodoContainer = ({ useCase }: TodoContainerProps) => {
  const [todoItems, setTodoItems] = useState<TodoItem[] | null>(null)
  const [todoTitle, setTodoTitle] = useState<string>('')

  useEffect(() => {
    ;(async (): Promise<void> => {
      try {
        const todoListItems = await useCase.findAll()
        setTodoItems(todoListItems)
      } catch (error) {
        // TODO: Add codes to handle errors
        console.log(error)
      }
    })()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTodoTitle(event.target.value)
    },
    []
  )

  const handleAddKeyDown = useCallback(
    async (event: React.KeyboardEvent) => {
      const ENTER_KEY_CODE = 13

      if (event.keyCode === ENTER_KEY_CODE) {
        try {
          await useCase.create(todoTitle)
          const todoListItems = await useCase.findAll()
          setTodoItems(todoListItems)
          setTodoTitle('')
        } catch (error) {
          // TODO: Add codes to handle errors
          console.log(error)
        }
      }
    },
    [todoTitle] // eslint-disable-line react-hooks/exhaustive-deps
  )

  const handleDeleteClick = useCallback(
    (id: number) => async (): Promise<void> => {
      try {
        await useCase.delete(id)
        const todoListItems = await useCase.findAll()
        setTodoItems(todoListItems)
      } catch (error) {
        // TODO: Add codes to handle errors
        console.log(error)
      }
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  )

  const handleCompleteClick = useCallback(
    (id: number) => async (): Promise<void> => {
      try {
        await useCase.update(id)
        const todoListItems = await useCase.findAll()
        setTodoItems(todoListItems)
      } catch (error) {
        // TODO: Add codes to handle errors
        console.log(error)
      }
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  )

  return {
    state: {
      todoItems,
      todoTitle
    },
    functions: {
      handleInputChange,
      handleAddKeyDown,
      handleCompleteClick,
      handleDeleteClick
    }
  }
}

export default TodoContainer
