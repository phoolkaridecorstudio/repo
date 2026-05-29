import styles from '../legal.module.css';

export const metadata = {
  title: 'Privacy Policy | Phoolkari Decor Studio',
  description: 'Privacy Policy for Phoolkari Decor Studio. Learn how we collect, use, and protect your personal information when you book our event services.',
  alternates: {
    canonical: 'https://phoolkaridecorstudio.in/privacy',
  }
};

export default function PrivacyPolicy() {
  return (
    <main className={styles.legalPage}>
      <div className="container">
        <h1>Privacy Policy</h1>
        <div className={styles.content}>
          <p>At Phoolkari Decor Studio, we respect your privacy and are committed to protecting your personal data. This policy outlines how we handle your information.</p>
          
          <h2>1. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, such as your name, email address, phone number, and event details.</p>
          
          <h2>2. How We Use Your Information</h2>
          <p>We use the personal information collected to:</p>
          <ul>
            <li>Provide you with accurate quotes and consultation services.</li>
            <li>Communicate with you regarding your event planning.</li>
            <li>Send administrative information or updates to our terms.</li>
            <li>Improve our website and customer experience.</li>
          </ul>
          
          <h2>3. Sharing Your Information</h2>
          <p>We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners for the purposes outlined above.</p>
          
          <h2>4. Data Security</h2>
          <p>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>
          
          <h2>5. Your Rights</h2>
          <p>You have the right to request access to the personal data we hold about you, or to ask us to correct or delete it. Please contact us to exercise these rights.</p>
          
          <h2>6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:shivam@phoolkaridecorstudio.in">shivam@phoolkaridecorstudio.in</a>.</p>
        </div>
      </div>
    </main>
  );
}
