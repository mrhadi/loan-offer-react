import apiClient from './api'
import { LoanDetailsType } from '../schema/loanDetails'

class LoanService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  postLoanDetails(entity: LoanDetailsType) {
    return apiClient.post(this.endpoint, entity)
  }
}

const loadService = (endpoint: string) => new LoanService(endpoint)

export default loadService('/loan')
