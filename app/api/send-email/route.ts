import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const DEFAULT_RECIPIENTS = [
  'smita_kashyap@kpro.co.in',
  'priti_kumari@kpro.co.in',
  'alok_ranjan@kpro.co.in',
  'Bharath_shetty@kpro.co.in',
  'markanday_shukla@kpro.co.in',
].join(',');

function sanitize(val: unknown): string {
  return String(val || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formType, data, recipients } = body || {};

    if (!formType || !data) {
      return NextResponse.json(
        { error: 'Missing formType or data payload' },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || '';
    const gmailPass = process.env.GMAIL_APP_PASS || '';

    if (!gmailUser || !gmailPass) {
      console.warn('GMAIL_USER or GMAIL_APP_PASS not configured. Sandbox mode active.');
      return NextResponse.json({
        status: 200,
        mocked: true,
        message: 'Sandbox mode: Email simulated successfully.',
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    let subject = '';
    let html = '';

    if (formType === 'contact') {
      subject = `[Kpro Inquiry] Scoping Request - ${sanitize(data.organization || data.name)}`;
      html = `
        <div style="font-family: Arial, sans-serif; padding: 24px; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0052cc; margin-top: 0;">New Project Scoping Inquiry</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 20px;">
          <p><strong>Name:</strong> ${sanitize(data.name)}</p>
          <p><strong>Organization:</strong> ${sanitize(data.organization)}</p>
          <p><strong>Corporate Email:</strong> <a href="mailto:${sanitize(data.reply_to)}">${sanitize(data.reply_to)}</a></p>
          <p><strong>Subject / Practice Area:</strong> ${sanitize(data.subject)}</p>
          <p><strong>Project Goals / Requirements:</strong></p>
          <div style="background: #f8fafc; padding: 16px; border-radius: 6px; border-left: 4px solid #0052cc;">
            ${sanitize(data.message).replace(/\n/g, '<br>')}
          </div>
        </div>
      `;
    } else if (formType === 'careers') {
      subject = `[Kpro Careers] Application: ${sanitize(data.job_title)} - ${sanitize(data.from_name)}`;
      html = `
        <div style="font-family: Arial, sans-serif; padding: 24px; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0052cc; margin-top: 0;">New Job Application</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 20px;">
          <p><strong>Applicant Name:</strong> ${sanitize(data.from_name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${sanitize(data.reply_to)}">${sanitize(data.reply_to)}</a></p>
          <p><strong>Role Applied For:</strong> ${sanitize(data.job_title)}</p>
          <p><strong>Portfolio / CV Link:</strong> <a href="${sanitize(data.portfolio)}" target="_blank">${sanitize(data.portfolio) || 'Not provided'}</a></p>
          <p><strong>Cover Note:</strong></p>
          <div style="background: #f8fafc; padding: 16px; border-radius: 6px; border-left: 4px solid #0052cc;">
            ${sanitize(data.message).replace(/\n/g, '<br>')}
          </div>
        </div>
      `;
    } else if (formType === 'training') {
      subject = `[Kpro Academy] Training Scoping - ${sanitize(data.organization)}`;
      html = `
        <div style="font-family: Arial, sans-serif; padding: 24px; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0052cc; margin-top: 0;">New Training Scoping Request</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 20px;">
          <p><strong>Contact Name:</strong> ${sanitize(data.from_name)}</p>
          <p><strong>Work Email:</strong> <a href="mailto:${sanitize(data.reply_to)}">${sanitize(data.reply_to)}</a></p>
          <p><strong>Phone:</strong> ${sanitize(data.phone)}</p>
          <p><strong>Organization / Institution:</strong> ${sanitize(data.organization)}</p>
          <p><strong>Audience Profile:</strong> ${sanitize(data.audience)}</p>
          <p><strong>Batch Size:</strong> ${sanitize(data.batch_size)}</p>
          <p><strong>Curriculum Requirements:</strong></p>
          <div style="background: #f8fafc; padding: 16px; border-radius: 6px; border-left: 4px solid #0052cc;">
            ${sanitize(data.message).replace(/\n/g, '<br>')}
          </div>
        </div>
      `;
    } else if (formType === 'newsletter') {
      subject = `[Kpro Subscription] New Newsletter Subscriber`;
      html = `
        <div style="font-family: Arial, sans-serif; padding: 24px; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0052cc; margin-top: 0;">New Executive Briefing Subscription</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 20px;">
          <p><strong>Subscriber Email:</strong> <a href="mailto:${sanitize(data.reply_to)}">${sanitize(data.reply_to)}</a></p>
          <p>User requested quarterly architectural insights.</p>
        </div>
      `;
    } else {
      return NextResponse.json({ error: 'Unknown formType' }, { status: 400 });
    }

    const toList = recipients || DEFAULT_RECIPIENTS;

    await transporter.sendMail({
      from: `"Kpro Website" <${gmailUser}>`,
      to: toList,
      replyTo: data.reply_to || gmailUser,
      subject,
      html,
    });

    return NextResponse.json({ status: 200, text: 'OK' });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to dispatch email' },
      { status: 500 }
    );
  }
}
