import { sha256 } from "npm:crypto-js";

export const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
export const MAX_TRANSACTIONS = 10;
export interface Transaction {
    sender: string;
    to: string;
}

export interface Block {
    id: number, 
    transactions: transaction[], 
    nonce: number
}

export let mempool: new Array<Transaction>();//[] as Transaction[];
export let blocks: [] as Block[];


export function addTransaction(tx: Transaction) {
    mempool.push(tx);
}

export function mine() {
    
    const blockheight: number = blocks.length;
    let _transactions:  [] as Transaction[] = [];
    for(tx in mempool){
        if(_transactions.length < MAX_TRANSACTIONS){
            //add transaction to _transaction
            _transactions.push(mempool[tx]);
        }
    }
    console.log("Transaction Length and Pool",_transactions.length);
    console.log("MemePool Length and Pool",mempool.length,mempool);
    mempool.splice(0,_transactions.length);
    console.log("MemePool Length and Pool After Splice",mempool.length,mempool);
    let _nonce = 0;
    let hash = sha256(new String(_nonce));
    let int = BigInt(`0x${hash}`)
    console.log("hash outside while",hash)
    while (int < TARGET_DIFFICULTY) {
        _nonce++;
        hash = sha256(new String(_nonce));
        int = BigInt(`0x${hash}`)
        console.log("hash inside while",hash)
        console.log("_nonce inside while",_nonce)
    }
    let block = {id: blockheight, transactions: _transactions, nonce: _nonce};

    console.log("Block " , block);
    let stringBlock = JSON.stringify(block);
    block.hash = sha256(stringBlock);



    blocks.push(block);

}