require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remind arrow hover kiwi flame smart'; 
let testAccounts = [
"0x4e2e297335ee53391842609c4aef738232b218b653b92b79e606a9152da4d2db",
"0xbfcbf29473c28f31533e9a7d17e90a557255fcd035b69ef96ba01ce75f8add66",
"0x49c41642289849d85df3c20a605962231cce6f644bfb2011ed062c1e32d087d4",
"0x0e614915971ed25d98d1818b4478c1d19e521d754b511fd958cbecae43ba86bc",
"0x513d450e723d7cb39e04a02b1db740a43c1468e5a267ed4334e27ba9f73f5d3f",
"0xb8f8368ce755ff95934d3b2cdb0962ec2b693caf5d14302ae0bd4cc72530f598",
"0xc9a7b205380e40e68a6bb296d2884ceace25d2c94ad94cacc89bef14c6c145d2",
"0x0481c13677989b0f15ba9cdc5895c5d68d6991a3538dff47dd02fbfd4a8fdd7c",
"0xbf84ef7fcc43489447631a91415b24d6834116b5ff1ae971aea6c8b9198880aa",
"0x73fceec9dc454ccadb27f67c22198de90a9cc5f312d969c500fb25f15dd87043"
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
            version: '^0.5.11'
        }
    }
};
