var Web3 = require("web3");

var web3 = new Web3();

// console.log(web3.eth.abi.encodeParameter("uint256", "2345675643"));
// console.log(web3.eth.abi.encodeParameter("bytes32[]", ["0xdf3234", "0xfdfd"]));

const PARAM = {
  inputs: [
    {
      internalType: "uint8",
      name: "number",
      type: "uint8",
    },
    {
      components: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "age",
          type: "uint256",
        },
      ],
      internalType: "struct Test.Person[]",
      name: "persons",
      type: "tuple[]",
    },
    {
      internalType: "bytes1[]",
      name: "data",
      type: "bytes1[]",
    },
  ],
  name: "test",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function",
};

console.log(
  web3.eth.abi.encodeFunctionCall(PARAM, [
    "15",
    [
      { id: "1", age: "10" },
      { id: "2", age: "11" },
      { id: "3", age: "12" },
    ],
    ["0x20", "0x21", "0x22"],
  ])
);
