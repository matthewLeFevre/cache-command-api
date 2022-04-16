# Attach AWS SES

AWS SES simple email service allows our application server to send emails using our company email domains (ex: no-reply@everlastbrands.com etc...). This email strategy should generally only be used for transactional emails (emails that trigger off of specific user input).

1. Add the following settings and credentials to your `.env` file if you have not already.

```bash
AWS_ACCESS_KEY_ID=xxxxxxx
AWS_SECRET_ACCESS_KEY=xxxxxx
AWS_REGION=xxxxxx
MJML_APP_ID=xxxxxx
MJML_SECRET_KEY=xxxxxxx
```

2. Install our email sender package via yarn or npm

```bash
yarn add @everlast-brands/aws-email-sender
# or
npm install @everlast-brands/aws-email-sender
```

3. Configure the package according to the package [documentation](https://github.com/EverlastBrands/aws-email-sender)
