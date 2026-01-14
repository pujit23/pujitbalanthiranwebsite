import { forwardRef, useState } from 'react'
import { motion } from 'framer-motion'

const ConnectSection = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const EMAIL_TO = 'pujitbalanthiran23@gmail.com'
  const GITHUB_URL = 'https://github.com/pujit23'
  const LINKEDIN_URL = 'https://www.linkedin.com/in/pujitbalanthiran/'

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const buildMailto = ({ name, email, message }) => {
    const subject = `Website Contact from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`

    const params = new URLSearchParams({
      subject,
      body,
    })

    return `mailto:${encodeURIComponent(EMAIL_TO)}?${params.toString()}`
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    const name = formData.name.trim()
    const email = formData.email.trim()
    const message = formData.message.trim()

    const mailto = buildMailto({ name, email, message })

    // Open default email client (no page reload)
    window.location.href = mailto

    // Let the email client open, then re-enable button shortly after
    window.setTimeout(() => setIsSubmitting(false), 300)
  }

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex items-center py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-2xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-orange to-pink bg-clip-text text-transparent">
            CONNECT
          </span>
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-navy-light border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                errors.name
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-navy-light focus:border-orange focus:ring-orange'
              }`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-navy-light border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-navy-light focus:border-orange focus:ring-orange'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 bg-navy-light border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 resize-none ${
                errors.message
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-navy-light focus:border-orange focus:ring-orange'
              }`}
              placeholder="Your message..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <p className="text-sm text-gray-400">
            This will open your email client
          </p>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-orange to-pink text-white font-semibold text-lg uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-orange/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? 'Opening…' : 'Connect'}
          </motion.button>

          <div className="pt-4 border-t border-navy-light/60">
            <div className="flex items-center gap-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 rounded-full bg-navy-light/50 border border-navy-light flex items-center justify-center text-gray-300 transition-all duration-200 hover:border-orange/60 hover:text-orange hover:bg-orange/10 active:scale-[0.98]"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-full bg-navy-light/50 border border-navy-light flex items-center justify-center text-gray-300 transition-all duration-200 hover:border-orange/60 hover:text-orange hover:bg-orange/10 active:scale-[0.98]"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href={`mailto:${EMAIL_TO}`}
                aria-label="Email"
                className="w-12 h-12 rounded-full bg-navy-light/50 border border-navy-light flex items-center justify-center text-gray-300 transition-all duration-200 hover:border-pink/60 hover:text-pink hover:bg-pink/10 active:scale-[0.98]"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>
            </div>
          </div>
        </motion.form>
      </div>
    </motion.section>
  )
})

ConnectSection.displayName = 'ConnectSection'

export default ConnectSection
