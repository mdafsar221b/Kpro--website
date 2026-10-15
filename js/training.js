/**
 * training.js — Training scoping form logic.
 */

document.addEventListener('DOMContentLoaded', () => {
  const formWrapper    = document.getElementById('scoping-form-wrapper');
  const successOverlay = document.getElementById('scoping-success-overlay');
  const successMsg     = document.getElementById('scoping-success-msg');
  const scopingForm    = document.getElementById('scoping-form');
  const resetBtn       = document.getElementById('scoping-reset-btn');
  const submitLoader   = document.getElementById('scoping-submit-loader');
  const loaderText     = document.getElementById('scoping-loader-text');

  const nameInput     = document.getElementById('scoping-name');
  const emailInput    = document.getElementById('scoping-email');
  const phoneInput    = document.getElementById('scoping-phone');
  const orgInput      = document.getElementById('scoping-org');
  const audienceInput = document.getElementById('scoping-audience');
  const batchInput    = document.getElementById('scoping-batch');
  const notesInput    = document.getElementById('scoping-notes');

  const RECIPIENT_EMAILS = [
    'smita_kashyap@kpro.co.in',
    'priti_kumari@kpro.co.in',
    'alok_ranjan@kpro.co.in',
    'Bharath_shetty@kpro.co.in',
    'markanday_shukla@kpro.co.in'
  ].join(',');

  // ── VALIDATION ─────────────────────────────────────────────────────────

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const validateField = (input) => {
    let isValid = true;
    let errorEl = null;

    if (input.id === 'scoping-name') {
      isValid = input.value.trim() !== '';
      errorEl = document.getElementById('scoping-name-error');
    } else if (input.id === 'scoping-email') {
      isValid = validateEmail(input.value.trim());
      errorEl = document.getElementById('scoping-email-error');
    } else if (input.id === 'scoping-phone') {
      isValid = input.value.trim() !== '';
      errorEl = document.getElementById('scoping-phone-error');
    } else if (input.id === 'scoping-org') {
      isValid = input.value.trim() !== '';
      errorEl = document.getElementById('scoping-org-error');
    } else if (input.id === 'scoping-audience') {
      isValid = input.value !== '';
      errorEl = document.getElementById('scoping-audience-error');
    } else if (input.id === 'scoping-batch') {
      isValid = input.value !== '';
      errorEl = document.getElementById('scoping-batch-error');
    } else if (input.id === 'scoping-notes') {
      isValid = input.value.trim().length >= 10;
      errorEl = document.getElementById('scoping-notes-error');
    }

    if (errorEl) {
      errorEl.style.display = isValid ? 'none' : 'block';
      input.classList.toggle('invalid', !isValid);
    }
    return isValid;
  };

  [nameInput, emailInput, phoneInput, orgInput, audienceInput, batchInput, notesInput].forEach(input => {
    input.addEventListener('input', () => validateField(input));
    input.addEventListener('blur',  () => validateField(input));
  });

  // ── SUBMISSION ─────────────────────────────────────────────────────────

  scopingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isNameValid     = validateField(nameInput);
    const isEmailValid    = validateField(emailInput);
    const isPhoneValid    = validateField(phoneInput);
    const isOrgValid      = validateField(orgInput);
    const isAudienceValid = validateField(audienceInput);
    const isBatchValid    = validateField(batchInput);
    const isNotesValid    = validateField(notesInput);

    if (!(isNameValid && isEmailValid && isPhoneValid && isOrgValid && isAudienceValid && isBatchValid && isNotesValid)) {
      const firstInvalid = scopingForm.querySelector('.invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const email = emailInput.value.trim();

    formWrapper.style.display = 'none';
    submitLoader.style.display = 'flex';

    const loadingSequence = [
      { time: 0,    text: 'Compiling curriculum requirements...' },
      { time: 400,  text: 'Securing payload parameters...' },
      { time: 800,  text: 'Routing scoping request...' },
      { time: 1050, text: 'Dispatching to academic/corporate desk...' },
    ];

    loadingSequence.forEach(({ time, text }) => setTimeout(() => { loaderText.innerText = text; }, time));

    try {
      let response;
      try {
        response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formType: 'training',
            data: {
              from_name:    nameInput.value.trim(),
              reply_to:     email,
              phone:        phoneInput.value.trim(),
              organization: orgInput.value.trim(),
              audience:     audienceInput.value,
              batch_size:    batchInput.value,
              message:      notesInput.value.trim(),
            },
            recipients:   RECIPIENT_EMAILS
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

      await new Promise(r => setTimeout(r, 1200));
      submitLoader.style.display = 'none';

      if (response.ok) {
        const randomTicket = 'KPRO-EDU-' + Math.floor(10000 + Math.random() * 90000);
        successMsg.innerHTML = `Your training scoping request has been received. <strong>Ticket ID: ${randomTicket}</strong>. An educational advisor will contact you at <strong>${email}</strong> within 24 hours to schedule a curriculum preview.`;
        successOverlay.style.display = 'flex';
      } else {
        const data = await response.json().catch(() => ({}));
        const errMsg = data?.errors?.[0]?.message || 'Submission failed. Please email us at training@kpro.co.in.';
        formWrapper.style.display = 'block';
        alert(`⚠️ ${errMsg}`);
      }

    } catch {
      await new Promise(r => setTimeout(r, 1200));
      submitLoader.style.display = 'none';
      formWrapper.style.display = 'block';
      alert('⚠️ Network error. Please check your connection or email us directly at training@kpro.co.in.');
    }
  });

  resetBtn.addEventListener('click', () => {
    scopingForm.reset();
    [nameInput, emailInput, phoneInput, orgInput, audienceInput, batchInput, notesInput].forEach(input => {
      input.classList.remove('invalid');
    });
    document.querySelectorAll('#scoping-form .validation-error').forEach(el => el.style.display = 'none');
    successOverlay.style.display = 'none';
    formWrapper.style.display = 'block';
  });
});
