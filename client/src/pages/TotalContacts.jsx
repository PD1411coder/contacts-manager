import {Table} from "antd";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";


const TotalContacts = () => {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);

  useEffect(() => {
    !user && navigate("/", {replace: true});
  }, []);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "John Doe",
      designation: "CEO",
      company: "ABC Company",
      industry: "IT",
      email: "p@gmail.com",
      phone_number: 858585858585,
      country: "India",
    },
    {
      id: 2,
      name: "Joahn Doe",
      designation: "CFO",
      company: "ABC Company",
      industry: "Mech",
      email: "dp@gmail.com",
      phone_number: 858586858585,
      country: "India",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Designation",
      dataIndex: "designation",
    },
    {
      key: "3",
      title: "Company",
      dataIndex: "company",
    },
    {
      key: "4",
      title: "Industry",
      dataIndex: "industry",
    },
    {
      key: "5",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "6",
      title: "Phone number",
      dataIndex: "phone_number",
    },
    {
      key: "7",
      title: "Country",
      dataIndex: "country",
    },
  ];
  return (
    <div>
      <header className="table-header">
        <Table columns={columns} dataSource={dataSource}></Table>
      </header>
    </div>
  );
};

export default TotalContacts;
