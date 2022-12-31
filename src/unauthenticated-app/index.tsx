import { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./regsiter";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div>
      {isRegister ? <RegisterScreen /> : <LoginScreen />}
      <button onClick={() => setIsRegister(!isRegister)}>
        切换到 - {isRegister ? "登陆" : "注册"}
      </button>
    </div>
  );
};
