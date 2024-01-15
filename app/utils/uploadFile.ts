import cloudinary from './cloudinary';

export const uploadFile = async (file: File) => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const response = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          tags: ['loyalty-server-action-uploads'],
        },
        function (error, result) {
          if (error) return reject(error);
          resolve(result);
        }
      )
      .end(buffer);
  });

  return response;
};

export const deleteFile = async (publicId: string) => {
  const response = await cloudinary.uploader.destroy(publicId);
  return response;
};
