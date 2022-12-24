export const isFalsy = (value) => (value === 0 ? false : !value);

//在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    // 去除 object 里面 key 的值为 空，null，undefined，NaN 的值
    // parma 比如 {name: ''} 没写 localhost:3000/users?name=&personid=1
    // 就会变成 localhost:3000/users?personid=1
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
