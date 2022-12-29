import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Img from "gatsby-image"
import Seo from "../components/seo"
import Footer from "../components/footer"

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
            
            
            

            <section className="main-content ">
                
                    <div className=" grid-margins grid-container">
                        <div className='wrapper'>
                            <h1 className="mb-4">The <Link to='/'>design practice</Link> of Austen Ezzell.</h1>
                            <div className='mb-4'>
                                <h2> { title }</h2>
                                <p className="sm-type">{ description }</p>
                            </div>
                            

                            <section>
                                <div className="work-content mb-6">
                                    {assets.map((value, index) => {
                                        return <div key={ index } className={ value.class + " asset"}>
                                            { value.class === "repeat" ? <div className='container'><div className='repeat-1'>{ assetType(value) }</div><div className='repeat-2'>{ assetType(value) }</div><div className='repeat-3'>{ assetType(value) }</div></div>
                                            : value.class === "centered" ? <div className='container twelve-col'><div className='centered-asset'>{ assetType(value) }</div></div>
                                            : assetType(value) }
                                            </div>
                                    })}
                    
                                </div>
                            </section>
                            <section>
                                <div className='mb-6'>
                                    <h3>Team</h3>
                                    <ul>
                                        { team.map((ic, index) => {
                                            return <li key={ index }>{ ic.link ? <a href={ ic.link }>{ ic.person }</a> : ic.person }</li>
                                        })}                        
                                    </ul>
                                </div>
                                <p>{ nextPage === "end" ? <Link to={ '/work/' + allProjects[0] }>Next Project &rarr;</Link> : <Link to={ '/work/' + nextPage }>Next Project &rarr;</Link> }</p>
                            </section>
                            
                        </div>
                    </div>
                    <Footer />

                
            </section>


            

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