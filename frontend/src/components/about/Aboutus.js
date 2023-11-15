import React, { Fragment } from 'react'
import './About.css'


const Aboutus = () => {
  return (
    <Fragment>
    <div className="bg-images mt-2">
      <div className="container-fluid">
        <div >
          <h1 className="about-uss">Company Overview </h1>
        </div>
      </div>
    </div>
    
          <div className="containers container pt-5">
            <div className="columns col-md-6 ">
              <h1 className="titles">The Bab Sindh Story</h1>
              <p className="subtitles">Uncover the captivating Bab sindh story, a testament to our unwavering dedication and pursuit of excellence in the foodstuff trading industry. Our premium products, customer-centric approach, and strong commitment have positioned us as trusted partners in culinary indulgence. Experience the remarkable Bab sindh difference today and savor culinary perfection.Uncover the captivating Babsindh story, a testament to our unwavering dedication and pursuit of excellence in the foodstuff trading industry. Our premium products, customer-centric approach, and strong commitment have positioned us as trusted partners in culinary indulgence. Experience the remarkable Babsindh difference today and savor culinary perfection.</p>
              <p className="subtitles">Experience the captivating Bab sindh story of unwavering dedication and culinary excellence. With premium products, a customer-centric approach, and steadfast commitment, we are trusted partners in indulgent culinary experiences. Discover the remarkable Bab sindh difference today.</p>
            </div>
            <div className="columns  col-md-6 col-sm-12">
              <div className="image-containers image-container">
              <img src="/images/about/bababoutback.png" alt="bab sindh about image1" className="back-images" />
                <img src="/images/about/bababoutperson.png" alt="bab sindh about image2" className="front-images" />
              </div>
            </div>
          </div>
    
    
    
          <div className="card-containers card-container container-fluid pt-5">
            <div className="row rowcardss">
              <div className="cards card ">
                <div className="card-headers ">
                  <div className="circles">
                    <img src="/images/about/arrow.png" alt='main bab sindh mission' className="small-images" />
                  </div>
                </div>
                <div className="card-bodys card-body">
                  <h3 className="card-titles">Our Mission</h3>
                  <p className="card-subtitles">Bab sindh, based in Dubai, UAE, elevates the culinary experience by offering diverse, top-quality food products to customers in Dubai and the UAE. Our mission is to contribute to the growth of the local food industry through exceptional products and service.</p>
                </div>
              </div>
              <div className="cards card">
                <div className="card-bodys card-body">
                  <img src="/images/about/babsindhmission1.png" alt="bab sindh mission image1" className="card-images" />
                </div>
              </div>
            </div>
            <div className="row rowcardss">
              <div className="cards card">
                <div className="card-bodys card-body">
                  <img src="/images/about/babmission2.png" alt="bab sindh mission image2" className="card-images" />
                </div>
              </div>
              <div className="cards card">
                <div className="card-headers">
                  <div className="circles">
                    <img src="/images/about/telescope.png" alt="bab sindh vission img1" className="small-images" />
                  </div>
                </div>
                <div className="card-bodys card-body">
                  <h3 className="card-titles">Our Vision</h3>
                  <p className="card-subtitles">Our vision at Bab sindh is to build a connected ecosystem of suppliers, distributors, and customers, nurturing shared prosperity. We aim to be the top destination for discerning customers in search of exceptional food products, while enabling suppliers to expand their reach and seize new market opportunities.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-containers container-fluid pt-5">
            <div className="row rowcardss">
              <div className="cards card">
                <div className="card-headers">
                  <div className="circles">
                    <img src="/images/about/diamond.png" alt="main bab sindh value" className="small-images" />
                  </div>
                </div>
                <div className="card-bodys card-body">
                  <h3 className="card-titles">Our Values</h3>
                  <p className="card-subtitles">At Bab sindh, we understand the power of collaboration and strong partnerships. By fostering relationships with suppliers, customers, and stakeholders, we create a mutually beneficial environment for collective growth and success in the food industry. Together, we drive innovation, efficiency, and customer satisfaction.</p>
                </div>
              </div>
              <div className="cards card">
                <div className="card-bodys card-body">
                  <img src="/images/about/babmission2.png" alt="bab sindh value image2" className="card-images" />
                </div>
              </div>
            </div>
            </div>
    
          
    </Fragment> 
  )
}

export default Aboutus