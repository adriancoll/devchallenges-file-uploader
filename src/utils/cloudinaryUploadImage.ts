/////////////////////////
// Uploads an image file

import { cloudinaryApi } from "../api";
import { IUploadResponse } from "../interfaces";

/////////////////////////
export const cloudinaryUploadImage = async (file: File) => {
  const options = {
    file,
    upload_preset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string,
    cloud_name: import.meta.env.VITE_CLOUDINARY_USER as string,
  };

  const formData = new FormData();

  Object.entries(options).forEach(([key, value]) => {
    console.log(key, value);
    formData.append(key, value as any);
  });

  try {
    // Upload the image
    const { data } = await cloudinaryApi.post<IUploadResponse>(
      `/${import.meta.env.VITE_CLOUDINARY_USER as string}/image/upload`,
      formData
    );

    return data;
  } catch (error) {
    console.log("miaaaaau");
    throw new Error("Error uploading file.");
  }
};
