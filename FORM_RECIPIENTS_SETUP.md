# Form Submissions Recipient Setup Guide

To ensure all form submissions (Contact/Inquiries, Careers, Training Scoping, and Newsletter Subscriptions) are delivered to the designated team member email addresses, please follow this guide to configure Formspree.

## Target Recipient Emails
- **Smita Kashyap**: `smita_kashyap@kpro.co.in`
- **Priti Kumari**: `priti_kumari@kpro.co.in`
- **Alok Ranjan**: `alok_ranjan@kpro.co.in`
- **Bharath Shetty**: `Bharath_shetty@kpro.co.in`
- **Markanday Shukla**: `markanday_shukla@kpro.co.in`

---

## Step 1: Configure Formspree Dashboards
Formspree supports routing notifications to multiple addresses using the **Rules** feature (available on Formspree Business plans).

1. Log into your account at [https://formspree.io](https://formspree.io).
2. For each form created (Inquiry Form, Careers Form, Scoping Form, and Newsletter Form):
   - Navigate to the form's dashboard.
   - Click on the **Rules** tab in the top navigation.
   - Click the **Add Rule** button.
   - Set the **Do** column action to **Send Email**.
   - Input the first team email address from the list (e.g. `smita_kashyap@kpro.co.in`).
   - Set the condition selector to **Always**.
   - Save the rule.
   - Repeat this to create **five separate Rules** (one for each team member address) for every form.
3. *Note:* If you are on the Formspree Free tier, you can set up a single target forwarding rule/alias inside your corporate email provider (e.g., G Suite / Outlook) to forward incoming messages automatically to the other four team members.

---

## Step 2: Replace Placeholder IDs in the Codebase
Once your forms are created on Formspree, replace the placeholder IDs in the respective Javascript files in `js/`:

- **Inquiry Form** (`js/contact.js`):
  Change `const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_CONTACT_FORM_ID';`
- **Careers Form** (`js/careers.js`):
  Change `const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_CAREERS_FORM_ID';`
- **Training Form** (`js/training.js`):
  Change `const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_TRAINING_FORM_ID';`
- **Newsletter Subscription** (`js/footer.js`):
  Change `const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID';`

---

## Payload Data Logging
For redundancy and audits, the submission handlers automatically embed the list of recipients inside the JSON payload parameters as `_recipients`. You will see these emails logged inside your Formspree dashboard submissions logs:

```json
{
  "name": "Applicant Name",
  "email": "applicant@email.com",
  "_recipients": "smita_kashyap@kpro.co.in,priti_kumari@kpro.co.in,alok_ranjan@kpro.co.in,Bharath_shetty@kpro.co.in,markanday_shukla@kpro.co.in"
}
```
