import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { GetProducts, ProductSelector } from "./redux/slices/productList";
import { useAppDispatch } from "./redux/store";
import { DataType, DATA_TYPE } from "./view/data";
import Modals from "./view/Modal";
import Link from 'next/link'

// type EditHandle = React.ElementRef<typeof EditModal>;

interface EditHandle {
  title: string;
  type: DATA_TYPE;
  data?: DataType | [];
}

function List() {
  const dispatch = useAppDispatch();
  const createRef = useRef<EditHandle>({
    title: "",
    type: DATA_TYPE.ADD,
    data: [],
  });

  const { list } = useSelector(ProductSelector);

  const [lists, setList] = useState<DataType[]>(list);

  const [showModal, setShowModal] = useState<boolean>(false);

//   useEffect(() => {
//     setList(list);
//   }, [list]);

  // 删除
  const onDelete = (record: DataType) => {
    createRef.current.title = "删除";
    createRef.current.type = DATA_TYPE.DELETE;
    createRef.current.data = record;
    console.log(record);
    setShowModal(true);
  };

  // 新增
  const onAdd = () => {
    createRef.current.title = "新增";
    createRef.current.type = DATA_TYPE.ADD;
    createRef.current.data =[];
    setShowModal(true);
  };

  // 编辑
  const onEdit = (record: DataType) => {
    createRef.current.title = "编辑";
    createRef.current.type = DATA_TYPE.EDIT;
    createRef.current.data = record;
    setShowModal(true);
  };

  // 提交
  const onSubmit = async (data: DataType, form?: DataType) => {
    if (createRef.current.type === "ADD") {
    }
    let tempData = [...lists];
    switch (createRef.current.type) {
      case DATA_TYPE.ADD:
        if (form) {
          tempData.push({ ...form, id: Math.random().toString(36).slice(-6) });
        }
        break;
      case DATA_TYPE.EDIT:
        tempData.forEach((i, index, arr) => {
          if (i.id === data.id && form) {
            arr[index] = form;
          }
        });
        break;
      case DATA_TYPE.DELETE:
        const temp = tempData.filter((i) => i.id !== data.id);
        tempData = [...temp];
    }
    await dispatch(GetProducts(tempData));
    console.log(tempData);
    setList([...tempData]);
    setShowModal(false);
  };

  return (
    <div className="container mx-auto mt-20">
    <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" onClick={() => onAdd()}>新增</button>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
            
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      产品名称
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      产品编号
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      产品说明
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      操作
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {lists.map((i: DataType) => (
                    <tr key={i.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {i.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {i.size}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                        {i.remark}
                      </td>

                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap flex">
                        <p
                          className="text-green-500 hover:text-green-700"
                         
                        >
                          <Link  href={{
              pathname: '/detail',
              query: { name: i.name, size: i.size, remark: i.remark },
            }}>查看</Link>
                        </p>
                        <p
                          className="text-gray-500 hover:text-gray-700 pl-10 pr-10"
                          // href="#"
                          onClick={()=>onEdit(i)}
                        >
                          编辑
                        </p>
                        <p
                          className="text-red-500 hover:text-red-700 "
                          // href="#"
                          onClick={() => onDelete(i)}
                        >
                          删除
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {showModal && (
              <Modals
                onCancel={() => setShowModal(false)}
                onSubmit={(data, form) => onSubmit(data, form)}
                type={createRef.current.type}
                title={createRef.current.title}
                data={createRef.current.data}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
