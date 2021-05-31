import React, { FC } from "react"
import { makeStyles } from "@material-ui/styles"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Theme,
} from "@material-ui/core"

import { Typography } from "@material-ui/core"
import NavAndSideBarLayout from "../layout/NavAndSideBarLayout"
import { Link } from "gatsby"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
}))

const NotFoundPage: FC = () => {
  const classes = useStyles()
  return (
    <NavAndSideBarLayout>
      <Grid container className={classes.root} justify="center">
        <Grid item lg={12}>
          <Card>
            <CardContent>
              <Typography variant={"h5"} component={"h2"}>
                404 Page not found
              </Typography>
              <Typography variant={"body1"} paragraph>
                The page your trying to visit does not exists.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={"/"} className={classes.link}>
                <Button size="small" color="primary">
                  Go to the index page
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </NavAndSideBarLayout>
  )
}

export default NotFoundPage
