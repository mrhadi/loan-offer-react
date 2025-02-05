import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
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

type LoanDetailsFormData = z.infer<typeof schema>

const LoanDetailsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoanDetailsFormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First name
        </label>
        <input
          {...register("firstName")}
          type="text"
          className="form-control"
          id="firstName"
        />
        {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last name
        </label>
        <input
          {...register("lastName")}
          type="text"
          className="form-control"
          id="lastName"
        />
        {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          className="form-control"
          id="email"
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Employment Status
        </label>
        <select
          {...register("employmentStatus")}
          className="form-control"
          id="employmentStatus"
        >
          <option>Employed</option>
          <option>Self-Employed</option>
          <option>Unemployed</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="employerName" className="form-label">
          Employer name
        </label>
        <input
          {...register("employerName")}
          type="string"
          className="form-control"
          id="email"
        />
        {errors.employerName && <p className="text-danger">{errors.employerName.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="vehiclePrice" className="form-label">
          Vehicle price
        </label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input
            {...register("vehiclePrice", { valueAsNumber: true })}
            type="string"
            className="form-control"
            id="vehiclePrice"
          />
          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>
        {errors.vehiclePrice && <p className="text-danger">{errors.vehiclePrice.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="deposit" className="form-label">
          Deposit
        </label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input
            {...register("deposit", { valueAsNumber: true })}
            type="string"
            className="form-control"
            id="deposit"
          />
          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>
        {errors.deposit && <p className="text-danger">{errors.deposit.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="loanPurpose" className="form-label">
          Loan Purpose
        </label>
        <input
          {...register("loanPurpose")}
          type="string"
          className="form-control"
          id="loanPurpose"
        />
        {errors.loanPurpose && <p className="text-danger">{errors.loanPurpose.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="loanTerm" className="form-label">
          Loan Term
        </label>
        <select
          {...register("loanTerm", { valueAsNumber: true })}
          className="form-control"
          id="loanTerm"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </select>
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  )
}

export default LoanDetailsForm
