import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from "../images/images.jpeg";

const Common = (props) => {
    return (
        <>
            <div id="header" className="d-flex align-items-center main_container">
                              
                <div className=" home_content">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="row">
                                <div className=" pt-5 pt-lg-0 order-2 order-lg-1 content">
                                    <h1 className="home_heading">{props.name} </h1>
                                    <h2 className="my-3 ">With a wide range of beauty treatments, we will help   you to achieve your goals whether it be  waxing or simply a relaxing massage.</h2>

                                    <div className="home_img">
                                        <img src={homeimg} alt="home_image" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className=" second_section">

                <div className=" page_content">
                    <h1>welcome</h1>
                    <p>Extraordinary Experience In Nail Care</p>
                    <h2>[palour name] NAIL STUDIO IS THE MOST POPULAR, CLEAN AND RECOMMENDED NAIL SALON</h2>
                    <button className="home_btn">
                        <NavLink to="/service" >Read me</NavLink>
                    </button>

                </div>
            </section>

        </>
    )
}

export default Common;