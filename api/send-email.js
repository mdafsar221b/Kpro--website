const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Enforce POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { formType, data, recipients } = req.body || {};

  if (!formType || !data) {
    return res.status(400).json({ error: 'Missing formType or data payload' });
  }

  // 1. Env Vars Check for Local Dev Sandbox Mode
  const gmailUser = process.env.GMAIL_USER || '';
  const gmailPass = process.env.GMAIL_APP_PASS || '';

  if (!gmailUser || !gmailPass) {
    console.warn('⚠️ GMAIL_USER or GMAIL_APP_PASS not configured. Simulating success in dev sandbox.');
    return res.status(200).json({
      status: 200,
      text: 'OK',
      mocked: true,
      message: 'Local sandbox mode: Email was not sent because GMAIL_USER/GMAIL_APP_PASS are unconfigured.'
    });
  }

  // 2. Transporter configuration using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  // 3. Email Body Generation based on formType
  let subject = '';
  let html = '';

  const cleanData = (val) => String(val || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  if (formType === 'contact') {
    subject = `[Kpro Inquiry] Project Scoping - ${cleanData(data.organization)}`;
    html = `
      <div style="font-family: sans-serif; padding: 20px; line-height: 1.6; max-width: 600px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #00f2fe; margin-top: 0;">New Project Scoping Inquiry</h2>
        <hr style="border: 0; border-top: 1px solid #eee; margin-bottom: 20px;">
        <p><strong>Name:</strong> ${cleanData(data.name)}</p>
        <p><strong>Organization:</strong> ${cleanData(data.organization)}</p>
        <p><strong>Corporate Email:</strong> <a href="mailto:${cleanData(data.reply_to)}">${cleanData(data.reply_to)}</a></p>
        <p><strong>Primary Architecture:</strong> ${cleanData(data.subject)}</p>
        <p><strong>Project Goals / Details:</strong></p>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #00f2fe; font-style: italic;">
          ${cleanData(data.message).replace(/\n/g, '<br>')}
        </div>
      </div>
    `;
  } else if (formType === 'careers') {
    subject = `[Kpro Careers] Application for ${cleanData(data.job_title)} - ${cleanData(data.from_name)}`;
    html = `
      <div style="font-family: sans-serif; padding: 20px; line-height: 1.6; max-width: 600px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #00f2fe; margin-top: 0;">New Job Application</h2>
        <hr style="border: 0; border-top: 1px solid #eee; margin-bottom: 20px;">
        <p><strong>Applicant Name:</strong> ${cleanData(data.from_name)}</p>
        <p><strong>Email Address:</strong> <a href="mailto:${cleanData(data.reply_to)}">${cleanData(data.reply_to)}</a></p>
        <p><strong>Target Role:</strong> ${cleanData(data.job_title)}</p>
        <p><strong>Portfolio / CV Link:</strong> <a href="${cleanData(data.portfolio)}" target="_blank">${cleanData(data.portfolio) || 'Not provided'}</a></p>
        <p><strong>Cover Note / Summary:</strong></p>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #00f2fe; font-style: italic;">
          ${cleanData(data.message).replace(/\n/g, '<br>')}
        </div>
      </div>
    `;
  } else if (formType === 'training') {
    subject = `[Kpro Scoping] Curriculum Request - ${cleanData(data.organization)}`;
    html = `
      <div style="font-family: sans-serif; padding: 20px; line-height: 1.6; max-width: 600px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #00f2fe; margin-top: 0;">New Training Scoping Request</h2>
        <hr style="border: 0; border-top: 1px solid #eee; margin-bottom: 20px;">
        <p><strong>Contact Name:</strong> ${cleanData(data.from_name)}</p>
        <p><strong>Work Email:</strong> <a href="mailto:${cleanData(data.reply_to)}">${cleanData(data.reply_to)}</a></p>
        <p><strong>Phone:</strong> ${cleanData(data.phone)}</p>
        <p><strong>Institution / Company:</strong> ${cleanData(data.organization)}</p>
        <p><strong>Target Audience:</strong> ${cleanData(data.audience)}</p>
        <p><strong>Expected Batch Size:</strong> ${cleanData(data.batch_size)}</p>
        <p><strong>Requirements Details:</strong></p>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #00f2fe; font-style: italic;">
          ${cleanData(data.message).replace(/\n/g, '<br>')}
        </div>
      </div>
    `;
  } else if (formType === 'newsletter') {
    subject = `[Kpro Subscription] Newsletter Sign-up`;
    html = `
      <div style="font-family: sans-serif; padding: 20px; line-height: 1.6; max-width: 600px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #00f2fe; margin-top: 0;">New Newsletter Subscription</h2>
        <hr style="border: 0; border-top: 1px solid #eee; margin-bottom: 20px;">
        <p><strong>Email Address:</strong> <a href="mailto:${cleanData(data.reply_to)}">${cleanData(data.reply_to)}</a></p>
        <p>This user has requested quarterly case study updates.</p>
      </div>
    `;
  } else {
    return res.status(400).json({ error: 'Unknown formType' });
  }

  // 4. Send Email via Gmail SMTP
  try {
    const toList = recipients || 'smita_kashyap@kpro.co.in,priti_kumari@kpro.co.in,alok_ranjan@kpro.co.in,Bharath_shetty@kpro.co.in,markanday_shukla@kpro.co.in';

    await transporter.sendMail({
      from: `"Kpro Website" <${gmailUser}>`,
      to: toList,
      replyTo: data.reply_to || gmailUser,
      subject: subject,
      html: html,
    });

    return res.status(200).json({ status: 200, text: 'OK' });
  } catch (err) {
    console.error('Nodemailer Send Error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
