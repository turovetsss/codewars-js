import { decrypt, encrypt } from './task';

test('DecryptExampleTests', () => {
    expect(decrypt(' Tah itse sits!', 3)).toStrictEqual('This is a test!');
});
test('EncryptExampleTests', () => {
    expect(encrypt('This is a test!', 1)).toStrictEqual('hsi  etTi sats!');
});
