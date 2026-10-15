// Careers Page Logic
document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.getElementById('apply-modal');
  const modalFormScreen = document.getElementById('modal-form-screen');
  const modalSuccessScreen = document.getElementById('modal-success-screen');
  const targetJobTitle = document.getElementById('target-job-title');
  const applyForm = document.getElementById('apply-form');
  const submitLoader = document.getElementById('apply-submit-loader');
  const loaderText = document.getElementById('apply-loader-text');
  
  const closeBtn = document.getElementById('apply-modal-close-btn');
  const successCloseBtn = document.getElementById('success-close-btn');
  const filterSearch = document.getElementById('job-search');
  const filterDept = document.getElementById('department-filter');

  // Input Fields
  const nameInput = document.getElementById('app-name');
  const emailInput = document.getElementById('app-email');
  const portfolioInput = document.getElementById('app-portfolio');
  const noteInput = document.getElementById('app-note');

  // --- JOB FILTERING LOGIC ---

  const filterJobs = () => {
    const searchVal = filterSearch.value.toLowerCase().trim();
    const deptVal = filterDept.value;
    const cards = document.querySelectorAll('.job-card');

    cards.forEach(card => {
      const title = card.querySelector('.job-title').innerText.toLowerCase();
      const skills = Array.from(card.querySelectorAll('.job-skill-tag')).map(t => t.innerText.toLowerCase()).join(' ');
      const cardDept = card.getAttribute('data-department');

      const matchesSearch = title.includes(searchVal) || skills.includes(searchVal);
      const matchesDept = (deptVal === 'all') || (cardDept === deptVal);

      if (matchesSearch && matchesDept) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
        }, 50);
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
      }
    });
  };

  if (filterSearch) filterSearch.addEventListener('keyup', filterJobs);
  if (filterDept) filterDept.addEventListener('change', filterJobs);

  // --- MODAL LOGIC ---

  const openApplyModal = (jobTitle) => {
    targetJobTitle.innerText = jobTitle;
    modalFormScreen.style.display = 'block';
    submitLoader.style.display = 'none';
    modalSuccessScreen.style.display = 'none';
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock background scroll
    nameInput.focus();
  };

  const closeApplyModal = () => {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = ''; // Release scroll lock
    applyForm.reset();
    
    // Clear validation states
    document.querySelectorAll('.validation-error').forEach((el) => {
      el.style.display = 'none';
    });
    [nameInput, emailInput, portfolioInput, noteInput].forEach((input) => {
      input.classList.remove('invalid');
    });
  };

  // Bind dynamic job cards
  document.querySelectorAll('.btn-apply').forEach((btn) => {
    btn.addEventListener('click', () => {
      const job = btn.getAttribute('data-job');
      openApplyModal(job);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeApplyModal);
  if (successCloseBtn) successCloseBtn.addEventListener('click', closeApplyModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeApplyModal();
      }
    });
  }

  // --- VALIDATION LOGIC ---

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const validateUrl = (url) => {
    if (url.trim() === '') return true; // Optional field
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  const validateField = (input) => {
    let isValid = true;
    let errorEl = null;

    if (input.id === 'app-name') {
      isValid = input.value.trim() !== '';
      errorEl = document.getElementById('app-name-error');
    } else if (input.id === 'app-email') {
      isValid = validateEmail(input.value.trim());
      errorEl = document.getElementById('app-email-error');
    } else if (input.id === 'app-portfolio') {
      isValid = validateUrl(input.value.trim());
      errorEl = document.getElementById('app-portfolio-error');
    } else if (input.id === 'app-note') {
      isValid = input.value.trim().length >= 10;
      errorEl = document.getElementById('app-note-error');
      if (!isValid && input.value.trim().length > 0) {
        errorEl.innerText = "Cover note is too brief (minimum 10 characters).";
      } else {
        errorEl.innerText = "Please enter a cover note.";
      }
    }

    if (errorEl) {
      if (isValid) {
        errorEl.style.display = 'none';
        input.classList.remove('invalid');
      } else {
        errorEl.style.display = 'block';
        input.classList.add('invalid');
      }
    }

    return isValid;
  };

  [nameInput, emailInput, portfolioInput, noteInput].forEach((input) => {
    input.addEventListener('input', () => validateField(input));
    input.addEventListener('blur', () => validateField(input));
  });

  // --- APPLICATION SUBMISSION WITH LOADER ---
  const RECIPIENT_EMAILS = [
    'smita_kashyap@kpro.co.in',
    'priti_kumari@kpro.co.in',
    'alok_ranjan@kpro.co.in',
    'Bharath_shetty@kpro.co.in',
    'markanday_shukla@kpro.co.in'
  ].join(',');

  applyForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput);
    const isEmailValid = validateField(emailInput);
    const isPortfolioValid = validateField(portfolioInput);
    const isNoteValid = validateField(noteInput);

    if (!isNameValid || !isEmailValid || !isPortfolioValid || !isNoteValid) {
      const invalidFields = applyForm.querySelectorAll('.invalid');
      if (invalidFields.length > 0) {
        invalidFields[0].focus();
      }
      return;
    }

    modalFormScreen.style.display = 'none';
    submitLoader.style.display = 'flex';

    const sequence = [
      { time: 0, text: 'Compiling applicant credentials...' },
      { time: 400, text: 'Encrypting resume metadata...' },
      { time: 800, text: 'Publishing application telemetry vectors...' },
      { time: 1050, text: 'Finalizing dispatch...' }
    ];

    sequence.forEach((step) => {
      setTimeout(() => {
        loaderText.innerText = step.text;
      }, step.time);
    });

    try {
      let response;
      try {
        response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formType: 'careers',
            data: {
              from_name: nameInput.value.trim(),
              reply_to:  emailInput.value.trim(),
              portfolio: portfolioInput.value.trim(),
              message:   noteInput.value.trim(),
              job_title: targetJobTitle.innerText,
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

      await new Promise(r => setTimeout(r, 1200));
      submitLoader.style.display = 'none';

      if (response.ok) {
        modalSuccessScreen.style.display = 'flex';
      } else {
        const data = await response.json().catch(() => ({}));
        const errMsg = data?.errors?.[0]?.message || 'Submission failed. Please email your CV directly to careers@kpro.co.in.';
        modalFormScreen.style.display = 'block';
        alert(`⚠️ ${errMsg}`);
      }

    } catch (e) {
      await new Promise(r => setTimeout(r, 1200));
      submitLoader.style.display = 'none';
      modalFormScreen.style.display = 'block';
      alert('⚠️ Network error. Please check your connection or email your CV directly to careers@kpro.co.in.');
    }
  });
});

