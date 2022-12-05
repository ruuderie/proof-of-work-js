const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    
    let blockheight = blocks.length;
    
    let block = mempool;
    for(transaction in block){
        
    }
    console.log("Block " , block);
    let stringBlock = JSON.stringify(block);
    block.hash = SHA256(stringBlock);

    const index = mempool.indexOf(blockheight);
    if (index > -1) { 
        mempool.splice(index, 1); 
    }
    
    blocks.push(block);

}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};