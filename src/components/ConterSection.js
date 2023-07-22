import React from 'react'

function ConterSection() {

  let items = [
    {
      image: 'https://random.imagecdn.app/500/500',
      metrics: '50',
      title: 'Clientes',
    },
    {
      image: 'https://random.imagecdn.app/500/500',
      metrics: '500',
      title: 'Empleados',
    },
    {
      image: 'https://random.imagecdn.app/500/500',
      metrics: '100',
      title: 'Modelos',
    },
    {
      image: 'https://random.imagecdn.app/500/500',
      metrics: '500',
      title: 'vendidas',
    },
  ]

  return (
    <section className="py-4 text-dark" 
        style={{padding:'10%'}}
    >
      <div 
        className="row justify-content-center py-2"
        style={{
          maginLeft : '0',
          marginTop : '0',
        }}
      >
        {items.map((item) => (
          <div className="col-xl-3 col-lg-4 col-md-5 col-12 py-1 gap-1">
            <div 
              className='row'
              
            >
              <div className="col-xl-9 col-lg-9 col-md-9 col-9 py-1">
                <img 
                  src={item.image} 
                  style={{
                    width: '69%',
                    height: 'auto',
                    maxWidth: '100%',
                  }}
                  alt="" />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-3 py-1">
                <h3 className="title1">{item.metrics}</h3>  
                <h3 className="title2 py-1">{item.title}</h3>  
              </div>
            </div>
          </div>  
        
        ))}
      </div>
    </section>
  )
}

export default ConterSection;