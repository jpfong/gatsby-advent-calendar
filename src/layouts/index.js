import React from "react";
import Link from "gatsby-link";
import { Helmet } from "react-helmet";

export default ({ children, data }) => (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
        <Helmet>
            <title>{data.site.siteMetadata.title}</title>
        </Helmet>
        <Link to={`/`}>
            <h3>
                {data.site.siteMetadata.title}
            </h3>
        </Link>
        {children()}
    </div>
)

export const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`
