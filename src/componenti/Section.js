import React from 'react'
import spaghetti from '../assets/spaghetti.jpg'
import ceviche from '../assets/ceviche.jpg'
import fragole from '../assets/fragole.jpg'
import '../index.css'

 function Section() {
  return (
  <>
    <div className='section'>
        <section>
          <div id='carta' className="card mb-4">
            
            <div  id='cartauno'  className= "row">
      
              <div id='myCol' className="col-md-6">
                <img className="img-fluid rounded-left" src={ceviche} alt="project image"/>
              </div>
      
              <div id='myDiv'  class="col-md-6 align-self-center">
      
                <h2 className="font-weight-normal mb-3">Why us</h2>
                <hr/>

                <p className="text-muted">Out or geared it but to best up samples the for she phase of copy would do in divine
                  of taken and the take medical or upper at him in the logbook were, we price his mostly to commas.</p>
      
              </div>

              
      
              <div id='myDiv'  class="col-md-6 align-self-center">
      
                <h2 className="font-weight-normal mb-3">Our events</h2>
                <hr/>

                <p className="text-muted">Out or geared it but to best up samples the for she phase of copy would do in divine
                  of taken and the take medical or upper at him in the logbook were, we price his mostly to commas.</p>
      
              </div>
              
              <div id='myCol' className="col-md-6">
                <img className="img-fluid rounded-left" src={fragole} alt="project image"/>
              </div>




              <div id='myCol' className="col-md-6">
                <img className="img-fluid rounded-left" src={spaghetti} alt="project image"/>
              </div>
      
              <div id='myDiv'  class="col-md-6 align-self-center">
      
                <h2 className="font-weight-normal mb-3">Catering</h2>
                <hr/>
                <p className="text-muted">Out or geared it but to best up samples the for she phase of copy would do in divine
                  of taken and the take medical or upper at him in the logbook were, we price his mostly to commas.</p>
      
              </div>
      
            </div>
      
          </div>
      
        </section></div>
    </>
  )
}
export default Section;