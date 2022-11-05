
import React, { useEffect, useRef, useState } from 'react';
import { Space, Table, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { data, DataType,DATA_TYPE } from './data'
import EditModal from './EditModal';
import { useSelector } from 'react-redux';
import { GetProducts, ProductSelector } from '../redux/slices/productList';
import { useAppDispatch } from '../redux/store';
type EditHandle = React.ElementRef<typeof EditModal>

const TableList: React.FC = () => {

  const dispatch = useAppDispatch()

  const createRef = useRef<EditHandle>(null)
  
  const { list } = useSelector(ProductSelector)

  const [lists, setList] = useState<DataType[]>([])

  useEffect(() => {
    setList(list)
  },[list])


  // 删除
  const onDelete = (record:DataType) => {
    Modal.confirm({
      title:' 提示',
      content: `是否要删除“${record.name}”这款产品呢？`,
      onOk: async () => {
        console.log('first')
        const tempData = [...lists];
        tempData.filter((i) => i.id === record.id)
        // await dispatch(GetProducts(tempData))
        dispatch('productList/list', tempData)
        
      }
    })
  }

  // 编辑
  const onEdit = (record: DataType) => {
    createRef.current?.toggleModal(true, DATA_TYPE.EDIT,record)
  }
  // 新增
  const onCreate = () => {
    createRef.current?.toggleModal(true, DATA_TYPE.ADD)
  }

  // 查看详情
  const onDetail =  (record: DataType) => {
    createRef.current?.toggleModal(true, DATA_TYPE.DETAIL,record)
  }
  
  // 创建数据
  const onChange = async (data: DataType, type: DATA_TYPE) => {
    console.log(data, type)
    const tempData = [...lists]
    switch(type) {
      case DATA_TYPE.ADD: 
        tempData.push({...data,id: Math.random().toString(36).slice(-6)})
        break;
      case DATA_TYPE.EDIT:
        tempData.map((i) => {
          if( i.id === data.id) {
            i.name = data.name;
            i.size = data.size;
            i.remark = data.remark;
          }
        })
    }
     await dispatch(GetProducts(tempData))
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
           <a onClick={() => onCreate()}>新增</a>
          <a onClick={() => onEdit(record)}>编辑</a>
          <a onClick={() => onDelete(record)}>删除</a>
          <a onClick ={() => onDetail(record)}>查看详情页面</a>
        </Space>
      ),
    },
  ];
  return (
    <React.Fragment>
      <Table columns={columns} dataSource={lists?? [] } />
      <EditModal />
      <EditModal ref={createRef}  onChange={(data: DataType, type) =>onChange(data, type)} />
    </React.Fragment>
  )


};

export default TableList;