import React from 'react'
import bc1 from '@images/content/bc1.jpg'
import bc2 from '@images/content/bc2.jpg';
import bc3 from '@images/content/bc2.jpg';

function ImgCards() {
  return (

    <div class="container px-4 py-5" id="custom-cards">
        <h2 class="pb-2 border-bottom">Custom cards</h2>

        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" 
            style={{
                backgroundImage: `url(${bc1})`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center center`,
                backgroundSize: `cover`,
            }}>
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
                <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                </li>
                <li class="d-flex align-items-center me-3">
                    
                    <small>Earth</small>
                </li>
                <li class="d-flex align-items-center">
                    
                    <small>3d</small>
                </li>
                </ul>
            </div>
            </div>
        </div>

        <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" 
            style={{
                backgroundImage: `url(${bc2})`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center center`,
                backgroundSize: `cover`,
            }}>
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h3>
                <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                </li>
                <li class="d-flex align-items-center me-3">
                    
                    <small>Pakistan</small>
                </li>
                <li class="d-flex align-items-center">
                    
                    <small>4d</small>
                </li>
                </ul>
            </div>
            </div>
        </div>

        <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" 
            style={{
                backgroundImage: `url(${bc3})`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center center`,
                backgroundSize: `cover`,
            }}>
            <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
                <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                </li>
                <li class="d-flex align-items-center me-3">
                    
                    <small>California</small>
                </li>
                <li class="d-flex align-items-center">
                    
                    <small>5d</small>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ImgCards;