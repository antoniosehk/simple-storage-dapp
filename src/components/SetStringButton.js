import { useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import {
  SimpleStorageABI,
  SimpleStorageContractAddress,
} from "../abi/SimpleStorageABI";
const SetStringButton = () => {
  const [newString, setNewString] = useState("");

  const { config } = usePrepareContractWrite({
    address: SimpleStorageContractAddress,
    abi: SimpleStorageABI,
    functionName: "setMyString",
    args: [newString],
  });

  const { data, writeAsync, isIdle, isLoading, isSuccess, isError } =
    useContractWrite(config);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setNewString(event.target.value);
        }}
      />
      <button
        onClick={(event) => {
          writeAsync();
        }}
      >
        Set
      </button>
    </div>
  );
};

export { SetStringButton };
