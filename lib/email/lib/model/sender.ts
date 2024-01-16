/**
 * Email Delivery API
 * API for the Email Delivery service. Use this API to send high-volume, application-generated
emails. For more information, see [Overview of the Email Delivery Service](/iaas/Content/Email/Concepts/overview.htm).


**Note:** Write actions (POST, UPDATE, DELETE) may take several minutes to propagate and be reflected by the API.
If a subsequent read request fails to reflect your changes, wait a few minutes and try again.

 * OpenAPI spec version: 20170907
 * Contact: email-dev_us_grp@oracle.com
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
 * The full information representing an approved sender.
 */
export interface Sender {
  /**
   * The OCID for the compartment.
   */
  "compartmentId": string;
  /**
   * Email address of the sender.
   */
  "emailAddress": string;
  /**
   * The unique OCID of the sender.
   */
  "id": string;
  /**
   * Value of the SPF field. For more information about SPF, please see
   * [SPF Authentication](https://docs.us-phoenix-1.oraclecloud.com/Content/Email/Concepts/overview.htm#components).
   *
   */
  "isSpf"?: boolean;
  /**
   * The sender's current lifecycle state.
   */
  "lifecycleState"?: Sender.LifecycleState;
  /**
   * The date and time the approved sender was added in \"YYYY-MM-ddThh:mmZ\"
   * format with a Z offset, as defined by RFC 3339.
   *
   */
  "timeCreated"?: Date;
  /**
   * The email domain used to assert responsibility for emails sent from this sender.
   *
   */
  "emailDomainId"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Sender {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Sender): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Sender): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
