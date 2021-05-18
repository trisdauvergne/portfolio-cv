import React from "react";
import { graphql } from "gatsby";
import Main from './main/Main';
import './newcss.css';

const IndexPage = ({ data }) => {
  // console.log('from index.js', data.allContentfulProject.edges)

  return (
  <div className="App">
    <div className="cursor">
      <Main projects={data.allContentfulProject.edges}/>
    </div>
  </div>
  )
}

export default IndexPage;

export const query = graphql`query MyQuery {
  allContentfulProject {
    edges {
      node {
        projectTitle
        projectIntro
        projectBody {
          projectBody
        }
        projectCreative {
          projectCreative
        }
        toolsAndLanguages
        deployedLink
        sourceCode
        mainPagePreview {
          title
          description
          file {
            fileName
            url
          }
          gatsbyImageData(width: 100)
        }
      }
    }
  }
}
`;