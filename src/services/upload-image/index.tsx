import api from "../axiosInstance";

export const UploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const { data } = await api.post("/media", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    return data.media._id;
  } catch (e) {}
};
