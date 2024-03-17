import React, { useState, useEffect } from "react";
import { Table, Spin } from "antd";
import { NavLink } from "react-router-dom/dist";
const columns = [
  {
    title: "Procurement Officer",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Quantity Bought",
    dataIndex: "bought",
  },
  {
    title: "Cost Price",
    dataIndex: "cost",
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    product: `Rice`,
    quantity: 30,
    price: 1000,
    bought: 800,
    cost: `800,000`,
  });
}

const Orders = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      {isLoading ? (
        <Spin />
      ) : (
        <div>
          <nav className="box bg-[#fff] h-[100px] px-[40px] sticky top-0 z-10">
            <div className="text-[#000] pt-[35px] text-[25px] font-[700]">
              <NavLink to="/">
                <h1>Client Orders</h1>
              </NavLink>
            </div>
          </nav>
          <Table columns={columns} dataSource={data} className="px-[40px]" />
        </div>
      )}
    </>
  );
};
export default Orders;
