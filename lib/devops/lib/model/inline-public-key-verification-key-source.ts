/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Specifies the Inline public key verification source details
 */
export interface InlinePublicKeyVerificationKeySource extends model.VerificationKeySource {
  /**
   * Current version of Base64 encoding of the public key which is in binary GPG exported format.
   */
  "currentPublicKey": string;
  /**
   * Previous version of Base64 encoding of the public key which is in binary GPG exported format. This would be used for key rotation scenarios.
   */
  "previousPublicKey"?: string;

  "verificationKeySourceType": string;
}

export namespace InlinePublicKeyVerificationKeySource {
  export function getJsonObj(
    obj: InlinePublicKeyVerificationKeySource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.VerificationKeySource.getJsonObj(obj) as InlinePublicKeyVerificationKeySource)),
      ...{}
    };

    return jsonObj;
  }
  export const verificationKeySourceType = "INLINE_PUBLIC_KEY";
  export function getDeserializedJsonObj(
    obj: InlinePublicKeyVerificationKeySource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.VerificationKeySource.getDeserializedJsonObj(
            obj
          ) as InlinePublicKeyVerificationKeySource)),
      ...{}
    };

    return jsonObj;
  }
}
