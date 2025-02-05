import { OfferDetailsType } from '../schema/offerDetails'

interface LoanOffersProps {
  loanOffers: Array<OfferDetailsType>
}

const LoanOffers = (props: LoanOffersProps) => {
  return (
    <div className="container mt-5">
      <h4>Your Loan Offers from our Lenders</h4>
      <table className="table table-striped table-bordered">
        <thead className="table">
        <tr>
          <th>Lender</th>
          <th>Monthly Repayments</th>
          <th>Interest Rate</th>
          <th>Fees</th>
        </tr>
        </thead>
        <tbody>
        {props.loanOffers.map((loanOffer: OfferDetailsType) => (
          <tr>
            <td>{loanOffer.lender}</td>
            <td>{loanOffer.monthlyRepayments}</td>
            <td>{loanOffer.interestRate}</td>
            <td>{loanOffer.fees}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default LoanOffers
