"use client";
import { MyInput } from "@/components/Variants/Input/MyInput";
import { MyButton } from "@/components/Variants/Button/MyButton";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";

const S3Bucket = () => {
  const [file, setFile] = useState<any>();
  // const [fileData, setFileData] = useState<string>("");

  const sendFile = async () => {
    const data = new FormData();
    console.log(typeof data);
    if (!file) {
      console.log("Enter an image");
      return;
    }

    data.append("file", file);
    console.log("data ==> ", data);

    const response = await fetch(
      "https://016z72h3og.execute-api.us-west-2.amazonaws.com/",
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify({
          fileName: file.name,
          fileInfo: file,
        }),
      }
    );
    const body = await response.json();
    console.log(body);
  };

  // onChange
  const handleFileChange = (e: any) => {
    const datafile = e.target.files[0];
    setFile(datafile);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <MyButton onPress={sendFile}>Send Uplaoded file</MyButton>
    </div>
  );
};

export default S3Bucket;
