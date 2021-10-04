import React from "react";
import { graphql } from "gatsby";
import Main from './main/Main';
import './index.css';

const IndexPage = ({ data }) => {

  return (
    <div className="App">
      <Main projects={data.allContentfulProject.edges}/>
    </div>
  )
};

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