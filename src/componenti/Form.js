import React from 'react'
import"./form.css"

 function Form() {
  return (
    <div className='contenitoreform'>
        <h1>CONTACT US</h1>
    <form >
  <div data-mdb-input-init className="form-outline mb-4">
    <input type="text" id="form4Example1" className="form-control" placeholder='Name' />
    <label className="form-label" for="form4Example1"></label>
  </div>

  <div data-mdb-input-init className="form-outline mb-4">
    <input type="email" id="form4Example2" className="form-control" placeholder='E-mail' />
    <label className="form-label" for="form4Example2"></label>
  </div>

  <div data-mdb-input-init className="form-outline mb-4">
    <textarea className="form-control" id="form4Example3" rows="4" placeholder="Message"></textarea>
    <label className="form-label" for="form4Example3"></label>
  </div>

  

  <button id='buttonform'data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Send</button>
</form>
</div>
  )
}export default Form
