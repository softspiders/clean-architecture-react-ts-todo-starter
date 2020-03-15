import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
)

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

export default Layout
