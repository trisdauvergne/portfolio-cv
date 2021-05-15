import * as React from "react";
import { graphql } from "gatsby";
// import Header from '../components/header/Header';
// import About from './about/About';
// import Projects from './projects/Projects';
// import Cv from './cv/Cv';
// import Connect from './connect/Connect';
import Main from './main/Main';
// import './index.css';
// import Layout from '../components/layout';
import './newcss.css';

const IndexPage = ({ data }) => {
  // console.log(data.allContentfulProject.edges, 'from index.js')
  return (
  <div className="App">
    <Main projects={data.allContentfulProject.edges}/>
    {/* <Header />
    <About />
    <Projects projects={data.allContentfulProject.edges}/>
    <Cv />
    <Connect /> */}
  </div>
  )
}

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