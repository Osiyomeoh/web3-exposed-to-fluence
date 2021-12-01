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

export interface ConvertDef {
    strTou16: (input: string, callParams: CallParams<'input'>) => number[] | Promise<number[]>;
}
export function registerConvert(service: ConvertDef): void;
export function registerConvert(serviceId: string, service: ConvertDef): void;
export function registerConvert(peer: FluencePeer, service: ConvertDef): void;
export function registerConvert(peer: FluencePeer, serviceId: string, service: ConvertDef): void;
       

export function registerConvert(...args: any) {
    registerService(
        args,
        {
    "defaultServiceId" : "Convert",
    "functions" : [
        {
            "functionName" : "strTou16",
            "argDefs" : [
                {
                    "name" : "input",
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

