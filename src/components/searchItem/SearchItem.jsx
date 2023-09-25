import React from 'react'
import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchList'>
        <div className='searchItem'>
            <img src='https://cf.bstatic.com/xdata/images/hotel/square600/101174831.webp?k=35631b861f880bd876d85402d34b43f272c9032780bcc9008b3f0f70b6c2a56d&o=' alt='' className='siImg'/>
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">600m from Center</span>
                <span className='siTaxiOp'>Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment
                </span>
                <span className="siFeatures">
                    Entire studio - 1 bathroom - 1 full bed
                </span>
                <span className='siCancelOp'>Free wifi</span>
            </div>
            <div className="siDetails"><button className='detailsButton'>Details</button></div>
        </div>
        <div className='searchItem'>
            <img src='https://cf.bstatic.com/xdata/images/hotel/square600/105762573.webp?k=2d60f1bc92863378df6d230f19d726197363e101ca22090bf88810eb89dea86b&o=' alt='' className='siImg'/>
            <div className="siDesc">
                <h1 className="siTitle">La Sapinette</h1>
                <span className="siDistance">250m from Center</span>
                <span className='siTaxiOp'>Free airport taxi</span>
                <span className="siSubtitle">
                    Villa
                </span>
                <span className="siFeatures">
                    Entire villa - 1 bathroom - 2 full bed
                </span>
                <span className='siCancelOp'>Free breakfast</span>
                
            </div>
            <div className="siDetails"><button className='detailsButton'>Details</button></div>
        </div>
        <div className='searchItem'>
            <img src='https://cf.bstatic.com/xdata/images/hotel/square600/84981921.webp?k=3f4c17f4d5e0799619db4236e42b69f50e837f6bf867b479476b5954e16052f2&o=' alt='' className='siImg'/>
            <div className="siDesc">
                <h1 className="siTitle">Havre De Paix</h1>
                <span className="siDistance">450m from Center</span>
                <span className='siTaxiOp'>Free airport taxi</span>
                <span className="siSubtitle">
                    Cabin
                </span>
                <span className="siFeatures">
                    Entire cabin - 1 bathroom - 1 full bed
                </span>
                <span className='siCancelOp'>Free spa</span>
                
            </div>
            <div className="siDetails"><button className='detailsButton'>Details</button></div>
        </div>
        <div className='searchItem'>
            <img src='https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o=' alt='' className='siImg'/>
            <div className="siDesc">
                <h1 className="siTitle">Leman Locke</h1>
                <span className="siDistance">700m from Center</span>
                <span className='siTaxiOp'>Free airport taxi</span>
                <span className="siSubtitle">
                    Cottage
                </span>
                <span className="siFeatures">
                    Entire cottage - 1 bathroom - 2 full bed
                </span>
                <span className='siCancelOp'>Free gym</span>
            </div>
            <div className="siDetails"><button className='detailsButton'>Details</button></div>
        </div>
    </div>
    
  )
}

export default SearchItem;