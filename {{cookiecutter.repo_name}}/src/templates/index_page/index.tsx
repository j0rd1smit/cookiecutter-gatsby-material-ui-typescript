import React, { FC } from "react"
import { makeStyles } from "@material-ui/styles"
import { Card, CardContent, Grid, Theme } from "@material-ui/core"

import { Typography } from "@material-ui/core"
import NavAndSideBarLayout from "../../layout/NavAndSideBarLayout"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
}))

const IndexPage: FC = () => {
  const classes = useStyles()
  const metaData = useSiteMetadata()

  return (
    <NavAndSideBarLayout>
      <Grid container className={classes.root} justify="center">
        <Grid item lg={12}>
          <Card>
            <CardContent>
              <Typography variant={"h5"} component={"h2"}>
                Index Page
              </Typography>
              <Typography variant={"body1"} paragraph>
                Hello {metaData.author.name}, welcome to {metaData.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </NavAndSideBarLayout>
  )
}

export default IndexPage
