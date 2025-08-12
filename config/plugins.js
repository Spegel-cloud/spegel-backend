// config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
        // valgfritt – gir orden i Cloudinary
        folder: env('CLOUDINARY_UPLOAD_FOLDER', 'spegel'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
