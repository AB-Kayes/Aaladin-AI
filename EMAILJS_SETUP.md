# EmailJS Setup Guide

This guide will help you set up EmailJS to replace Resend for email functionality in your Aaladin AI project.

## 📋 Prerequisites

1. Create an EmailJS account at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)

## 🔧 Step 1: EmailJS Account Setup

1. **Sign up for EmailJS**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create a free account
   - Verify your email address

2. **Add Email Service**
   - Go to "Email Services" in your dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions for your provider
   - Note down your **Service ID**

## 🔧 Step 2: Create Email Template

You need to create **1 universal email template** that can handle all email types:

### Universal Email Template
- **Template ID**: `aaladin_template` (or any name you prefer)
- **Subject**: `{{subject}}`
- **Content**:
```
Subject: {{subject}}

{{message}}

---
Aaladin AI Team
```

**Template Variables Used:**
- `{{subject}}` - Email subject line
- `{{message}}` - Email content/body
- `{{to_email}}` - Recipient email
- `{{from_name}}` - Sender name
- `{{verification_code}}` - For verification emails
- `{{client_name}}` - Client name
- `{{client_email}}` - Client email
- `{{budget}}` - Project budget
- `{{timeline}}` - Project timeline
- `{{services}}` - Required services
- `{{additional_details}}` - Project details
- `{{submission_date}}` - Submission date
- `{{contact_email}}` - Contact email

## 🔧 Step 3: Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# EmailJS Configuration (Client-side - must use NEXT_PUBLIC_ prefix)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=aaladin_template
```

## 🔧 Step 4: Get Your EmailJS Credentials

1. **Service ID**: Found in "Email Services" section
2. **Public Key**: Found in "Account" → "General" section
3. **Template ID**: Use the single template ID you created (aaladin_template)

## 🔧 Step 5: Install Dependencies

Run the following command to install EmailJS:

```bash
npm install @emailjs/browser
```

## 🔧 Step 6: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Fill out the contact form
3. Check if verification email is sent
4. Complete the verification process
5. Verify that both business and client emails are sent

## 🐛 Troubleshooting

### Common Issues:

1. **"EmailJS service not configured"**
   - Check that all environment variables are set correctly
   - Verify your Service ID and Public Key

2. **"Template not found"**
   - Ensure template ID matches exactly
   - Check that template is published in EmailJS dashboard

3. **"Failed to send email"**
   - Verify your email service is properly configured
   - Check EmailJS dashboard for error logs
   - Ensure your email service has proper permissions

4. **Emails going to spam**
   - Configure SPF, DKIM, and DMARC records for your domain
   - Use a professional email address

## 📊 EmailJS Limits

- **Free Plan**: 200 emails/month
- **Paid Plans**: Start at $15/month for 1,000 emails
- **Rate Limits**: 200 requests per hour on free plan

## 🔒 Security Notes

- Never expose your EmailJS private keys in client-side code
- Use environment variables for all sensitive data
- Consider implementing rate limiting for production use
- Monitor email usage to avoid hitting limits

## 📞 Support

If you encounter issues:
1. Check EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Review EmailJS dashboard for error logs
3. Test with a simple email first before implementing complex templates

## ✅ Verification Checklist

- [ ] EmailJS account created
- [ ] Email service configured
- [ ] 3 email templates created
- [ ] Environment variables set
- [ ] Dependencies installed
- [ ] Test emails sent successfully
- [ ] Business email received
- [ ] Client confirmation email received
