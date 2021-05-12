import * as React from "react";
import { graphql } from "gatsby";
import Header from '../components/header/Header';
import About from './about/About';
import Projects from './projects/Projects';
import './index.css';

// import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  console.log(data, 'from index.js')
  return (
  <div className="App">
    <Header />
    <About />
    <Projects projects={data}/>
    {/* {data.allContentfulProject.edges.map(project => <p>{project.node.deployedLink}</p>)} */}
  </div>
  )
}

// const IndexPage = ({ data }) => {
//   console.log(data.allContentfulProject.edges);
//   return (
//   <div>
//     <h1>Title</h1>
//     <p>Text</p>
//     {data.allContentfulProject.edges.map(project => <p>{project.node.deployedLink}</p>)}
//   </div>
//   )
// }

export default IndexPage;

export const query = graphql`query MyQuery {
  allContentfulProject {
    edges {
      node {
        projectTitle
        projectDescription {
          projectDescription
        }
        deployedLink
      }
    }
  }
}`;