# Attach AWS S3 Bucket

This step by step list explains how to add an existing AWS S3 storage bucket to a project.

1. Add the following entries to the project .env file

```bash
AWS_ACCESS_KEY_ID=xxxxxxxxxxxxxxx
AWS_SECRET_ACCESS_KEY=xxxxxxxxxxxxx
AWS_S3_BUCKET=name-of-bucket
# commonly we use us-east-2 as our region
AWS_REGION=aws-region
```

2. Install our FileAdapter NPM Module

```bash
yarn add @everlast-brands/s3-file-adapter
#or
npm install @everlast-brands/s3-file-adapter
```

3. Configure the file adapter according to the package [documentation](https://github.com/EverlastBrands/s3-file-adapter)
