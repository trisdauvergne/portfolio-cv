import * as React from "react";
import { graphql } from "gatsby";
import Header from '../components/header/Header';
import About from './about/About';
import Projects from './projects/Projects';
// import Deployed from '../components/deployed/Deployed';
import './index.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

const IndexPage = ({ data }) => {
  console.log(data.allContentfulProject.edges, 'from index.js')
  return (
  <div className="App">
    <Header />
    <About />
    <Projects projects={data.allContentfulProject.edges}/>
    {/* <BrowserRouter>
      <Switch>
        <Route path="/deployed">
          <Deployed />
        </Route>
      </Switch>
    </BrowserRouter> */}
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