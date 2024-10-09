import React from "react";
import { Link } from "react-router-dom";
import './pageHeading.css'

const PageHeading = ({pageTitle='pageTitle', goBackLink}) => {
    return (
        <div>
            <div className="breadcrumb-area">
                <div className="tp-breadcrumb mx-auto flex flex-col pl-5 items-start justify-center sm:container">
                    <ul className="tp-breadcrumb-link flex items-center mb-2.5">
                        <li><Link to="/" className="breadcrumb-item transition-all  flex items-center justify-center">{goBackLink}</Link></li>
                        <li><p className="PgTitle-text flex items-center justify-center">{pageTitle}</p></li>
                    </ul>
                    <h1 className="tp-breadcrumb-title">{pageTitle}</h1>
                </div>
            </div>
        </div>
  )
}

export default PageHeading
