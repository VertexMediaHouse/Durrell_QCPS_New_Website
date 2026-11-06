import { useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { offerPage } from '../data/siteContent'
import { Icon } from './ui'

type FormState = { name: string; phone: string; email: string; address: string; consent: boolean }
type Errors = Partial<Record<keyof FormState, string>>
const textFields = ['name', 'phone', 'email', 'address'] as const
const inputTypes = { name: 'text', phone: 'tel', email: 'email', address: 'text' } as const
const autoComplete = { name: 'name', phone: 'tel', email: 'email', address: 'street-address' } as const

function validate(v: FormState): Errors {
  const e: Errors = {}
  if (!v.name.trim()) e.name = offerPage.errors.name
  if (!/^[0-9()+\-\s]{7,}$/.test(v.phone.trim())) e.phone = offerPage.errors.phone
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = offerPage.errors.email
  if (!v.address.trim()) e.address = offerPage.errors.address
  if (!v.consent) e.consent = offerPage.errors.consent
  return e
}

export default function OfferForm() {
  const [params] = useSearchParams()
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', address: params.get('address') ?? '', consent: false })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next = validate(form)
    setErrors(next)
    if (Object.keys(next).length === 0) setSubmitted(true)
  }

  return (
    <div className="rounded-[20px] bg-white p-6 shadow-card">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            role="status"
            className="flex flex-col items-center gap-4 py-10 text-center"
          >
            <span className="flex size-16 items-center justify-center rounded-full bg-light text-primary">
              <Icon.CheckCircle className="size-9" />
            </span>
            <p className="text-[28px] leading-9 font-medium tracking-[-1px] text-ink">{offerPage.successTitle}</p>
            <p className="max-w-[380px] text-lg leading-[26px] text-ink">{offerPage.successMessage}</p>
          </motion.div>
        ) : (
          <motion.form key="form" exit={{ opacity: 0 }} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <p className="text-2xl leading-8 font-medium tracking-[-0.5px] text-ink">{offerPage.formTitle}</p>
            {textFields.map((field) => (
              <div key={field} className="flex flex-col gap-2.5">
                <label htmlFor={`offer-${field}`} className="text-lg leading-[22px] text-ink">
                  {offerPage.fields[field].label}
                </label>
                <input
                  id={`offer-${field}`}
                  type={inputTypes[field]}
                  autoComplete={autoComplete[field]}
                  placeholder={offerPage.fields[field].placeholder}
                  value={form[field]}
                  aria-invalid={!!errors[field]}
                  aria-describedby={errors[field] ? `offer-${field}-error` : undefined}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className={`rounded-[10px] border bg-light px-3 py-3 text-base text-ink transition-colors outline-none placeholder:text-ink/50 focus:border-primary focus:bg-white ${
                    errors[field] ? 'border-ink' : 'border-transparent'
                  }`}
                />
                {errors[field] && (
                  <p id={`offer-${field}-error`} className="text-sm text-ink font-semibold">
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <label className="flex items-start gap-3 text-sm leading-5 text-ink">
                <input
                  type="checkbox"
                  checked={form.consent}
                  aria-invalid={!!errors.consent}
                  aria-describedby={errors.consent ? 'offer-consent-error' : undefined}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                  className="mt-0.5 size-4 shrink-0 accent-primary"
                />
                <span>
                  {offerPage.consentLabel}{' '}
                  <Link to={offerPage.consentLink.href} className="text-primary underline underline-offset-2">
                    {offerPage.consentLink.label}
                  </Link>
                  .
                </span>
              </label>
              {errors.consent && (
                <p id="offer-consent-error" className="text-sm text-ink font-semibold">
                  {errors.consent}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-3 text-base leading-5 font-semibold text-white transition duration-300 hover:bg-ink hover:shadow-[0_8px_20px_-6px_rgba(37,138,130,0.6)]"
            >
              {offerPage.submit}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
