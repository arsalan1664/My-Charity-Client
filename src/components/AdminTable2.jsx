import React, { useEffect, useState } from "react";
import { Form, Input, Modal, Space, Table, Tag } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import {
  DELETEDONOR_MUTATION,
  DONORS_QUERY,
  UPDATEDONOR_MUTATION,
} from "../util/query";
import { toast } from "sonner";

const Editable2 = () => {
  const { confirm } = Modal;
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editedRecord, setEditedRecord] = useState(null);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <p>$ {text}</p>,
    },
    {
      title: "Time",
      dataIndex: "updatedAt",
      key: "updatedAt",
      sorter: (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt),
      sortOrder: "decend",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record)}>
            <EditTwoTone />
          </a>
          <a onClick={() => handleDelete(record)}>
            <DeleteTwoTone />
          </a>
        </Space>
      ),
    },
  ];
  const [dataSource, setDataSource] = useState([]);
  const { loading, error, data: dataa, refetch } = useQuery(DONORS_QUERY);
  const [deleteDonor] = useMutation(DELETEDONOR_MUTATION);
  const [updateDonor] = useMutation(UPDATEDONOR_MUTATION);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleEdit = (record) => {
    setEditedRecord(record);
    showModal();
  };

  const handleDelete = (record) => {
    confirm({
      title: "Do you want to delete this record?",
      onOk() {
        deleteDonor({ variables: { deleteDonorId: record._id } }).then(() => {
          refetch();
          toast.success("Delete Successfully");
        });
        console.log("Deleted:", record._id);
      },
      onCancel() {},
    });
  };

  const handleFinishEdit = () => {
    form
      .validateFields()
      .then(async (values) => {
        // Call your edit mutation here with the necessary variables
        // Assuming you have an EDITDONOR_MUTATION defined
        try {
          const result = await updateDonor({
            variables: {
              updateDonorId: editedRecord._id,
              name: values.name,
              email: values.email,
              amount: parseFloat(values.amount),
              // Add other variables as needed
            },
          });
          console.log(result);

          // After editing, refetch the data to update the table
          refetch();
          toast.success("Update Successfully");

          // Close the modal and reset the form
          setIsModalVisible(false);
          form.resetFields();
        } catch (error) {
          console.error("Error editing donor:", error);
        }
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  useEffect(() => {
    if (dataa) {
      const array = dataa.donors;
      setDataSource(array);
    }
  }, [dataa]);

  return (
    <>
      <Table
        rowKey={(dataSource) => dataSource._id}
        columns={columns}
        dataSource={dataSource}
      />
      <Modal
        title="Edit Record"
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleFinishEdit}
      >
        <Form
          form={form}
          onFinish={handleFinishEdit}
          initialValues={editedRecord}
        >
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Amount" name="amount">
            <Input disabled />
          </Form.Item>
          {/* Add more form items for other fields if needed */}
        </Form>
      </Modal>
    </>
  );
};

export default Editable2;
