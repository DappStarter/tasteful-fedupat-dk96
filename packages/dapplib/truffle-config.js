require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remain smile good process blue trial'; 
let testAccounts = [
"0xad994cc1228b8aeeb97e8cfebe2cbf34f27e6c1c0558b81601421152c156c05a",
"0x9055c95b6fb44b6935a9c074e446148289fd061f5016e62e167defbcadec5147",
"0xb88f3fd13ca8c0c79745903f1af038d8d5a04569045ad91172a2d8b0ecf8635b",
"0x0010b3eb6bc80f921c617f4bfd7fced2011b6c63c41c38bcc734b89a4c59709e",
"0xd0afd61066860c7ed17faed0f2bd9756f011fea90a523c26b83fd07b94f4c2a8",
"0xdf58ad6d474836546f12f6eb4976f254efa83485fade871bdbee266b3f910ed2",
"0x6ab8700c1504a9d47871e5f533f3fa3eaf1fff99ede8e2255c72f7d7d31e48c7",
"0x4aa523d5ee0ad3ab6c918833a1d28241dbb4f6a7f8a81c4a1e7922fff6bad45d",
"0x9a4c50924d2670a77c138966375265fe3357d52f06b5115e03a4e0df341896a9",
"0xda01f3ee701b82a7183aef8718c9fcccf2658d7d2ceff8c2111033c6ea165ad3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

