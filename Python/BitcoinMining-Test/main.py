from hashlib import sha256

MAX_NONCE = 1000


def SHA256(text):
    return sha256(text.encode("ascii")).hexdigest()


def mine(block_number, transactions, previous_hash, prefix_zeros):
    prefix_str = '0'*prefix_zeros
    for nonce in range(MAX_NONCE):
        text = str(block_number) + transactions + previous_hash + str(nonce)
        new_hash = SHA256(text)
        if new_hash.startswith(prefix_str):
            print(f"Mined Bitcoin with nonce value : {nonce}")
            return new_hash

    print(f"Couldn't find the correct hash after {MAX_NONCE}")


if __name__ == '__main__':
    transactions = '''
    Dhaval->Bhavin->20,
    Mando->Cara->45
    '''

    diffculty = 4
    new_hash = mine(5, transactions,
        '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
            diffculty)

    print(new_hash)
