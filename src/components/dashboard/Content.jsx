import React, { useState } from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const Content = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    if (file) {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", file);

      fetch(
        "https://spiritual-anglerfish-sodbridge.koyeb.app/api/orders/upload-file/",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => {
          setIsUploading(false);
          if (response.ok) {
            message.success("File uploaded successfully");
          } else {
            message.error("Failed to upload file");
          }
        })
        .catch((error) => {
          setIsUploading(false);
          console.error("Error uploading file:", error);
          message.error("Failed to upload file");
        });
    } else {
      message.error("Please upload a file first");
    }
  };

  const beforeUploadHandler = (file) => {
    const isCSV = file.type === "text/csv";
    if (!isCSV) {
      message.error("You can only upload CSV files!");
    } else {
      setFile(file);
    }
    return false;
  };

  const handleDownload = async () => {
    try {
      message.loading({ content: 'Downloading CSV file...', key: 'downloading' });
      const response = await fetch('https://spiritual-anglerfish-sodbridge.koyeb.app/api/orders/download/csv');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'orders.csv');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      message.success({ content: 'CSV file downloaded successfully', key: 'downloading' });
    } catch (error) {
      console.error('Error downloading CSV:', error);
      message.error({ content: 'Failed to download CSV file', key: 'downloading' });
    }
  };


  return (
    <div className="w-[80%] h-[100vh] bg-[#fff]">
      <nav className="box bg-[#fff] h-[100px] px-[40px]">
        <div className="text-[#000] pt-[35px] text-[25px] font-[700]">
          <h1>Welcome Emzy King's</h1>
        </div>
      </nav>
      <div className="px-[40px] py-[30px] flex flex-col gap-5">
        <div className="flex gap-2">
          <Upload beforeUpload={beforeUploadHandler}>
            <Button icon={<UploadOutlined />} disabled={isUploading}>
              Upload CSV File
            </Button>
          </Upload>
          <Button onClick={handleUpload} disabled={!file || isUploading}>
            {isUploading ? "Uploading..." : "Upload"}
          </Button>
        </div>
        <Button onClick={handleDownload} disabled={isUploading}>
          Download CSV
        </Button>
      </div>
    </div>
  );
};

export default Content;
