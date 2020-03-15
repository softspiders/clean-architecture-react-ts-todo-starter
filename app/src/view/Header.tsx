import React from 'react'
import { AppBar, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bar: {
      padding: theme.spacing(1.5, 0)
    },
    title: {
      flexGrow: 1,
      textAlign: 'center'
    }
  })
)

const Header = (): JSX.Element => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.bar}>
      <Typography variant="h6" className={classes.title}>
        Todo App
      </Typography>
    </AppBar>
  )
}

export default Header
