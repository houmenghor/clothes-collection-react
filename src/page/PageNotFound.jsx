import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div>
            <div className="container-fluid bg-warning display-7" 
            style={{ height: "90vh",justifyContent:'center',alignItems:'center',display:'flex'}}>
                <div className=''>
                    <h1 className='display-3'>Page Not found</h1>
                    <p>Look like you've followed a broken link or entered a URL that's doesn't exist on this site</p>
                    <div>
                        <NavLink to='/' className='text-decoration-none fs-5'>
                            <i className='fa fa-arrow-left lead fs-5' style={{width:'20px'}}></i>
                            Back to our site
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
