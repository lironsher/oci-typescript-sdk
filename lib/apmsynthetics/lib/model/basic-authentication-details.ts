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
 * Details for basic authentication.
 */
export interface BasicAuthenticationDetails {
  /**
   * Username for authentication.
   */
  "username": string;
  "password": model.PasswordInText | model.PasswordInVault;
}

export namespace BasicAuthenticationDetails {
  export function getJsonObj(obj: BasicAuthenticationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "password": obj.password ? model.Password.getJsonObj(obj.password) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BasicAuthenticationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "password": obj.password ? model.Password.getDeserializedJsonObj(obj.password) : undefined
      }
    };

    return jsonObj;
  }
}
