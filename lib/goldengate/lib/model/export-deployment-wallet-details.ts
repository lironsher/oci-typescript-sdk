/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * Metadata required to export wallet from deployment
 *
 */
export interface ExportDeploymentWalletDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the customer vault being
   * referenced.
   * If provided, this will reference a vault which the customer will be required to ensure
   * the policies are established to permit the GoldenGate Service to manage secrets contained
   * within this vault.
   *
   */
  "vaultId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the customer \"Master\" key being
   * referenced.
   * If provided, this will reference a key which the customer will be required to ensure
   * the policies are established to permit the GoldenGate Service to utilize this key to
   * manage secrets.
   *
   */
  "masterEncryptionKeyId": string;
  /**
   * Name of the secret with which secret is shown in vault
   */
  "secretName": string;
  /**
   * Metadata about this specific object.
   *
   */
  "description"?: string;
}

export namespace ExportDeploymentWalletDetails {
  export function getJsonObj(obj: ExportDeploymentWalletDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExportDeploymentWalletDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
