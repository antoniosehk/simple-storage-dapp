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
    try {
      if (myStringFromContract) {
        console.log(myStringFromContract);
        setMyString(myStringFromContract);
      }
    } catch (error) {
      console.log("Error fetching my string", error.message);
    }
  }, [myStringFromContract]);

  return (
    <div>
      <h2>{myString}</h2>
    </div>
  );
};

export { DisplayStringBox };
