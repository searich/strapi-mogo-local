module.exports = ({ env }) => ({
    upload: {
      provider: 'qiniu',
      providerOptions: {
        accessKey: env('QINIU_ACCESS_KEY_ID'),
        secretKey: env('QINIU_SECRET_KEY_ID'),
        zone: 'qiniu.zone.Zone_z2',
          params: {
            publicBucketDomain: env('QINIU_PUBLIC_BUCKET_DOMAIN'),
            bucket: 'qnlocalimgs',
            prefix: 'products',
            appendFileExtInKey: 'yes',
        }
      },
    },
  });