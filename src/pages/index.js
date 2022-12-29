import React, {useRef, useEffect} from "react";
import { graphql, Link } from "gatsby"
import Footer from "../components/footer"
// import Nav from "../components/nav"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Img from "gatsby-image"
// import Carousel from "../components/carousel"
import MySketch from "../components/mysketch"


export default function IndexPage({ data }) {
  
    const page = 'homepage';
    let placeholder;
    let step;
    let diversity;
    const ref = useRef(null);
    const work = data.allProjectsJson.nodes;

    useEffect(() => {
        diversity = ref.current;
    }, []);

    const showNext = (e) => {
        placeholder = e.target.parentNode.nextElementSibling;
        while (placeholder) {
            if (placeholder.classList.contains('step')) {
                step = placeholder;
                break;
            }
            placeholder = placeholder.nextElementSibling;
        }
        step.style.display = 'block';
        diversity.classList.add("active");
      };

    return(
        <Layout page={ page }>
            <Seo title="Creative Direction and Design" />
            <div>
                <div className="hp-container">
                    <div className="loader">
                        <div className="container">
                            <p>© 2023 Austen Ezzell</p>
                        </div>
                    </div>
                    <section className="main-content">
                        <div className="grid-container grid-margins">
                            <div className="primary-info">
                            
    
                                <h1 className="">The design practice of <button onClick={(e) => { showNext(e); }}>Austen Ezzell</button>.</h1>

                                <p className="hide step">Focused on connected <button onClick={(e) => { showNext(e); }}>product & brand</button> experiences.</p>

                                <p className="hide step">Product is brand—the best product experiences later up to seamless brand experiences, where every brand touchpoint reinforces the brand promise. Connected product and brand design teams create the opportunity for a more seamless customer journey, improved efficiencies, and a better environment for <button onClick={(e) => { showNext(e); }}>design</button>.</p>

                                <p className="hide step">It’s all design. The Design process is a way of thinking that can be applied to all aspects of life. For much of my life, I practiced design without understanding design. Today, I'm primarily focused on creating an environment where design impacts <button onClick={(e) => { showNext(e); }}>everything I do.</button></p>

                                <div className="hide step">
                                    <div className="mb4">
                                        <div className="mb4">
                                            <p>I currently lead design at Dialpad, where I’m lucky to work with an amazing team, on cutting-edge technology, in an environment that values design.</p>
                                        </div>
                                        <h3>Work Archive:</h3>

                                        <ul className="work-list" >
                                            {work.map((project, index) => {
                                            return <li key={index}>
                                                <Link to={"/work/" + project.slug}>
                                                <div className="text">
                                                    <p>{ project.title } ({ project.date })</p>
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
      
                                        <p>*Too many people collaborated on these projects to list everyone.</p>
                                        
                                    </div>
                                    <button className="solo-btn" onClick={(e) => { showNext(e); }}>This site.</button>
                                </div>
                                            
                                <div className="hide step">
                                    <p>This site is always in beta. I make it an annual ritual to re-design, learn new technologies, and push myself in new directions. I'm a big fan of Figma, gatsby, p5, and designing in the browser. The font is Everett (not named after my son but partially selected for this reason) by Nolan Paparelli.</p>

                                    <h3>Portfolios past</h3>
                                    <p className="sm-type"><a href="http://2022.austenezzell.com/">2022</a>, <a href="http://2021.austenezzell.com/">2021</a>, <a href="http://2018.austenezzell.com/">2018</a>, <a href="http://2017.austenezzell.com/">2017</a>, <a href="http://2016.austenezzell.com/">2016</a>, <a href="http://2015.austenezzell.com/">2015</a>, <a href="http://2014.austenezzell.com/">2014</a>, <a href="http://2013.austenezzell.com/">2013</a>. Older versions lost.</p>
                                </div>
                            
                            </div>
                        </div>
                        <Footer />
                </section>
                

                <section>
                    <div ref={ref} className="diversity">
                        <MySketch />
                    </div>    
                </section>

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
