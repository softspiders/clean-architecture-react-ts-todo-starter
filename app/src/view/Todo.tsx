import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
  ListItemIcon,
  TextField
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { TodoItem } from '../entity/TodoItem'

interface TodoProps {
  todoItems: TodoItem[] | null
  todoTitle: string
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onAddKeyDown: (event: React.KeyboardEvent) => void
  onCompleteClick: (id: number) => () => void
  onDeleteClick: (id: number) => () => void
}

const Todo = ({
  todoItems,
  todoTitle,
  onInputChange,
  onAddKeyDown,
  onCompleteClick,
  onDeleteClick
}: TodoProps): JSX.Element => (
  <React.Fragment>
    <TextField
      id="standard-with-placeholder"
      label="Todo Item"
      placeholder="What needs to be done?"
      margin="normal"
      fullWidth
      onChange={onInputChange}
      onKeyDown={onAddKeyDown}
      value={todoTitle}
    />
    <List component="nav">
      {todoItems &&
        todoItems.map(todoItem => {
          return (
            <ListItem key={todoItem.id}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todoItem.isCompleted}
                  tabIndex={-1}
                  disableRipple
                  onClick={onCompleteClick(todoItem.id)}
                />
              </ListItemIcon>
              <ListItemText primary={todoItem.title} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={onDeleteClick(todoItem.id)}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
    </List>
  </React.Fragment>
)

export default Todo
