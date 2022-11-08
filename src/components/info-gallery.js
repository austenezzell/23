import React, {useEffect} from "react";
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const InfoGallery = () => {

    const data = useStaticQuery(graphql`
        query infoGalleryQuery {
            allFile(filter: {relativeDirectory: {eq: "info"}}) {
                edges {
                    node {
                        childImageSharp {
                            id 
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    const delay = 3000;
    const photos = data.allFile.edges;
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

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
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        ),
        delay
        );
        return () => {
        resetTimeout();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    return (
        
        <div className="info-gallery container">       

            {photos.map((image, count) => (
                <div key={image.node.childImageSharp.id} className={ index === count ? "active image" : " image" }>                        
                    <Img fluid={ image.node.childImageSharp.fluid }/>
                </div>
            ))}
        </div>
    )
}
export default InfoGallery


