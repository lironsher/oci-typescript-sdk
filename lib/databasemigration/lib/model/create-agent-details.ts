/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20200720
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Note: Deprecated. Use the new resource model APIs instead.
 * ODMS Agent Details
 *
 */
export interface CreateAgentDetails {
  /**
   * The OCID of the compartment.
   *
   */
  "compartmentId": string;
  /**
   * ODMS Agent name
   *
   */
  "displayName": string;
  /**
   * The OCID of the Stream
   *
   */
  "streamId": string;
  /**
   * ODMS Agent public key as a Base64 Encoded string.
   *
   */
  "publicKey": string;
  /**
   * ODMS Agent version
   *
   */
  "version": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateAgentDetails {
  export function getJsonObj(obj: CreateAgentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateAgentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
