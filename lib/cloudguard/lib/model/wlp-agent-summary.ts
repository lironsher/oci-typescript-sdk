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
 * WLP agent resource running on an on-premise resource.
 * Example: {@code {\"id\": \"ocid1.wlpagent.oc1..exampleawwcufihrc62gpbcvbjizswgoj4w7rg5q4fwbg\",
 *           \"compartmentId\": \"ocid1.compartment.oc1..exampleawwcufihrc62gpbcvbjizswgoj4w7rg5q4fwbg2fauxvlcxbtliaa\",
 *           \"agentVersion\": \"1.0.11\",
 *           \"certificateId\": \"ocid1.certificate.oc1..exampleawwcufihrc62gpbcvbjizswgoj4w7oj4w7rg5q4fwbg2fauxv\"}}
 *
 */
export interface WlpAgentSummary {
  /**
   * OCID for WlpAgent
   */
  "id": string;
  /**
   * OCID for instance in which WlpAgent is installed
   */
  "hostId"?: string;
  /**
   * Tenant ID of the host
   */
  "tenantId"?: string;
  /**
   * Compartment OCID of WlpAgent
   */
  "compartmentId": string;
  /**
   * The version of the agent
   */
  "agentVersion": string;
  /**
   * The certificate ID returned by OCI certificates service
   */
  "certificateId": string;
  /**
   * The date and time the WLP agent was created. Format defined by RFC3339.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the WLP agent was updated. Format defined by RFC3339.
   */
  "timeUpdated"?: Date;
  /**
    * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
* Example: {@code {\"bar-key\": \"value\"}}
* <p>
Avoid entering confidential information.
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * System tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* System tags can be viewed by users, but can only be created by the system.
* <p>
Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace WlpAgentSummary {
  export function getJsonObj(obj: WlpAgentSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WlpAgentSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
