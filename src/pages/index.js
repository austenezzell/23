import * as React from "react"
import Footer from "../components/footer"
import Nav from "../components/nav"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Carousel from "../components/carousel"
import MySketch from "../components/mysketch"
import useMouse from '@react-hook/mouse-position'


const IndexPage = ({ data }) => {
  
    const page = 'homepage';

    const ref = React.useRef(null)
    const mouse = useMouse(ref, {
      enterDelay: 100,
      leaveDelay: 100,
    })
    
    return(
        <Layout page={ page }>
            <Seo title="Creative Direction and Design" />
            <div ref={ref}>
                <div className="hp-container">
                    
                <header>
                    <h1 className="lg-type difference-text headline">
                        The design practice<br /> of Austen Ezzell.
                    </h1>
                    <Nav />
                </header>
                <section>
                    <div className="diversity">
                        <MySketch />
                    </div>    
                </section>
                <section>
                    <div className="gallery-container">                    
                        <Carousel mouseX = {mouse.x} mouseY = {mouse.y} />
                    </div>
                    <Footer />
                </section>
            </div>

    

            </div>
        </Layout>
    )
}

export default IndexPage

// export const query = graphql`
//   query featuredWork {
//     allProjectsJson(sort: {fields: date, order: DESC}) {
//       nodes {
//         id
//         keyArtVideo
//         keyArt {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         keyArtAspectRatio
//         slug
//         title
//       }
//     }    
//   }
// `