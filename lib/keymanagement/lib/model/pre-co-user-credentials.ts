/**
 * Vault Key Management API
 * Use the Key Management API to manage vaults and keys. For more information, see [Managing Vaults](/Content/KeyManagement/Tasks/managingvaults.htm) and [Managing Keys](/Content/KeyManagement/Tasks/managingkeys.htm).

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Pre Crypto officer user credentials.
 */
export interface PreCoUserCredentials {
  /**
   * The pre crypto officer username, which should be chosen as a non confidential string.
   */
  "username": string;
  /**
   * The base 64 encoded pre crypto officer password.
   */
  "password": string;
}

export namespace PreCoUserCredentials {
  export function getJsonObj(obj: PreCoUserCredentials): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PreCoUserCredentials): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
