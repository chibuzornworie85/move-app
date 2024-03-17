import React, { useState } from "react";
import { Modal, Input } from "antd";
import logoIcon from "../asset/price.png";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-[20%] bg-[#c2c20c34] text-[#fff] flex flex-col gap-10 px-[14px] py-[20px]">
        <div className="flex items-center gap-2 border-b-[2px] pb-[5px] border-b-[#fff]">
          <img src={logoIcon} alt={logoIcon} />{" "}
          <p className="text-[#000 text-[25px] font-[700]">Pricepally</p>
        </div>
        <ul className="flex flex-col gap-4">
          <NavLink to="/orders">
            <li>Orders</li>
          </NavLink>
          <NavLink to="/users">
            <li>Users</li>
          </NavLink>
          <li>
            <button onClick={showModal}>Add User</button>
          </li>
        </ul>
        <Modal
          title="Add User"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="flex flex-col gap-3">
            <Input placeholder="User Name" />
            <Input placeholder="User Email" />
            <Input placeholder="User Password" />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default SideBar;
