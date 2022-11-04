import React, { forwardRef, ReactNode, useImperativeHandle, useState } from "react"
import { Button, Drawer, Form, Input, Radio, Space, DatePicker, Select } from "antd"
import { useForm } from "antd/lib/form/Form"


import { DataType } from "./data"
type RefHandle = {
  toggleModal: (visible?: boolean, data?: DataType) => void
}

const CreateModal = forwardRef<RefHandle>((ref) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [plan_type, setPlan] = useState<DataType>()
  const [modalForm] = useForm()

  useImperativeHandle(ref, () => {
    return {
      toggleModal: async (vis: boolean, data:DataType) => {
        if(data) {
          setPlan(data)
        } 
        setVisible(vis)
      },
    }
  })

  // 取消创建【重新销毁组件】
  const onRest = () => {
    setPlan(undefined)
    modalForm.resetFields()
    setVisible(false)
  }

  // 创建
  const onSubmit = async () => {
    const { operation_name, operation_type, service_unit, chart_list, date, project_id, org_code, icon_url } =
      modalForm.getFieldsValue()
    if (await modalForm.validateFields()) {
      console.log("nihao ")
    }
    const chartList = chart_list.map((i: { value: string; label: ReactNode }) => {
      return {
        chart_name: i.label,
        bizcode: i.value,
      }
    })

    setPlan(undefined)
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
      // extra={<CloseOutlined onClick={() => onRest()} />}
      footerStyle={{
        display: "flex",
        justifyContent: "flex-end",
      }}
      footer={
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
          <Input placeholder="请输入运营名称"/>
        </Form.Item>
        <Form.Item label="产品型号" required name="size">
          <Input placeholder="请输入产品型号"/>
        </Form.Item>
        <Form.Item label="产品说明" required name="remark">
          <Input placeholder="请输入产品说明"/>
        </Form.Item>
      </Form>
    </Drawer>
  )
})
export default CreateModal
