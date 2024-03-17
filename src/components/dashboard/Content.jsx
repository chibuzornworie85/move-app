import React, { useState } from "react";
import { Upload, Button, message, Select, DatePicker } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const Content = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [uploadDisabled, setUploadDisabled] = useState(true);

  const beforeUpload = (file) => {
    const fileType = file.type;
    if (
      fileType !==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" &&
      fileType !== "application/vnd.ms-excel"
    ) {
      message.error("You can only upload Excel files!");
      return false;
    }
    return true;
  };

  const handleChange = (info) => {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    updateUploadButtonState(date, selectedBatch);
  };

  const handleBatchChange = (value) => {
    setSelectedBatch(value);
    updateUploadButtonState(selectedDate, value);
  };

  const updateUploadButtonState = (date, batch) => {
    if (date && batch) {
      setUploadDisabled(false);
    } else {
      setUploadDisabled(true);
    }
  };

  return (
    <div className="w-[80%] h-[100vh bg-[#fff]">
      <nav className="box bg-[#fff] h-[100px] px-[40px]">
        <div className="text-[#000] pt-[35px] text-[25px] font-[700]">
          <h1>WelCome GewinCodeX</h1>
        </div>
      </nav>
      <div className="px-[40px] py-[30px] flex flex-col gap-5">
        <div className="flex">
          <DatePicker
            onChange={handleDateChange}
            style={{ marginRight: "10px" }}
          />
          <Select
            defaultValue="BATCHES"
            style={{ width: 120, marginLeft: "10px" }}
            onChange={handleBatchChange}
          >
            <Option value=".xlsx">BATCH 1</Option>
            <Option value=".xls">BATCH 2</Option>
            <Option value=".xls">BATCH 3</Option>
          </Select>
        </div>
        <div className="flex gap-2">
          <Upload
            beforeUpload={beforeUpload}
            onChange={handleChange}
            accept=".xlsx,.xls"
            maxCount={1}
            showUploadList={true}
          >
            <Button icon={<UploadOutlined />} disabled={uploadDisabled}>
              Upload Excel File
            </Button>
          </Upload>
          <Button disabled={uploadDisabled}>Upload</Button>
        </div>
      </div>
    </div>
  );
};

export default Content;
