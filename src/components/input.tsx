import { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiEmailOutline,
  mdiAccount,
  mdiEyeOutline,
  mdiEyeOffOutline,
} from "@mdi/js";

function Input(props: {
  icon?: string;
  placeholder?: string;
  showIcon?: boolean;
  inputValue?: (value: string) => void;
}) {
  const { icon = "email", placeholder = "", showIcon = true } = props;
  const [showPassword, setShowPassword] = useState(false);

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    props.inputValue && props.inputValue(e.target.value);
  }

  return (
    <div className="relative">
      <input
        type={icon == "password" && !showPassword ? "password" : "text"}
        className="w-full rounded-md border-2 border-gray-300 bg-transparent py-2 pl-3 pr-11"
        placeholder={placeholder}
        onInput={handleInputValue}
      />
      {showIcon &&
        ((icon == "email" && (
          <Icon
            path={mdiEmailOutline}
            size={1}
            className="absolute right-3 top-2"
          />
        )) ||
          (icon == "name" && (
            <Icon
              path={mdiAccount}
              size={1}
              className="absolute right-3 top-2"
            />
          )) ||
          (icon == "password" &&
            (showPassword ? (
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 cursor-pointer"
              >
                <Icon path={mdiEyeOutline} size={1} />
              </div>
            ) : (
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 cursor-pointer"
              >
                <Icon path={mdiEyeOffOutline} size={1} />
              </div>
            ))))}
    </div>
  );
}

export default Input;
