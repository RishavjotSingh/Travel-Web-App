import React from 'react'
import './featured.css'

export const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://s1.pclncdn.com/design-assets/next-landing/assets/images/destinations/popular/los-angeles.jpg?opto&auto=avif,webp" alt="Los Angeles" className="featuredImg" />
            <div class="sc-aXZVg ImageTile__PropsChildrenBox-sc-j5s7d5-3 knHWgd jiydOm"></div>       
            <div className="featuredTitles">
                <h1>Los Angeles</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://s1.pclncdn.com/design-assets/next-landing/assets/images/destinations/popular/orlando.jpg?opto&auto=avif,webp" alt="Orlando" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Orlando</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://s1.pclncdn.com/design-assets/next-landing/assets/images/destinations/popular/atlanta.jpg?opto&auto=avif,webp" alt="Atlanta" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Atlanta</h1>
            </div>
        </div> 
    </div>
  )
}
