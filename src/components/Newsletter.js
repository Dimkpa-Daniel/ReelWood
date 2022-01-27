import React from 'react';

const Newsletter = () => {
  return (
    <div className='newsletter'>
    <div className="container-fluid text-center">
        
        <p>All the newsletter straight to your <br />
        inbox. Signup for Reelwood's <br />
        newsletter.</p>
        
        
        <form className='d-flex newsletter-form text-center'>
<input class="form-control me-2 " type="email"  aria-label="email"/>
<button class="btn  me-3   " type="submit">Subscribe</button>
</form> 

        </div>            
</div>
  )
};

export default Newsletter;
