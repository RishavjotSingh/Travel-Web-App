import React from 'react'
import './propertyList.css'

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>190 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450103.jpeg?k=a1fa72362160b1df6e288050afa7ce1aade80871acd368ddd4a4ebf6ad87764e&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Country Houses</h1>
                <h2>243 Country Houses</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450068.jpeg?k=41cc7c5449011323aaaaed4e845cb16200b5d540c77a50c1bea90399a1e92d70&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resort Villages</h1>
                <h2>314 Resort Villages</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450097.jpeg?k=eac0f917a53dc395bd379fef8c191e7d5e37012b68e60232e4f6bba2a2901b7a&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Luxury Tents</h1>
                <h2>219 Luxury Tents</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450080.jpeg?k=15d9709efa513f2b23b5fa8d5234d87bdee2bf97b3e7552244592da11413db9a&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Farm Stays</h1>
                <h2>267 Farm Stays</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList;