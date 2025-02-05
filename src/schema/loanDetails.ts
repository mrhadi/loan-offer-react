import { z } from 'zod'

export const LoanDetailsSchema = z.object({
  firstName: z.string().trim().nonempty(),
  lastName: z.string().trim().nonempty(),
  email: z.string().email().trim().min(5),
  employmentStatus: z.string(),
  employerName: z.string().optional(),
  vehiclePrice: z.number().min(2000, { message: 'Vehicle price should be at least $2000' }),
  deposit: z.number().min(0),
  loanPurpose: z.string(),
  loanTerm: z.number().gte(1).lte(7),
})
  .superRefine((values,  context) => {
    if (values.employmentStatus === 'employed' && !values.employerName) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please enter employer name",
        path: ["employerName"],
      })
    } else if (values.deposit > values.vehiclePrice) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Deposit amount should be less or equal to vehicle price",
        path: ["deposit"],
      })
    }
  })

export type LoanDetailsType = z.infer<typeof LoanDetailsSchema>
