"use client";
import { MyInput } from "@/components/Variants/Input/MyInput";
import { MyButton } from "@/components/Variants/Button/MyButton";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";

const S3Bucket = () => {
  const [file, setFile] = useState<Record<string, any>>({});
  const [fileData, setFileData] = useState<string>("");

  const sendFile = async () => {
    const response = await fetch(
      "https://016z72h3og.execute-api.us-west-2.amazonaws.com/",
      {
        method: "POST",
        body: JSON.stringify({
          fileName: file.name,
          fileData: fileData,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
  };

  // onChange
  const handleFileChange = (e: any) => {
    const datafile = e.target.files[0];
    setFile(datafile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setFileData(reader.result as string);
    };
    // reads the data and encoded it as base64
    reader.readAsDataURL(datafile);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <MyButton onPress={sendFile}>Send Uplaoded file</MyButton>
    </div>
  );
};

export default S3Bucket;
