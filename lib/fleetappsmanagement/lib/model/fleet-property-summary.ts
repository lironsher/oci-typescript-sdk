/**
 * Fleet Application Management Service API
 * Fleet Application Management Service API. Use this API to for all FAMS related activities.
To manage fleets,view complaince report for the Fleet,scedule patches and other lifecycle activities

 * OpenAPI spec version: 20230831
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
 * Summary of the FleetProperty.
 */
export interface FleetPropertySummary {
  /**
   * The unique id of the resource.
   */
  "id": string;
  /**
   * Tenancy OCID
   */
  "compartmentId": string;
  /**
   * Property Id.
   */
  "propertyId": string;
  /**
    * A user-friendly name. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Example: {@code My new resource}
* 
    */
  "displayName": string;
  /**
   * The time this resource was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time this resource was last updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * Value of the Property
   */
  "value"?: string;
  /**
   * Type of the FleetProperty.
   */
  "valueType": model.ValueType;
  /**
   * The current state of the FleetProperty.
   */
  "lifecycleState": string;
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace FleetPropertySummary {
  export function getJsonObj(obj: FleetPropertySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FleetPropertySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
