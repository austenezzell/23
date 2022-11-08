import React, {useEffect} from "react";
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Arrow from "../images/arrow.inline.svg";

const Carousel = (props) => {

    const data = useStaticQuery(graphql`
        query carouselQuery {
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
                }
            }  
        }
    `)
    let {mouseX, mouseY} = props;
    const work = data.allProjectsJson.nodes;
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    const [delay, setDelay] = React.useState(12000);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
        setIndex((prevIndex) =>
          prevIndex === work.length - 1 ? 0 : prevIndex + 1
        ), 
        delay,
        setDelay(5000), 
        );
        return () => {
        resetTimeout();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    return (
        <div className="">       
            {work.map((project, count) => (
                <div key={project.id} className={ index === count ? "active container gallery twelve-col" : " container gallery twelve-col" }>
                    <div className={"gallery-img " + project.keyArtAspectRatio }>
                        <Link
                            to={"/work/" + project.slug}
                            key={count}
                            className="container work-grid"
                            >
                            <div className="image loadin">
                                { project.keyArtVideo ? <video autoPlay muted playsInline loop><source src={ project.keyArtVideo } type="video/mp4" /></video> : null }
                                { !project.keyArtVideo ? <Img fluid={ project.keyArt.childImageSharp.fluid }/> : null }
                            </div>
                            <div className="description" style={{ left: mouseX + 24, top: mouseY - 10 }}>
                                <h3 className="sm-type loadin">{ project.title } <span className="arrow"><Arrow /></span> </h3>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Carousel


