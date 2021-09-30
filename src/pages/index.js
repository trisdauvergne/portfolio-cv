import React from "react";
import { graphql } from "gatsby";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './main/Main';
import './index.css';

const IndexPage = ({ data }) => {
  // console.log('from index.js', data.allContentfulProject.edges)

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