const ethers = require('ethers');

async function sendTransaction(_privatekey, _to, _value){

    const provider = new ethers.providers.EtherscanProvider("rinkeby");
    
    let wallet = new ethers.Wallet(_privatekey);

    var signer = new ethers.Wallet(_privatekey, provider);

    let transaction = {
        from: wallet.address,
        to: _to,
        value: ethers.utils.parseEther(_value),
        gasLimit: ethers.utils.hexlify("0x210000"),
        gasPrice: ethers.utils.parseUnits('60', 'gwei'),
        chainId: 4
      };
    signer.signTransaction(transaction);
    signer.sendTransaction(transaction)
    .then((txObj) => {
        console.log('txHash', txObj.hash);
    });
}

async function main() {
    sendTransaction(
        '0x0000',
        '0x0000', 
        '0.01');
}

main();