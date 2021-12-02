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

export interface AbiDef {
    decodeLog: (inputs: { indexed: boolean | null; internalType: string | null; name: string; type: string; }[], hexString: string, topics: string[], callParams: CallParams<'inputs' | 'hexString' | 'topics'>) => string | Promise<string>;
    decodeParameter: (type: string, hexString: string, callParams: CallParams<'type' | 'hexString'>) => string | Promise<string>;
    decodeParameters: (typesArray: string[], hexString: string, callParams: CallParams<'typesArray' | 'hexString'>) => string | Promise<string>;
    encodeEventSignature: (eventName: string, callParams: CallParams<'eventName'>) => string | Promise<string>;
    encodeFunctionCall: (jsonInterface: string, parameters: string[], callParams: CallParams<'jsonInterface' | 'parameters'>) => string | Promise<string>;
    encodeFunctionSignature: (functionName: string, callParams: CallParams<'functionName'>) => string | Promise<string>;
    encodeParameter: (type: string, parameter: string, callParams: CallParams<'type' | 'parameter'>) => string | Promise<string>;
    encodeParameters: (typesArray: string[], parameters: string[], callParams: CallParams<'typesArray' | 'parameters'>) => string | Promise<string>;
}
export function registerAbi(service: AbiDef): void;
export function registerAbi(serviceId: string, service: AbiDef): void;
export function registerAbi(peer: FluencePeer, service: AbiDef): void;
export function registerAbi(peer: FluencePeer, serviceId: string, service: AbiDef): void;
       

export function registerAbi(...args: any) {
    registerService(
        args,
        {
    "defaultServiceId" : "Abi",
    "functions" : [
        {
            "functionName" : "decodeLog",
            "argDefs" : [
                {
                    "name" : "inputs",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "hexString",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "topics",
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
            "functionName" : "decodeParameter",
            "argDefs" : [
                {
                    "name" : "type",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "hexString",
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
            "functionName" : "decodeParameters",
            "argDefs" : [
                {
                    "name" : "typesArray",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "hexString",
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
            "functionName" : "encodeEventSignature",
            "argDefs" : [
                {
                    "name" : "eventName",
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
            "functionName" : "encodeFunctionCall",
            "argDefs" : [
                {
                    "name" : "jsonInterface",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "parameters",
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
            "functionName" : "encodeFunctionSignature",
            "argDefs" : [
                {
                    "name" : "functionName",
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
            "functionName" : "encodeParameter",
            "argDefs" : [
                {
                    "name" : "type",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "parameter",
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
            "functionName" : "encodeParameters",
            "argDefs" : [
                {
                    "name" : "typesArray",
                    "argType" : {
                        "tag" : "primitive"
                    }
                },
                {
                    "name" : "parameters",
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

