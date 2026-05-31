import { Link } from 'react-router-dom'
import './ThankYou.css'

export default function ThankYou() {
  return (
    <main className="thankyou-page">
      <div className="thankyou-card">
        <div className="thankyou-icon" aria-hidden="true">✓</div>
        <h1>Thank You!</h1>
        <p className="thankyou-message">
          Your message has been submitted successfully. We'll get back to you within
          1–2 business days.
        </p>
        <Link to="/" className="thankyou-btn">Back to Home</Link>
      </div>
    </main>
  )
}
