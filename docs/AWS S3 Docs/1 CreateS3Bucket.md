# Create AWS S3 Bucket

1. Login as the root user to AWS Developer Console
2. Go to Amazon S3 Dashboard
3. Click the Orange Create Bucket Button
4. Add a project name that reflects the buckets purpose in a general sense
   - Ex: "frm-image-bucket" instead of "frm-web-app-images"

**\*Proceed only if you wish to make the bucket files public to the internet at large**
This may be useful for product images or other images that can be safely accessible to the public.

5. Wait for bucket to complete its initialization
6. Click the bucket
7. Select the bucket permissions tab
8. Make access to the bucket completely public by unchecking all private checkboxes
9. Edit the bucket policy by adding the following JSON configuration:

```json
{
  "Version": "2008-10-17",
  "Statement": [
    {
      "Sid": "AllowPublicRead",
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::ffs-app-file-storage/*"
    }
  ]
}
```

10. Edit the access control lists
11. Under "Everyone (public access)" grant Read permissions by clicking the Read Checkbox
    - **DO NOT CLICK THE "WRITE" CHECKBOX**
12. Save bucket settings
