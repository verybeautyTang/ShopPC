import React from "react"
import Link from "next/link"
interface IProps {
    name: string;
    size: string;
    remark: string
}
const Detail = (props: IProps) => {
    return (
        <div>
         <Link href="/">BACK</Link>   
        <div>
        <p>{props.name}</p>
        <p>{props.size}</p>
        <p>{props.remark}</p>
       
        </div>
        </div>
    )
}
export default Detail