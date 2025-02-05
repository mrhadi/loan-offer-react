import { useState } from 'react'

import LoanDetailsForm from './components/LoanDetailsForm.tsx'

import { LoanDetailsType } from './schema/loanDetails'
import { OfferDetailsType } from './schema/offerDetails.ts'

import loadService from './services/loanService.ts'
import LoanOffers from './components/LoanOffers.tsx'

function App() {
  const [loanOffersData, setLoanOffersData] = useState<Array<OfferDetailsType>>([])

  const handleLoanDetails = (data: LoanDetailsType) => {
    loadService.postLoanDetails(data)
      .then(res => {
        if (res?.data) {
          setLoanOffersData(res.data)
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <LoanDetailsForm handleSubmit={handleLoanDetails} />
      {loanOffersData.length > 0 && <LoanOffers loanOffers={loanOffersData} />}
    </>
  )
}

export default App
