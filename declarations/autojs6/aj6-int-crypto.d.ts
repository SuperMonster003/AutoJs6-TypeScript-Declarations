// Type definitions for AutoJs6 internal module console
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.8.4
//
// Last modified: Jun 15, 2023

/// <reference path="../index.d.ts" />
/// <reference lib="es2022" />

/**
 * @Source %AutoJs6Assets%/modules/__crypto__.js
 */

declare namespace Internal {

    interface Crypto {

        Key: typeof Crypto.Key;

        KeyPair: typeof Crypto.KeyPair;

        digest(message: string, algorithm?: Crypto.DigestAlgorithm, options?: Crypto.DigestOptions): string | number[];
        digest(message: string, options: Crypto.DigestOptions): string | number[];

        encrypt(data: string | number[],
                key: Crypto.Key,
                transformation: Crypto.CipherTransformation.All,
                options?: Crypto.CipherOptions,
        ): string | number[];

        decrypt(data: string | number[],
                key: Crypto.Key,
                transformation: Crypto.CipherTransformation.All,
                options?: Crypto.CipherOptions,
        ): string | number[];

        generateKeyPair(algorithm: Crypto.KeyPairGeneratorAlgorithm, length?: number): Crypto.KeyPair;

    }

    namespace Crypto {

        class Key extends org.autojs.autojs.core.crypto.Crypto.Key {

            constructor(data: string | number[], options?: Crypto.KeyOptions);

            toKeySpec(algorithm: CipherTransformation.RSA): java.security.Key;

        }

        class KeyPair extends org.autojs.autojs.core.crypto.Crypto.KeyPair {

            constructor(publicKeyParam: string | number[], privateKeyParam: string | number[], options?: Crypto.KeyOptions);

            publicKey: org.autojs.autojs.core.crypto.Crypto.Key;
            privateKey: org.autojs.autojs.core.crypto.Crypto.Key;

        }

        interface InputDigestOptions {
            /** @default 'string' */
            input?: 'file' | 'base64' | 'hex' | 'string';
        }

        interface OutputDigestOptions {
            /** @default 'hex' */
            output?: 'bytes' | 'base64' | 'hex' | 'string';
        }

        interface BaseDigestOptions {
            /**
             * Available for **string** type for both input and output.
             *
             * @default 'UTF-8'
             */
            encoding?: 'US-ASCII' | 'ISO-8859-1' | 'UTF-8' | 'UTF-16BE' | 'UTF-16LE' | 'UTF-16';
        }

        interface DigestOptions extends InputDigestOptions, OutputDigestOptions, BaseDigestOptions {
            // Empty interface body.
        }

        // @ts-ignore
        interface CipherOptions extends DigestOptions {

            iv?: java.security.spec.AlgorithmParameterSpec;

            output?: 'bytes' | 'base64' | 'hex' | 'string' | 'file';

            dest?: string;

        }

        interface KeyOptions extends InputDigestOptions {
            keyPair?: 'public' | 'private';
        }

        type DigestAlgorithm = 'MD5' | `SHA-${1 | 224 | 256 | 384 | 512}`;

        /**
         * The following algorithms seem not available: RSASSA-PSS, X25519 and X448.
         */
        type KeyPairGeneratorAlgorithm = 'DiffieHellman' | 'DH' | 'DSA' | 'RSA' | 'EC' | 'XDH' | 'RSASSA-PSS' | 'X25519' | 'X448';

        namespace CipherTransformation {

            type AES = 'AES' |
                `AES/${'CBC' | 'CFB' | 'CTR' | 'CTS' | 'ECB' | 'OFB'}/${'ISO10126Padding' | 'NoPadding' | 'PKCS5Padding'}` |
                `AES/${'GCM'}/${'NoPadding'}`;

            type AES_128 = `AES_128` |
                `AES_128/${'CBC' | 'ECB'}/${'NoPadding' | 'PKCS5Padding'}` |
                `AES_128/${'GCM'}/${'NoPadding'}`;

            type AES_256 = `AES_256` |
                `AES_256/${'CBC' | 'ECB'}/${'NoPadding' | 'PKCS5Padding'}` |
                `AES_256/${'GCM'}/${'NoPadding'}`;

            type ARC4 = `ARC4` |
                `ARC4/${'ECB'}/${'NoPadding'}` |
                `ARC4/${'NONE'}/${'NoPadding'}`;

            type BLOWFISH = `BLOWFISH` |
                `BLOWFISH/${'CBC' | 'CFB' | 'CTR' | 'CTS' | 'ECB' | 'OFB'}/${'ISO10126Padding' | 'NoPadding' | 'PKCS5Padding'}`;

            type ChaCha20 = `ChaCha20` |
                `ChaCha20/${'NONE' | 'Poly1305'}/${'NoPadding'}`;

            type DES = `DES` |
                `DES/${'CBC' | 'CFB' | 'CTR' | 'CTS' | 'ECB' | 'OFB'}/${'ISO10126Padding' | 'NoPadding' | 'PKCS5Padding'}`;

            type DESede = `DESede` |
                `DESede/${'CBC' | 'CFB' | 'CTR' | 'CTS' | 'ECB' | 'OFB'}/${'ISO10126Padding' | 'NoPadding' | 'PKCS5Padding'}`;

            type RSA = `RSA` |
                `RSA/${'ECB' | 'NONE'}/${'NoPadding' | 'OAEPPadding' | 'PKCS1Padding' | `OAEPwithSHA-${1 | 224 | 256 | 384 | 512}andMGF1Padding`}`;

            type All = AES | AES_128 | AES_256 | ARC4 | BLOWFISH | ChaCha20 | DES | DESede | RSA;

        }

    }

}