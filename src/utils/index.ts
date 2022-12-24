import { useEffect, useState } from "react";

export const isFalsy = (value: unknown): boolean =>
  value === 0 ? false : !value;

//在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    // 去除 object 里面 key 的值为 空，null，undefined，NaN 的值
    // parma 比如 {name: ''} 没写 localhost:3000/users?name=&personid=1
    // 就会变成 localhost:3000/users?personid=1
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};
//?:表示可选参数
export const useDebounce = (value: unknown, delay?: number): any => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    // 每次在value变化以后，设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};

export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};
