# Attach Google Firestore

Google firestore is a document based database that flexibly stores JSON like objects.

1. Navigate to the Firebase Project you would like to attach
2. Go to project settings
3. Go to Service Accounts
4. Under Firebase Admin SDK click "Generate new private key"
5. Download the key to your project directory and rename it to something simpler
6. Include the file in your `.env` file

```bash
# .env
GOOGLE_APPLICATION_CREDENTIALS=./<your-file-name>.json
```

7. Install the Everlast Brands Firestore Package as well as the firebase-admin package

```bash
yarn add @everlast-brands/collection firebase-admin
#or
npm install @everlast-brands/collection firebase-admin
```

8. Configure the firebase admin and collections packages by following [this setup documentation](https://github.com/EverlastBrands/collection)
