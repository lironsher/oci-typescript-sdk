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
 * The information about associated FleetResource.
 */
export interface AssociatedFleetResourceDetails {
  /**
   * OCID of the reosurce.
   */
  "resourceId": string;
  /**
   * Type of the FleetResource.
   */
  "fleetResourceType"?: string;
  /**
   * Compartment Identifier.
   */
  "compartmentId": string;
  /**
   * Tenancy Identifier.
   */
  "tenancyId": string;
}

export namespace AssociatedFleetResourceDetails {
  export function getJsonObj(obj: AssociatedFleetResourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AssociatedFleetResourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
