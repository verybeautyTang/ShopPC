import React from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import { WithRouterProps } from "next/dist/client/with-router";

const Detail: React.FunctionComponent<WithRouterProps> = ({ router }) => {
  return (
    <div className="container  mt-20  mx-auto ">
      <Link href="/">
        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          返回产品列表
        </button>{" "}
      </Link>
      <h5 className=" mt-10 mb-10 text-center font-bold">产品详情页</h5>
      <ul className="divide-y divide-gray-200">
        <li  className="py-4 flex">
            <p className="text-sm font-medium text-gray-900">产品名称：</p>
            <p className="text-sm text-gray-500">{router.query.name}</p>
        </li>
        <li  className="py-4 flex">
            <p className="text-sm font-medium text-gray-900">产品型号：</p>
            <p className="text-sm text-gray-500">{router.query.size}</p>
        </li>
        <li  className="py-4 flex">
            <p className="text-sm font-medium text-gray-900">产品说明：</p>
            <p className="text-sm text-gray-500">{router.query.remark}</p>
        </li>
    </ul>
    </div>
  );
};
export default withRouter(Detail);
