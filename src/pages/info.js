import * as React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Header from "../components/header"
import Seo from "../components/seo"
import InfoGallery from "../components/info-gallery"



const IndexPage = ({ data }) => {
  const page = 'info-page';
  
  return(
    <Layout page={page}>
      <Seo title="Info" />
      
      <div>
        <div className="info-main-content">
          <div className="grid-margins full-vh container">
            
            <div className="container twenty-four-col">
              <Header />
            </div>


            {/* <h2 className="xl-type mt6">Design Practice </h2> */}

            <div className="container two-col info-dets mt6 align-end gutters">
              <div className="info-dtls">
                
                {/* <h3 className="lg-type">Work</h3> */}
                {/* <p className="lg-type">I'm primarily focused on creating an environment where design impacts everything I do. At work, this means building brand platforms, identity systems, products, and a culture of design.</p>
                <p className="lg-type">I'm currently Head of Design at Dialpad where I work across product and marketing to establish seamless brand &amp; product experiences.</p> */}
                
              </div>
              <div className="info-dtls">

                {/* <h3 className="lg-type">Personal</h3> */}
                <p className="lg-type">The Design process is a way of thinking that can be applied to all aspects of life. For much of my life, I practiced design without understanding design. Today, I'm primarily focused on creating an environment where design impacts everything I do. At work, this means bringing cross-functional teams together to establish brand platforms, identity systems, product experiences, and a culture of design. I'm currently Head of Design at Dialpad where I work across product and marketing to establish seamless brand & product experiences.</p>
                
              </div>
            </div>
          </div>
        </div>

          <div className="container two-col info-dets mt10 full-vh grid-margins align-end">
            <div className="container four-col">
                <div className="three-fourth-col block-1">
                  <div className="">
                    <p className="sm-type">This site is always in beta. I make it an annual ritual to re-design, learn new technologies and push myself in new directions. I'm a big fan of figma, gatsby, p5, and designing in the browser. The font is Everett (not named after my son but partially selected for this reason) by Nolan Paparelli.</p>
                  </div>
                </div>
                <div className="three-fourth-col block-2">
                  <div className="">
                    <h4 className="sm-type">Portfolios past</h4>
                    <p className="sm-type"><a href="http://2022.austenezzell.com/">2022</a>, <a href="http://2021.austenezzell.com/">2021</a>, <a href="http://2018.austenezzell.com/">2018</a>, <a href="http://2017.austenezzell.com/">2017</a>, <a href="http://2016.austenezzell.com/">2016</a>, <a href="http://2015.austenezzell.com/">2015</a>, <a href="http://2014.austenezzell.com/">2014</a>, <a href="http://2013.austenezzell.com/">2013</a>. Older versions lost.</p>
                  </div>
                </div>
                <div className="three-fourth-col block-3">
                  <div className="">
                    <p className="sm-type">Feel free to reach out about collaborations.</p>
                  </div>
                </div>
                <div className="four-four-col align-end">
                  <Footer />
                </div>
                
              </div>

              <div className="box-1 container info-gallery four-col max-full-vh">
                <div className="gallery-imgs">
                  <InfoGallery />
                </div>
              </div>
          </div>
        
        
      </div>
    </Layout>
  )
}

export default IndexPage


