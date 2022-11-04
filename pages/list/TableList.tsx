
import React from 'react';
import { Space, Table, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { data, DataType, } from './data'
import EditModal from './EditModal';


const TableList: React.FC = () => {
  // 删除
  const onDelete = (record:DataType) => {
    Modal.confirm({
      title:' 提示',
      content: `是否要删除“${record.name}”这款产品呢？`,
      onOk: () => {
        console.log('first')
      }
    })
  }

  // 新增
  const onEdit = (record: DataType) => {

  }
  // 新增
  const onCreate = () => {

  }

  // 查看详情
  const onDetail =  (record: DataType) => {

  }

  const columns: ColumnsType<DataType> = [
    {
      title: '产品名称',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '产品编号',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: '产品说明',
      dataIndex: 'remark',
      key: 'remark',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>编辑</a>
          <a onClick={() => onDelete(record)}>删除</a>
          <a onClick ={() => onDetail(record)}>查看详情页面</a>
        </Space>
      ),
    },
  ];
  return (
    <React.Fragment>
      <Table columns={columns} dataSource={data} />
      <EditModal />
    </React.Fragment>
  )


};

export default TableList;