const MAX_NONCE = 2 ** 32;
const DIFFICULTY = 4;

function proofOfWork(data: string): number {
    let nonce = 0;
    let hash: string;

    do {
        nonce++;
        hash = calculateHash(data, nonce);
    } while (!isValidHash(hash));

    return nonce;
}

function calculateHash(data: string, nonce: number): string {
    return SHA256(data + nonce.toString()).toString();
}

function isValidHash(hash: string): boolean {
    return hash.slice(0, DIFFICULTY) === "0".repeat(DIFFICULTY);
}
