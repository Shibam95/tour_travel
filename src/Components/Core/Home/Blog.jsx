import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Blog = () => {
    const { post } = useSelector(state => state?.blog);
    
    // const filterData = latestData?.filter((e) => {
    //     return (
    //         e.date >= "18-06-2023"
    //     )
    //})
   //console.log(latestData);
   
    
    return (
        <>
            <div >
                <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <div className="text-center mb-3 pb-3">
                            <Link className="text-primary text-uppercase" to="/blog">Blogs</Link>
                            <h1>Latest Blog</h1>
                        </div>
                        <div className="row">
                        <OwlCarousel className='owl-theme' center={true} margin={10} dots={true} loop={true} autoplay={true} smartSpeed={1000}>
                        
                        {
                            post?.map((p, k) => {
                                return (
                                    <>
                                        <div className="text-center pb-4" style={{ padding: "10px" }}>
                                            <div className="package-item">
                                                <div className="position-relative">
                                                    <img class="img-fluid w-100" src={p.image} alt="" style={{ height: "200px", width: "200px" }} />
                                                    <div className="blog-date">
                                                        <small className="text-white text-uppercase">{p.date}</small>
                                                    </div>
                                                </div>
                                                <div className="bg-white p-4">
                                                    <div className="d-flex mb-2">
                                                        <p>{p.body}</p>
                                                    </div>
                                                    <h5> <Link className="w-100 btn btn-primary mt-2" to={`/blogdet/${p?.id}`}>Details</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                         </OwlCarousel>   
                        

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog