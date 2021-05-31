import { graphql, useStaticQuery } from "gatsby"

export interface SiteMetadata {
  title: string
  author: {
    name: string
  }
}

export default (): SiteMetadata => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author {
            name
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}
