import React from 'react'

const Signup = () => {
  return (
       <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: "350px" }}>
        <h3 className="text-center text-primary mb-4">Sign Up</h3>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Create Account
          </button>
          <p className='text-center pt-4'>Already had an Account? <a href=''>login</a></p>
        </form>
      </div>
    </div>
  )
}

export default Signup