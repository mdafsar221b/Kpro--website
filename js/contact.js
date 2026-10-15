/**
 * contact.js — Contact page logic.
 *
 * SETUP: Replace YOUR_CONTACT_FORM_ID below with your Formspree form ID.
 * Sign up free at https://formspree.io → New Form → copy the ID (e.g. "xpwzjrkb").
 */

// Contact page logic

// 1. FAQ Accordion Toggle
window.toggleFAQ = (button) => {
  const content = button.nextElementSibling;
  const isOpen  = button.classList.contains('active');

  button.classList.toggle('active');
  button.setAttribute('aria-expanded', String(!isOpen));
  content.classList.toggle('open');
  content.style.maxHeight = isOpen ? '0px' : content.scrollHeight + 'px';
};

// 2. Real-time FAQ Filter Search
window.filterFAQs = () => {
  const query = document.getElementById('faq-search').value.toLowerCase().trim();
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const trigger = item.querySelector('.faq-trigger').innerText.toLowerCase();
    const content = item.querySelector('.faq-content').innerText.toLowerCase();
    item.style.display = (trigger.includes(query) || content.includes(query)) ? 'block' : 'none';
  });
};

// 3. Form Setup, Custom Select, and Formspree Submission
document.addEventListener('DOMContentLoaded', () => {
  const formWrapper    = document.getElementById('contact-form-wrapper');
  const successOverlay = document.getElementById('contact-success-overlay');
  const ticketDetails  = document.getElementById('success-ticket-details');
  const inquiryForm    = document.getElementById('contact-inquiry-form');
  const resetBtn       = document.getElementById('contact-reset-btn');
  const submitLoader   = document.getElementById('contact-submit-loader');
  const loaderText     = document.getElementById('contact-loader-text');

  const nameInput    = document.getElementById('con-name');
  const orgInput     = document.getElementById('con-org');
  const emailInput   = document.getElementById('con-email');
  const subjectInput = document.getElementById('con-subject');
  const msgInput     = document.getElementById('con-msg');

  const selectTrigger  = document.getElementById('subject-select-trigger');
  const selectDropdown = document.getElementById('subject-select-dropdown');
  const selectOptions  = selectDropdown.querySelectorAll('.custom-select-option:not(.disabled)');
  const selectLabel    = document.getElementById('subject-select-label-text');

  let activeOptionIndex = -1;

  // ── CUSTOM SELECT LOGIC ────────────────────────────────────────────────

  const toggleDropdown = (shouldOpen) => {
    const isOpen = shouldOpen !== undefined ? shouldOpen : !selectDropdown.classList.contains('open');
    selectTrigger.classList.toggle('active', isOpen);
    selectDropdown.classList.toggle('open', isOpen);
    selectTrigger.setAttribute('aria-expanded', String(isOpen));

    if (isOpen) {
      const selected = selectDropdown.querySelector('.custom-select-option.selected');
      if (selected) { selected.focus(); activeOptionIndex = Array.from(selectOptions).indexOf(selected); }
      else          { activeOptionIndex = -1; }
    } else {
      selectTrigger.focus();
    }
  };

  selectTrigger.addEventListener('click', (e) => { e.stopPropagation(); toggleDropdown(); });
  selectDropdown.addEventListener('click', (e) => { e.stopPropagation(); });

  selectOptions.forEach(option => option.addEventListener('click', () => selectOption(option)));

  const selectOption = (option) => {
    subjectInput.value = option.getAttribute('data-value');
    selectLabel.innerText = option.textContent.trim();

    selectDropdown.querySelectorAll('.custom-select-option').forEach(opt => {
      opt.classList.remove('selected');
      opt.setAttribute('aria-selected', 'false');
    });
    option.classList.add('selected');
    option.setAttribute('aria-selected', 'true');

    validateField(subjectInput);
    toggleDropdown(false);
  };

  document.addEventListener('click', () => {
    if (selectDropdown.classList.contains('open')) toggleDropdown(false);
  });

  selectTrigger.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowDown') { e.preventDefault(); toggleDropdown(true); }
  });

  selectDropdown.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); toggleDropdown(false); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); activeOptionIndex = (activeOptionIndex + 1) % selectOptions.length; selectOptions[activeOptionIndex].focus(); }
    else if (e.key === 'ArrowUp')   { e.preventDefault(); activeOptionIndex = (activeOptionIndex - 1 + selectOptions.length) % selectOptions.length; selectOptions[activeOptionIndex].focus(); }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (activeOptionIndex >= 0) selectOption(selectOptions[activeOptionIndex]); }
  });

  selectOptions.forEach(opt => opt.setAttribute('tabindex', '0'));

  // ── VALIDATION ─────────────────────────────────────────────────────────

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const validateField = (input) => {
    let isValid = true;
    let errorEl = null;

    if      (input.id === 'con-name')    { isValid = input.value.trim() !== ''; errorEl = document.getElementById('con-name-error'); }
    else if (input.id === 'con-org')     { isValid = input.value.trim() !== ''; errorEl = document.getElementById('con-org-error'); }
    else if (input.id === 'con-email')   { isValid = validateEmail(input.value.trim()); errorEl = document.getElementById('con-email-error'); }
    else if (input.id === 'con-subject') {
      isValid = input.value !== '';
      errorEl = document.getElementById('con-subject-error');
      selectTrigger.classList.toggle('invalid', !isValid);
      selectTrigger.classList.toggle('valid', isValid);
    } else if (input.id === 'con-msg') {
      isValid = input.value.trim().length >= 10;
      errorEl = document.getElementById('con-msg-error');
      if (!isValid && input.value.trim().length > 0) errorEl.innerText = 'Please detail your goals (minimum 10 characters).';
      else errorEl.innerText = 'Please describe your project goals.';
    }

    if (errorEl) {
      errorEl.style.display = isValid ? 'none' : 'block';
      input.classList.toggle('invalid', !isValid);
    }
    return isValid;
  };

  [nameInput, orgInput, emailInput, msgInput].forEach(input => {
    input.addEventListener('input', () => validateField(input));
    input.addEventListener('blur',  () => validateField(input));
  });

  // ── FORM SUBMISSION via FORMSPREE ──────────────────────────────────────

  inquiryForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isNameValid    = validateField(nameInput);
    const isOrgValid     = validateField(orgInput);
    const isEmailValid   = validateField(emailInput);
    const isSubjectValid = validateField(subjectInput);
    const isMsgValid     = validateField(msgInput);

    if (!(isNameValid && isOrgValid && isEmailValid && isSubjectValid && isMsgValid)) {
      const firstInvalid = inquiryForm.querySelector('.invalid, .custom-select-trigger.invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const email = emailInput.value.trim();

    // Show animated loader
    formWrapper.style.display = 'none';
    submitLoader.style.display = 'flex';

    const loadingSequence = [
      { time: 0,    text: 'Initializing telemetry handshake...' },
      { time: 400,  text: 'Establishing secure connection...' },
      { time: 800,  text: 'Signing inquiry with Kpro keys...' },
      { time: 1050, text: 'Dispatching to operations team...' },
    ];

    loadingSequence.forEach(({ time, text }) => setTimeout(() => { loaderText.innerText = text; }, time));

    try {
      let response;
      const RECIPIENT_EMAILS = [
        'smita_kashyap@kpro.co.in',
        'priti_kumari@kpro.co.in',
        'alok_ranjan@kpro.co.in',
        'Bharath_shetty@kpro.co.in',
        'markanday_shukla@kpro.co.in'
      ].join(',');

      try {
        response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formType: 'contact',
            data: {
              name:         nameInput.value.trim(),
              organization: orgInput.value.trim(),
              reply_to:     email,
              subject:      subjectInput.value,
              message:      msgInput.value.trim(),
            },
            recipients: RECIPIENT_EMAILS
          }),
        });
      } catch (err) {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          console.warn('⚠️ Kpro API: Local backend function not available. Mocking successful submission for local testing.');
          response = { ok: true };
        } else {
          throw err;
        }
      }

      if (response && !response.ok && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
        console.warn('⚠️ Kpro API: Local backend returned non-200. Mocking success for localhost Vite.');
        response = { ok: true };
      }

      // Wait at least 1.2s for the animation to look intentional
      await new Promise(r => setTimeout(r, 1200));

      submitLoader.style.display = 'none';

      if (response.ok) {
        const randomTicket = 'KPRO-' + Math.floor(10000 + Math.random() * 90000);
        ticketDetails.innerHTML = `Your project inquiry has been received. <strong>Ticket ID: ${randomTicket}</strong>. An operations architect will contact you at <strong>${email}</strong> within 24 hours to schedule a deep-dive call.`;
        successOverlay.style.display = 'flex';
      } else {
        const data = await response.json().catch(() => ({}));
        const errMsg = data?.errors?.[0]?.message || 'Submission failed. Please email us at sales@kpro.co.in.';
        formWrapper.style.display = 'block';
        alert(`⚠️ ${errMsg}`);
      }

    } catch {
      await new Promise(r => setTimeout(r, 1200));
      submitLoader.style.display = 'none';
      formWrapper.style.display = 'block';
      alert('⚠️ Network error. Please check your connection or email us directly at sales@kpro.co.in.');
    }
  });

  // ── RESET LOGIC ───────────────────────────────────────────────────────

  resetBtn.addEventListener('click', () => {
    inquiryForm.reset();
    subjectInput.value = '';
    selectLabel.innerText = 'Select service';
    selectDropdown.querySelectorAll('.custom-select-option').forEach(opt => {
      opt.classList.remove('selected');
      opt.setAttribute('aria-selected', 'false');
    });
    selectTrigger.classList.remove('invalid', 'valid');
    document.querySelectorAll('.validation-error').forEach(el => el.style.display = 'none');
    [nameInput, orgInput, emailInput, msgInput].forEach(input => input.classList.remove('invalid'));
    successOverlay.style.display = 'none';
    formWrapper.style.display = 'block';
  });

  // ── FAQ: add aria-expanded to triggers on load ────────────────────────
  document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.setAttribute('aria-expanded', 'false');
  });

  // ── AUTO-SELECT SUBJECT FROM QUERY PARAMETER ──────────────────────────
  const urlParams = new URLSearchParams(window.location.search);
  const paramSubject = urlParams.get('subject');
  if (paramSubject) {
    const targetOption = Array.from(selectOptions).find(opt => opt.getAttribute('data-value') === paramSubject);
    if (targetOption) {
      selectOption(targetOption);
    }
  }
});
