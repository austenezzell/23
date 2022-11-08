import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Img from "gatsby-image"
import Footer from "../components/footer"
import Nav from "../components/nav"
import Seo from "../components/seo"

export default function workDtls({ data }) {
    const { description, title, assets, slug, team } = data.projectsJson
    const projects = data.allProjectsJson.edges
    const page = 'work-dtl-page';
    let asset;
    let allProjects = [];
    
    projects.forEach((project, index) => {
        project.next ? allProjects.push(project.next.slug) : allProjects.push('end');
    });

    let currentPageIndex = allProjects.indexOf(slug);
    let nextPage = allProjects[currentPageIndex + 1];

    let assetType = (value) => {
        value.video ? asset = <video autoPlay muted playsInline loop><source src={ value.video } type="video/mp4" /></video> : asset = <Img fluid={value.asset.childrenImageSharp[0].fluid}/>
        return asset;
    }
    
    return (
        <Layout page={ page }>
            <Seo title={ title } />
            < Nav />
            <section>
                <div className="work-content">
                    {assets.map((value, index) => {
                        return <div key={ index } className={ value.class + " asset"}>
                            { value.class === "repeat" ? <div className='container'><div className='repeat-1'>{ assetType(value) }</div><div className='repeat-2'>{ assetType(value) }</div><div className='repeat-3'>{ assetType(value) }</div></div>
                            : value.class === "centered" ? <div className='container twelve-col'><div className='centered-asset'>{ assetType(value) }</div></div>
                            : assetType(value) }
                            </div>
                    })}
                    <div className="info-bar">
                        <div className="container mobile-two-col">
                            <div className="box-1">
                                <h1><Link to='/'>Austen Ezzell</Link> / <Link to='/work'>Archive</Link> / { title }</h1>
                            </div>
                            <div className="box-2">
                            { nextPage === "end" ? <Link to={ '/work/' + allProjects[0] }>Next Project &rarr;</Link> : <Link to={ '/work/' + nextPage }>Next Project &rarr;</Link> }
                            </div>
                        </div>                              
                    </div>
                </div>
            </section>
            <div className="grid-margins container four-col info-dets">
                
                <div className='three-fourth-col'>
                    <div className="description mb-4">
                        <p className="sm-type">{ description }</p>
                    </div>
                    <div className='team'>
                        <h3>Team</h3>
                        <ul>
                            { team.map((ic, index) => {
                                return <li key={ index }>{ ic.link ? <a href={ ic.link }>{ ic.person }</a> : ic.person }</li>
                            })}                        
                        </ul>
                    </div>
                    <div className="block double-m">
                        <p className="sm-type">Feel free to reach out about collaborations</p>
                    </div>
                    <Footer />
                </div>
                
            </div>
        </Layout>
    )
}


export const query = graphql`
    query WorkDtlPage($slug: String) {       
        projectsJson(slug: {eq: $slug}) {
            keyArtVideo
            keyArtAspectRatio
            description
            title
            slug
            team {
                link
                person
            }
            assets {
              class
              video
              asset {
                childrenImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }        
        }
        allProjectsJson(sort: {fields: date, order: DESC}) {
            edges {
                next {
                    slug
                }
            }
        }
    }
`