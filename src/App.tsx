import LoanDetailsForm from './components/LoanDetailsForm.tsx'

import {LoanDetailsType} from './schema/loanDetails'
import loadService from './services/loanService.ts'
import LoanOffers from "./components/LoanOffers.tsx";
import {useState} from "react";
import {OfferDetailsType} from "./schema/offerDetails.ts";

function App() {
  const [loanOffers, setLoanOffers] = useState<OfferDetailsType>([])

  const handleLoanDetails = (data: LoanDetailsType) => {
    console.log(data)

    loadService.postLoanDetails(data)
      .then(res => {
        setLoanOffers(res)
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <LoanDetailsForm handleSubmit={handleLoanDetails} />
      <LoanOffers loanOffers={loanOffers} />
    </>
  )
}

export default App
