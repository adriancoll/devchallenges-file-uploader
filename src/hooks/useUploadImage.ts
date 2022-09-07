import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UIContext } from "../context";
import { cloudinaryUploadImage } from "../utils";

export const useUploadImage = () => {
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState("");

  const { setCurrentImage } = useContext(UIContext);

  const navigate = useNavigate();

  const upload = async (file: File) => {
    try {
      navigate("/loading");

      const { secure_url } = await cloudinaryUploadImage(file);

      console.log({secure_url});

      setTimeout(() => navigate("/success"), 500);

      setCurrentImage(secure_url);
    } catch (err) {
      navigate("/?error=1");
    }
  };

  useEffect(() => {
    if (!file) return;

    navigate("/loading");
    upload(file);
  }, [file]);

  return { setFile, url };
};
