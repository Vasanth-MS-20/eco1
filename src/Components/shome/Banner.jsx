import React from 'react'

const Banner = () => {
  return (
    <>
      {/* <img src="https://img.freepik.com/psd-premium/modelo-de-banner-para-venda-de-moda-online_23-2148585403.jpg?w=2000" alt="banner" className='img-fluid d-block m-auto' /> */}

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://img.freepik.com/psd-premium/modelo-de-banner-para-venda-de-moda-online_23-2148585403.jpg?w=2000" className="img-fluid d-block m-auto w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=1380&t=st=1719794908~exp=1719795508~hmac=0c6157b5c36f6480395f9df43333276b0570a8dc808ce58cc05d140a8fdf2424" className="img-fluid d-block m-auto  w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-psd/banner-template-online-shopping_23-2148537543.jpg?w=1380&t=st=1718594617~exp=1718595217~hmac=2c043c42434141a6ab8cb81d91c0349dd6e17d87e2b89d7fbebc3067a8b36738" className="img-fluid d-block m-auto  w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Banner