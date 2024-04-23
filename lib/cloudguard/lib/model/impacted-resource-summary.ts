/**
 * Cloud Guard and Security Zones API
 * Use the Cloud Guard and Security Zones API to automate processes that you would otherwise perform through the Cloud Guard Console or the Security Zones Console. For more information on these services, see the [Cloud Guard](/iaas/cloud-guard/home.htm) and [Security Zones](/iaas/security-zone/home.htm) documentation.

**Note:** For Cloud Guard, you can perform Create, Update, and Delete operations only from the reporting region of your Cloud Guard tenancy. You can perform Read operations from any region.

 * OpenAPI spec version: 20200131
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
 * Summary of information on a resource that\u2019s been impacted by a detected problem.
 */
export interface ImpactedResourceSummary {
  /**
   * Unique identifier for finding event
   */
  "id": string;
  /**
   * Unique identifier of the impacted resource
   */
  "resourceId": string;
  /**
   * Problem ID associated with the Impacted resource
   */
  "problemId": string;
  /**
   * Compartment OCID where the impacted resource is created
   */
  "compartmentId": string;
  /**
   * Sighting type involved
   */
  "sightingType"?: string;
  /**
   * Display name of the sighting type
   */
  "sightingTypeDisplayName"?: string;
  /**
   * Name of the impacted resource
   */
  "resourceName": string;
  /**
   * Type of the impacted resource
   */
  "resourceType": string;
  /**
   * Region where the resource is created
   */
  "region": string;
  /**
   * Date and time when the problem was identified
   */
  "timeIdentified": Date;
}

export namespace ImpactedResourceSummary {
  export function getJsonObj(obj: ImpactedResourceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ImpactedResourceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
