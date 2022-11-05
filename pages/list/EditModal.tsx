import React, { forwardRef, ReactNode, useImperativeHandle, useState } from "react"
import { Button, Drawer, Form, Input,  Space} from "antd"
import { useForm } from "antd/lib/form/Form"


import { DataType, DATA_TYPE } from "./data"
import { CloseOutlined } from "@ant-design/icons"
type RefHandle = {
  toggleModal: (visible: boolean, type: DATA_TYPE,data?: DataType) => void
}

type RefType = {
  onChange?: (data: any, type:DATA_TYPE ) => void
}

const CreateModal = forwardRef<RefHandle,RefType>(({onChange},ref) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [type, setType] = useState<DATA_TYPE>(DATA_TYPE.ADD);
  const [modalForm] = useForm()

  useImperativeHandle(ref, () => {
    return {
      toggleModal: async (vis: boolean,  type: DATA_TYPE, data?:DataType) => {
        if (data) {
          modalForm.setFieldsValue({
            name: data.name,
            size: data.size,
            remark: data.remark
          })
        } 
        setType(type)
        setVisible(vis)
      },
    }
  })

  // 取消创建【重新销毁组件】
  const onRest = () => {
    modalForm.resetFields()
    setVisible(false)
  }

  // 创建
  const onSubmit = async () => {
    const { name, size, remark } = modalForm.getFieldsValue()
    if (await modalForm.validateFields()) {
      onChange(modalForm.getFieldsValue(), type)
    }
    modalForm.resetFields()
    setVisible(false)
  }

  return (
    <Drawer
      width={640}
      visible={visible}
      destroyOnClose
      title="设置"
      closable={false}
      extra={<CloseOutlined onClick={() => onRest()} />}
      footerStyle={{
        display: "flex",
        justifyContent: "flex-end",
      }}
      footer={
        type !== DATA_TYPE.DETAIL && 
        <Space>
          <Button onClick={() => onRest()}> 取消</Button>
          <Button type="primary" onClick={() => onSubmit()}>
            确定
          </Button>
        </Space>
      }
    >
      <Form form={modalForm}>
        <Form.Item label="产品名称" required name="name" >
          <Input placeholder="请输入运营名称" disabled={type === DATA_TYPE.DETAIL}/>
        </Form.Item>
        <Form.Item label="产品型号" required name="size">
          <Input placeholder="请输入产品型号"disabled={type === DATA_TYPE.DETAIL}/>
        </Form.Item>
        <Form.Item label="产品说明" required name="remark">
          <Input placeholder="请输入产品说明"disabled={type === DATA_TYPE.DETAIL}/>
        </Form.Item>
      </Form>
    </Drawer>
  )
})
export default CreateModal
