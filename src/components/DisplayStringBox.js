import { useState, useEffect } from "react";
import { useContractRead } from "wagmi";
import {
  SimpleStorageABI,
  SimpleStorageContractAddress,
} from "../abi/SimpleStorageABI";

const DisplayStringBox = () => {
  const [myString, setMyString] = useState("");

  const { data: myStringFromContract } = useContractRead({
    address: SimpleStorageContractAddress,
    abi: SimpleStorageABI,
    functionName: "myString",
    watch: true,
  });

  useEffect(() => {
    setMyString(myStringFromContract);
  }, [myStringFromContract]);

  return (
    <div>
      <h2>{myString}</h2>
    </div>
  );
};

export { DisplayStringBox };
