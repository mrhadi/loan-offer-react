import apiClient from './api'
import { LoanDetailsType } from '../schema/loanDetails'
import { OfferDetailsType } from '../schema/offerDetails'

type PostLoanDetailsResponseType = {
  data: Array<OfferDetailsType>
}

class LoanService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  postLoanDetails(entity: LoanDetailsType): Promise<PostLoanDetailsResponseType> {
    return apiClient.post(this.endpoint, entity)
  }
}

const loadService = (endpoint: string) => new LoanService(endpoint)

export default loadService('/loan')
