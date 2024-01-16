/**
 * Oracle Content Management API
 * Oracle Content Management is a cloud-based content hub to drive omni-channel content management and accelerate experience delivery
 * OpenAPI spec version: 20190912
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
 * Details of the identity stripe used for OceInstance
 */
export interface IdentityStripeDetails {
  /**
   * Name of the Identity Cloud Service instance in My Services to be used.
   * Example: {@code secondstripe}
   *
   */
  "serviceName": string;
  /**
   * Value of the Identity Cloud Service tenancy.
   * Example: {@code idcs-8416ebdd0d674f84803f4193cce026e9}
   *
   */
  "tenancy": string;
}

export namespace IdentityStripeDetails {
  export function getJsonObj(obj: IdentityStripeDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IdentityStripeDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
