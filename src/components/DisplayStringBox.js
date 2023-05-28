import { useState, useEffect } from "react";
import { useContractRead } from "wagmi";
import {
  SimpleStorageABI,
  SimpleStorageContractAddress,
} from "../abi/SimpleStorageABI";

const DisplayStringBox = () => {
  const [myString, setMyString] = useState("");

  const { data: myStringFromContract, error: myStringFromContractError } =
    useContractRead({
      address: SimpleStorageContractAddress,
      abi: SimpleStorageABI,
      functionName: "myString",
      watch: true,
    });

  useEffect(() => {
    try {
      console.log("Reading from contract...");
      console.log(myStringFromContract);
      console.log(myStringFromContractError);
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
