import LoanDetailsForm from './components/LoanDetailsForm.tsx'

import {LoanDetailsType} from './schema/loanDetails'
import loadService from './services/loanService.ts'

function App() {

  const handleLoanDetails = (data: LoanDetailsType) => {
    console.log(data)

    loadService.postLoanDetails(data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <>
      <LoanDetailsForm handleSubmit={handleLoanDetails} />
    </>
  )
}

export default App
