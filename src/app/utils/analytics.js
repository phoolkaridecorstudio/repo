/**
 * Safely dispatches Google Analytics 4 (GA4) events
 * Target Measurement ID: G-51HBDGPQR6
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, params);
    } catch (err) {
      // Gracefully silent on tracker blockers
    }
  }
};

export const trackWhatsAppClick = (source = 'unknown') => {
  trackEvent('click_whatsapp', {
    event_category: 'Lead Engagement',
    event_label: source,
    method: 'WhatsApp',
  });
};

export const trackPhoneClick = (phone = '+919155703155', source = 'unknown') => {
  trackEvent('click_phone', {
    event_category: 'Lead Engagement',
    event_label: `${phone} (${source})`,
    method: 'Phone',
  });
};

export const trackLeadSubmit = (details = {}) => {
  trackEvent('generate_lead', {
    event_category: 'Form Submission',
    event_label: details.event || 'General Inquiry',
    lead_type: details.event || 'Inquiry',
    value: 1,
  });
};
