/**
 *
 * This file is auto-generated. Do not edit manually: changes may be erased.
 * Generated by Aqua compiler: https://github.com/fluencelabs/aqua/.
 * If you find any bugs, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * Aqua version: 0.5.0-247
 *
 */
import { Fluence, FluencePeer } from '@fluencelabs/fluence';
import {
    CallParams,
    callFunction,
    registerService,
} from '@fluencelabs/fluence/dist/internal/compilerSupport/v2';


// Services

export interface EnsDef {
    getAddress: (ensName: string, callParams: CallParams<'ensName'>) => string | Promise<string>;
    getContent: (ensName: string, callParams: CallParams<'ensName'>) => string | Promise<string>;
    getContenthash: (ensName: string, callParams: CallParams<'ensName'>) => { decoded: string | null; error: { message: string; name: string; stack: string | null; } | null; protocolType: string | null; } | Promise<{ decoded: string | null; error: { message: string; name: string; stack: string | null; } | null; protocolType: string | null; }>;
    getMultihash: (ensName: string, callParams: CallParams<'ensName'>) => string | Promise<string>;
    getOwner: (name: string, callParams: CallParams<'name'>) => string | Promise<string>;
    getPubkey: (ensName: string, callParams: CallParams<'ensName'>) => string | Promise<string>;
    getResolver: (name: string, callParams: CallParams<'name'>) => { defaultAccount: string | null; defaultBlock: string; defaultChain: string; defaultCommon: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number; }; hardfork: string | null; }; defaultHardfork: string; handleRevert: boolean; options: { address: string; data: string | null; from: string | null; gas: number | null; gasPrice: string | null; jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string; }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string; }[] | null; payable: boolean | null; stateMutability: string | null; type: string; }[]; }; transactionBlockTimeout: number; transactionConfirmationBlocks: number; transactionPollingTimeout: number; } | Promise<{ defaultAccount: string | null; defaultBlock: string; defaultChain: string; defaultCommon: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number; }; hardfork: string | null; }; defaultHardfork: string; handleRevert: boolean; options: { address: string; data: string | null; from: string | null; gas: number | null; gasPrice: string | null; jsonInterface: { anonymous: boolean | null; constant: boolean | null; gas: number | null; inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string; }[] | null; name: string | null; outputs: { internalType: string | null; name: string; type: string; }[] | null; payable: boolean | null; stateMutability: string | null; type: string; }[]; }; transactionBlockTimeout: number; transactionConfirmationBlocks: number; transactionPollingTimeout: number; }>;
    getTTL: (name: string, callParams: CallParams<'name'>) => string | Promise<string>;
    isApprovalForAll: (owner: string, operator: string, callParams: CallParams<'owner' | 'operator'>) => boolean | Promise<boolean>;
    recordExists: (name: string, callParams: CallParams<'name'>) => boolean | Promise<boolean>;
    registryAddress: (callParams: CallParams<null>) => string | Promise<string>;
    setAddress: (ensName: string, address: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number; }; hardfork: string | null; }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null; } | null, callParams: CallParams<'ensName' | 'address' | 'txConfig'>) => { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; }>;
    setApprovalForAll: (operator: string, approval: boolean, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number; }; hardfork: string | null; }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null; } | null, callParams: CallParams<'operator' | 'approval' | 'txConfig'>) => { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; }>;
    setContent: (ensName: string, hash: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number; }; hardfork: string | null; }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null; } | null, callParams: CallParams<'ensName' | 'hash' | 'txConfig'>) => { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; }>;
    setContenthash: (ensName: string, hash: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number; }; hardfork: string | null; }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null; } | null, callParams: CallParams<'ensName' | 'hash' | 'txConfig'>) => { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; }>;
    setMultihash: (ensName: string, hash: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number; }; hardfork: string | null; }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null; } | null, callParams: CallParams<'ensName' | 'hash' | 'txConfig'>) => { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; }>;
    setOwner: (name: string, address: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number; }; hardfork: string | null; }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null; } | null, callParams: CallParams<'name' | 'address' | 'txConfig'>) => { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; }>;
    setPubkey: (ensName: string, x: string, y: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number; }; hardfork: string | null; }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null; } | null, callParams: CallParams<'ensName' | 'x' | 'y' | 'txConfig'>) => { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; }>;
    setRecord: (name: string, owner: string, resolver: string, ttl: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number; }; hardfork: string | null; }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null; } | null, callParams: CallParams<'name' | 'owner' | 'resolver' | 'ttl' | 'txConfig'>) => { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; }>;
    setResolver: (name: string, address: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number; }; hardfork: string | null; }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null; } | null, callParams: CallParams<'name' | 'address' | 'txConfig'>) => { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; }>;
    setSubnodeOwner: (name: string, label: string, address: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number; }; hardfork: string | null; }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null; } | null, callParams: CallParams<'name' | 'label' | 'address' | 'txConfig'>) => { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; }>;
    setSubnodeRecord: (name: string, label: string, owner: string, resolver: string, ttl: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number; }; hardfork: string | null; }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null; } | null, callParams: CallParams<'name' | 'label' | 'owner' | 'resolver' | 'ttl' | 'txConfig'>) => { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; }>;
    setTTL: (name: string, ttl: string, txConfig: { accessList: string[] | null; chain: string | null; common: { baseChain: string | null; customChain: { chainId: number; name: string | null; networkId: number; }; hardfork: string | null; }; data: string | null; from: string; gas: number | null; gasPrice: string | null; hardfork: string | null; maxFeePerGas: string | null; maxPriorityFeePerGas: string | null; nonce: number | null; to: string | null; type: string | null; value: string | null; } | null, callParams: CallParams<'name' | 'ttl' | 'txConfig'>) => { blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; } | Promise<{ blockHash: string; blockNumber: number; contractAddress: string | null; cumulativeGasUsed: number; from: string; gasUsed: number; logs: { address: string; blockHash: string | null; blockNumber: number | null; data: string; logIndex: number; topics: string[]; transactionHash: string; transactionIndex: number; }[]; logsBloom: string; status: boolean; to: string; transactionHash: string; transactionIndex: number; }>;
    supportsInterface: (name: string, interfaceId: string, callParams: CallParams<'name' | 'interfaceId'>) => boolean | Promise<boolean>;
}
export function registerEns(service: EnsDef): void;
export function registerEns(serviceId: string, service: EnsDef): void;
export function registerEns(peer: FluencePeer, service: EnsDef): void;
export function registerEns(peer: FluencePeer, serviceId: string, service: EnsDef): void;
       

export function registerEns(...args: any) {
    registerService(
        args,
        {
    "defaultServiceId" : "Ens",
    "functions" : [
        {
            "functionName" : "getAddress",
            "argDefs" : [
                {
                    "name" : "ensName",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getContent",
            "argDefs" : [
                {
                    "name" : "ensName",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getContenthash",
            "argDefs" : [
                {
                    "name" : "ensName",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getMultihash",
            "argDefs" : [
                {
                    "name" : "ensName",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getOwner",
            "argDefs" : [
                {
                    "name" : "name",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getPubkey",
            "argDefs" : [
                {
                    "name" : "ensName",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getResolver",
            "argDefs" : [
                {
                    "name" : "name",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "getTTL",
            "argDefs" : [
                {
                    "name" : "name",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "isApprovalForAll",
            "argDefs" : [
                {
                    "name" : "owner",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "operator",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "recordExists",
            "argDefs" : [
                {
                    "name" : "name",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "registryAddress",
            "argDefs" : [
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "setAddress",
            "argDefs" : [
                {
                    "name" : "ensName",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "txConfig",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "setApprovalForAll",
            "argDefs" : [
                {
                    "name" : "operator",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "approval",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "txConfig",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "setContent",
            "argDefs" : [
                {
                    "name" : "ensName",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "hash",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "txConfig",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "setContenthash",
            "argDefs" : [
                {
                    "name" : "ensName",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "hash",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "txConfig",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "setMultihash",
            "argDefs" : [
                {
                    "name" : "ensName",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "hash",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "txConfig",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "setOwner",
            "argDefs" : [
                {
                    "name" : "name",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "txConfig",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "setPubkey",
            "argDefs" : [
                {
                    "name" : "ensName",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "x",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "y",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "txConfig",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "setRecord",
            "argDefs" : [
                {
                    "name" : "name",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "owner",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "resolver",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "ttl",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "txConfig",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "setResolver",
            "argDefs" : [
                {
                    "name" : "name",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "txConfig",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "setSubnodeOwner",
            "argDefs" : [
                {
                    "name" : "name",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "label",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "address",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "txConfig",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "setSubnodeRecord",
            "argDefs" : [
                {
                    "name" : "name",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "label",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "owner",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "resolver",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "ttl",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "txConfig",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "setTTL",
            "argDefs" : [
                {
                    "name" : "name",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "ttl",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "txConfig",
                    "argType" : {
                        "tag" : "optional"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        },
        {
            "functionName" : "supportsInterface",
            "argDefs" : [
                {
                    "name" : "name",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "interfaceId",
                    "argType" : {
                        "tag" : "primitive"
                    }
                }
            ],
            "returnType" : {
                "tag" : "primitive"
            }
        }
    ]
}
    );
}
      
// Functions

