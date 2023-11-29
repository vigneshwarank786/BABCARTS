import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Product from "./product/Product";
import  {toast} from 'react-toastify';
import Pagination from 'react-js-pagination';
import './Home/Home.css'

export  default function Home(){
    const dispatch = useDispatch();
    const {products, loading, error, productsCount, resPerPage} =    useSelector((state) => state.productsState)
    const [currentPage, setCurrentPage] = useState(1);
 
    const setCurrentPageNo = (pageNo) =>{

        setCurrentPage(pageNo)
       
    }

    useEffect(()=>{
        if(error) {
            return toast.error(error,{
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        dispatch(getProducts(null, null, null, null, currentPage)) 
    }, [error, dispatch, currentPage])


    const [showFullText, setShowFullText] = useState(false);

  const readMore = () => {
    setShowFullText(!showFullText);
  };


 

 


    return (
        <Fragment>
                           <div className="bg-homeimages mt-2">
      <div className="container">
        <div className="row">
          <div className="col-md-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <h1 className="titless"><span className="text-danger">BAB </span> SINDH FOODSTUFF TRADING LLC</h1>
            <p className="subtitlesheads">Experience a gastronomic delight with our high-quality food products, premium brands, and diverse culinary treasures.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row  pt-5">
        <div className="col-md-6">
          <div className="row ">
            <div className="col-4 mt-5">
              <img src="/images/home/bab-sindh-indus-img1.png" alt="bab sindh indus-img1" className="img-fluid d-block shadow-bottomss" />
            </div>
            <div className="col-6">
              <img src="/images/home/bab-sindh-indus-img2.png" alt="bab sindh indus-img2" className="img-fluid d-flex d-md-block shadow-bottomss" />
            </div>
          </div>
          <div className="row rows">
            <div className="col-6">
              <img src="/images/home/bab-sindh-indus-img3.png" alt="bab sindh indus-img3" className="img-fluid d-block shadow-bottomss" />
            </div>
            <div className="col-4">
              <img src="/images/home/bab-sindh-indus-img4.png" alt="bab sindh indus-img4" className="img-fluid d-flex d-lg-block shadow-bottomss" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h1 className=" card-subtitless  mb-2">Welcome to Bab Sindh</h1>
          <h1 className="card-titless mb-3">Exploring the Thriving <span className="card-title-spanss">Foodstuff Trading Industry</span></h1>
          {showFullText ? (
            <p className="card-text card-textss">
              Experience the thriving foodstuff trading industry with a diverse range of high-quality products. Catering to diverse tastes, businesses connect suppliers and customers, delivering convenience and premium brands. Trust, quality, and adaptability are essential, while technology and sustainability drive efficiency and growth. Embrace this dynamic industry for success.
            </p>
          ) : (
            <p className="card-text card-textss">
              Experience the thriving foodstuff trading industry with a diverse range of high-quality products.
            </p>
          )}
          <button className="btn btn-primaryss" onClick={readMore}>
            {showFullText ? 'Read less' : 'Read more'}
          </button>
        </div>
      </div>
    </div>
            {loading ? <Loader/>:
                <Fragment>
                    <MetaData title={'Buy Best Products'} />
                    <div className="productshead">
                    <h1  className="card-title-spanss">Latest <span className="redtext">Products</span></h1>

                    </div>
                    <section id="products" className="container mt-5">
                        <div className="row">
                            { products && products.map(product => (
                                <Product col={3} key={product._id}  product={product}/>
                            ))}
                        
                        </div>
                    </section>
                    {productsCount > 0 && productsCount > resPerPage?
                    <div className="d-flex justify-content-center mt-5">
                           <Pagination 
                                activePage={currentPage}
                                onChange={setCurrentPageNo}
                                totalItemsCount={productsCount}
                                itemsCountPerPage={resPerPage}
                                nextPageText={'Next'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass={'page-item'}
                                linkClass={'page-link'}
                           />     
                    </div> : null }
                </Fragment>
           }
        </Fragment>
    )
}