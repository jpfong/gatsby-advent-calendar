import React from "react"
import styles from "./index.module.css";
import DayLink from "../components/dayLink";
import Link from "gatsby-link"

export default ({ data }) => {
    return (
        <div className={styles.container}>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
                <DayLink id={node.id} slug={node.fields.slug} key={node.id} link={index + 1}/>
            ))}
        </div>
    )
} 

export const query = graphql`
query IndexQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        fields {
          slug
        }
      }
    }
  }
}
`;
