import styles from '../legal.module.css';

export const metadata = {
  title: 'Terms & Conditions | Phoolkari Decor Studio',
  description: 'Read the terms and conditions for booking luxury event decoration services with Phoolkari Decor Studio in Amritsar, Punjab.',
  alternates: {
    canonical: 'https://phoolkaridecorstudio.in/terms',
  }
};

export default function Terms() {
  return (
    <main className={styles.legalPage}>
      <div className="container">
        <h1>Terms &amp; Conditions</h1>
        <div className={styles.content}>
          <p>Welcome to Phoolkari Decor Studio. These Terms and Conditions govern your use of our website and services. By engaging with us, you agree to comply with the following terms.</p>
          
          <h2>1. Services &amp; Booking</h2>
          <p>We provide luxury event decoration services in Amritsar and surrounding areas. All bookings are subject to availability and require a confirmed advance payment. Final execution details will be documented in a separate agreement.</p>
          
          <h2>2. Payment Terms</h2>
          <p>A non-refundable advance deposit is required to block dates. The remaining balance must be cleared as per the timeline agreed upon in your booking contract. We accept bank transfers, UPI, and major credit cards.</p>
          
          <h2>3. Cancellations &amp; Refunds</h2>
          <p>Cancellations made within 30 days of the event date may forfeit the entire deposit. We understand emergencies happen, and we try to accommodate date changes subject to availability, but this cannot be guaranteed.</p>
          
          <h2>4. Intellectual Property</h2>
          <p>All designs, sketches, and concepts proposed by Phoolkari Decor Studio remain our intellectual property until the event. Images of our decor may be used for our portfolio and marketing materials.</p>
          
          <h2>5. Liability</h2>
          <p>We are not liable for delays or failures caused by circumstances beyond our control (force majeure), including severe weather, venue restrictions, or vendor delays outside our direct team.</p>
          
          <h2>6. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at <a href="mailto:shivam@phoolkaridecorstudio.in">shivam@phoolkaridecorstudio.in</a>.</p>
        </div>
      </div>
    </main>
  );
}
