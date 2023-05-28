const SimpleStorageABI = [
  {
    inputs: [],
    name: "myString",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_input", type: "string" }],
    name: "setMyString",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const SimpleStorageContractAddress =
  "0x31C7995bdfEBb4D05f2Fce034312E2F708f8a4d7";

export { SimpleStorageABI, SimpleStorageContractAddress };
