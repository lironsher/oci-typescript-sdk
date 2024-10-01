/**
 * Zero Trust Packet Routing Control Plane API
 * Use the Zero Trust Packet Routing Control Plane API to manage ZPR configuration and policy. See the [Zero Trust Packet Routing](/iaas/Content/zero-trust-packet-routing/home.htm) documentation for more information.
 * OpenAPI spec version: 20240301
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
* A ZprPolicy is a rule that governs the communication between specific endpoints identified by their security attributes.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to
* an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/policiesgs/get-started-with-policies.htm).
* 
*/
export interface ZprPolicy {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the ZprPolicy.
   */
  "id": string;
  /**
   * The name you assign to the ZprPolicy during creation. The name must be unique across all ZPL policies in the tenancy.
   */
  "name": string;
  /**
   * The description you assign to the ZprPolicy during creation. Does not have to be unique, and it's changeable.
   */
  "description": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * An array of ZprPolicy statements (up to 25 statements per ZprPolicy) written in the Zero Trust Packet Routing Policy Language.
   */
  "statements": Array<string>;
  /**
   * The current state of the ZprPolicy.
   */
  "lifecycleState": ZprPolicy.LifecycleState;
  /**
    * The date and time the ZprPolicy was created, in the format defined by [RFC 3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated": Date;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags": { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
    * System tags for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A message that describes the current state of the ZprPolicy in more detail. For example,
   * can be used to provide actionable information for a resource in the Failed state.
   *
   */
  "lifecycleDetails"?: string;
  /**
    * The date and time the ZprPolicy was updated, in the format defined by [RFC 3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeUpdated"?: Date;
}

export namespace ZprPolicy {
  export enum LifecycleState {
    Active = "ACTIVE",
    Creating = "CREATING",
    Failed = "FAILED",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    NeedsAttention = "NEEDS_ATTENTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ZprPolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ZprPolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
