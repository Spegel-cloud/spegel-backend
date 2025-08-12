// config/plugins.js
module.exports = ({ env }) => {
  console.log('[Cloudinary]', env('CLOUDINARY_NAME')); // Logger cloud_name ved oppstart

  return {
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
          folder: env('CLOUDINARY_UPLOAD_FOLDER', 'spegel'), // valgfritt
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  };
};
