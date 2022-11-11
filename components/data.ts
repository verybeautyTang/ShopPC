export interface DataType {
  id?: string | number;
  name: string;
  size: number | string;
  remark: string;
}
export enum DATA_TYPE {
    EDIT = 'EDIT',
    ADD = 'ADD',
    DETAIL = 'DETAIL',
    DELETE = "DELETE"
}
export const data:DataType[] = [
  {
    id: '1',
    name: 'node.js开发指南',
    size: 32,
    remark: '作为0-1的开发手学习后端～',
  },
  {
    id: '2',
    name: '写给开发看的设计书',
    size: 32,
    remark: '开发也需要看看设计书',
  },
  {
    id: '3',
    name: '人间失格',
    size: 32,
    remark: '人间失格人间失格人间失格人间失格人间失格人间失格',
  },
  {
    id: '4',
    name: '超级搭讪学',
    size: 32,
    remark: '超级搭讪学超级搭讪学超级搭讪学超级搭讪学超级搭讪学',
  },
  {
    id: '5',
    name: '超级搭讪学',
    size: 32,
    remark: '超级搭讪学超级搭讪学超级搭讪学超级搭讪学超级搭讪学超级搭讪学',
  },
];