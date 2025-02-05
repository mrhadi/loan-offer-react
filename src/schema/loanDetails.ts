import {z} from 'zod'

export const LoanDetailsSchema = z.object({
  firstName: z.string().trim().min(2),
  lastName: z.string().trim().min(2),
  email: z.string().email().trim().min(5),
  employmentStatus: z.string(),
  employerName: z.string(),
  vehiclePrice: z.number(),
  deposit: z.number(),
  loanPurpose: z.string(),
  loanTerm: z.number().gte(1).lte(7),
})

export type LoanDetailsType = z.infer<typeof LoanDetailsSchema>
