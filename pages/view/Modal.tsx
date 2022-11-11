import React from "react";
import { DataType, DATA_TYPE } from "./data";

export interface IProps {
  title: string;
  type: DATA_TYPE;
  data?: DataType | undefined ;
  onCancel:() => void;
  onSubmit:(data?:DataType, form?: DataType) => void;
}

export default function Modals(props: IProps) {
  const { title, type, data, onCancel, onSubmit } = props;

  const onClick =() => {
    const name = document.getElementById('name');
    const remark = document.getElementById('remark');
    const size = document.getElementById('size');
    console.log(name, remark, size);
    onSubmit(data, {
        name: name?.value,
        remark: remark?.value,
        size: size?.value,
    })
  }

  return (
    <>
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto min-w-full pl-40 pr-40">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h5 className="text-1xl font-semibold">{title}</h5>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {type === DATA_TYPE.DELETE ? (
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      确定删除{data?.name}这条数据嘛？
                    </p>
                  ) : (
                    <form className="mb-6" action="/" method="post" id="form">
                      <div className="flex flex-col mb-4">
                        <label
                          className="mb-2 uppercase text-grey-darkest"
                        >
                          产品名称
                        </label>
                        <input
                          className="border py-2 px-3 text-grey-darkest"
                          type="text"
                          name="name"
                          id="name"
                          required
                          defaultValue={data?.name}
                        />
                      </div>
                      <div className="flex flex-col mb-4">
                        <label
                          className="mb-2 uppercase text-grey-darkest"
                        >
                          产品型号
                        </label>
                        <input
                          className="border py-2 px-3 text-grey-darkest"
                          type="text"
                          required
                          name="size"
                          id="size"
                          defaultValue={data?.size}
                        />
                      </div>
                      <div className="flex flex-col mb-4">
                        <label
                          className="mb-2 uppercase text-grey-darkest"
                        >
                         产品说明
                        </label>
                        <input
                          className="border py-2 px-3 text-grey-darkest"
                          type="text"
                          name="remark"
                          id="remark"
                          required
                          defaultValue={data?.remark}
                        />
                      </div>
                    </form>
                  )}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => onCancel()}
                  >
                    取消
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => onClick()}
                  >
                    确定
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    </>
  );
}
