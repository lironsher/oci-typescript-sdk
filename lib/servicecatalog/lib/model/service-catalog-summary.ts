/**
 * Service Catalog API
 * Manage solutions in Oracle Cloud Infrastructure Service Catalog.
 * OpenAPI spec version: 20210527
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
 * The model for a summary of an Oracle Cloud Infrastructure service catalog.
 */
export interface ServiceCatalogSummary {
  /**
   * The unique identifier for the Service catalog.
   */
  "id": string;
  /**
   * The lifecycle state of the service catalog.
   */
  "lifecycleState": string;
  /**
   * The Compartment id where the service catalog exists.
   */
  "compartmentId": string;
  /**
   * The name of the service catalog.
   */
  "displayName": string;
  /**
    * The date and time this service catalog was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
* timestamp format.
* <p>
Example: {@code 2021-08-25T21:10:29.600Z}
* 
    */
  "timeCreated": Date;
}

export namespace ServiceCatalogSummary {
  export function getJsonObj(obj: ServiceCatalogSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ServiceCatalogSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
