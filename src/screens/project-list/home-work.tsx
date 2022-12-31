import { useArray, useMount } from "utils";

export const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "jack", age: 25 },
    { name: "ma", age: 22 },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);
  const todos = useArray(["上班", "it鐵人賽完賽", "學react"]);

  return (
    <div>
      {value.map((person, index) => (
        <div style={{ marginBottom: "30px" }} key={index}>
          <span style={{ color: "red" }}>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
      {/* 点击以后清空列表*/}
      <button style={{ marginBottom: "50px" }} onClick={() => clear()}>
        clear
      </button>
      {/* 点击以后删除第一项*/}
      <button onClick={() => removeIndex(0)}>remove 0</button>
      {/* 点击以后增加 john */}
      <button onClick={() => add({ name: "john", age: 22 })}>add john</button>

      <p>useArray test</p>

      <ul>
        {todos.value.map((todo, i) => {
          return (
            <li key={i}>
              {todo}
              <button onClick={() => todos.removeIndex(i)}>delete</button>
            </li>
          );
        })}
      </ul>

      <button onClick={() => todos.add(Math.random().toString())}>
        add ramdom number
      </button>
      <button onClick={todos.clear}>clear array</button>
    </div>
  );
};
