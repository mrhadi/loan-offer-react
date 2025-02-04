import React from 'react'

const LoanDetails = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First name</label>
        <input type="text" className="form-control" id="firstName"/>
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last name</label>
        <input type="text" className="form-control" id="lastName"/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email"/>
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Employment Status</label>
        <ul className="list-group">
          <li className="list-group-item">Employed</li>
          <li className="list-group-item">Self-Employed</li>
          <li className="list-group-item">Unemployed</li>
        </ul>
      </div>
      <div className="mb-3">
        <label htmlFor="employerName" className="form-label">Employer name</label>
        <input type="text" className="form-control" id="employerName"/>
      </div>
      <div className="mb-3">
        <label htmlFor="vehiclePrice" className="form-label">Vehicle price</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="deposit" className="form-label">Deposit</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="loanPurpose" className="form-label">Loan Purpose</label>
        <input type="text" className="form-control" id="loanPurpose"/>
      </div>
      <div className="mb-3">
        <label htmlFor="loanTerm" className="form-label">Loan Term</label>
        <select className="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </select>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  )
}

export default LoanDetails
