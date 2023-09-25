import React from 'react'
import './featuredProperties.css'

const FeaturedProperties = () => {
  return (
    <div className='fp'>
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=29a0e9879ac8361539c3dae41f047d383e6fa6917f8f47cb50dad001ada0eae6&o=" alt="" className="fpImg" />
        <span className="fpName">London Apartment</span>
        <span className="fpCity">London</span>
        <span className="fpPrice">Starting from $190</span>
        <div className="fpRating">
          <button>9.2</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/153069622.webp?k=7071cdd5c1ad4e51e137ee93aca75a122fde80989011a54976b47150f0fe691a&o=" alt="" className="fpImg" />
        <span className="fpName">Misaka</span>
        <span className="fpCity">Jouy-sur-Eure</span>
        <span className="fpPrice">Starting from $170</span>
        <div className="fpRating">
          <button>9.4</button>
          <span>Wonderful</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=" alt="" className="fpImg" />
        <span className="fpName">Agriturismo Cabrele</span>
        <span className="fpCity">Santorso</span>
        <span className="fpPrice">Starting from $180</span>
        <div className="fpRating">
          <button>9.2</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/131056675.webp?k=b270059e6cb5f68d7d5e114a7db1dba9c0664f79ce1b6962912950ed002a5dc8&o=" alt="" className="fpImg" />
        <span className="fpName">La Maison Pamalijolie</span>
        <span className="fpCity">Stanstead-Est</span>
        <span className="fpPrice">Starting from $175</span>
        <div className="fpRating">
          <button>9.0</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties;