import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import Footer from "../../components/footer"
import Header from "../../components/header"
import Img from "gatsby-image"
import Seo from "../../components/seo"

export default function Work({ data }) {
    
    const page = 'archive-page';
    const work = data.allProjectsJson.nodes;

    return (
        
        <Layout page={ page }>
            <Seo title="Work Archive" />
            <div className="grid-margins">
                <Header />
                
                <div className="main-content">
                  <ul className="work-list" >
                    {work.map((project, index) => {
                      return <li key={index}>
                        <Link to={"/work/" + project.slug}>
                          <div className="text">
                            <h3>{ project.title }</h3>
                            <p>{ project.date }</p>
                          </div>
                          
                          <div className="key-art container">
                            <div className={ project.keyArtAspectRatio }>
                              { project.keyArtVideo ? <video autoPlay muted playsInline loop><source src={ project.keyArtVideo } type="video/mp4" /></video> : null }
                              { !project.keyArtVideo ? <Img fluid={ project.keyArt.childImageSharp.fluid }/> : null }
                            </div>
                          </div>
                        </Link>
                      </li>
                    })}
                    
                  </ul>
                </div>

                <div className="container ">
                    <div>
                        <div className="block say-hi">
                            <p className="sm-type">Feel free to reach out about collaborations</p>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
            
        </Layout>

        
    )
}

export const query = graphql`
  query Wrok {
    allProjectsJson(sort: {fields: date, order: DESC}) {
      nodes {
        id
        keyArtVideo
        keyArt {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        keyArtAspectRatio
        slug
        title
        description
        date
      }
    }    
  }
`