/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).
 * OpenAPI spec version: 20200630
 *
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
 * Vault secret OCID for password that can be used with monitor Resource Principal.
 * Example, ocid1.vaultsecret.oc1.iad.amaaaaaagpihjxqadwyc4kjhpeis2bylhzmp5r2si6mz2h4eujevnmf3zoca.
 *
 */
export interface PasswordInVault extends model.Password {
  /**
   * Vault secret OCID.
   */
  "vaultSecretId": string;

  "passwordType": string;
}

export namespace PasswordInVault {
  export function getJsonObj(obj: PasswordInVault, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Password.getJsonObj(obj) as PasswordInVault)),
      ...{}
    };

    return jsonObj;
  }
  export const passwordType = "VAULT_SECRET_ID";
  export function getDeserializedJsonObj(obj: PasswordInVault, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Password.getDeserializedJsonObj(obj) as PasswordInVault)),
      ...{}
    };

    return jsonObj;
  }
}
