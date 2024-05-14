/**
 * Email Delivery API
 * Use the Email Delivery API to do the necessary set up to send high-volume and application-generated emails through the OCI Email Delivery service.
For more information, see [Overview of the Email Delivery Service](/iaas/Content/Email/Concepts/overview.htm).

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
 * The properties that define a Email Return Path
 *
 */
export interface EmailReturnPath {
  /**
    * The email return path domain in the Internet Domain Name System (DNS).
* <p>
Example: {@code iad1.rp.example.com}
* 
    */
  "name": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the email return path.
   *
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the EmailDomain
   * that this email return path belongs to.
   *
   */
  "parentResourceId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains this email return path.
   *
   */
  "compartmentId"?: string;
  /**
   * The current state of the email return path.
   */
  "lifecycleState"?: EmailReturnPath.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a
   * resource in 'Failed' state.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The description of the email return path. Avoid entering confidential information.
   */
  "description"?: string;
  /**
   * The name of the DNS subdomain that must be provisioned to enable email recipients to verify Email Return Path.
   * It is usually created with a CNAME record set to the cnameRecordValue.
   *
   */
  "dnsSubdomainName"?: string;
  /**
   * The DNS CNAME record value to provision to the Return Patn DNS subdomain, when using the CNAME method for Email Return Path setup (preferred).
   *
   */
  "cnameRecordValue"?: string;
  /**
    * The time the email return path was created.
* Times are expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
* timestamp format, \"YYYY-MM-ddThh:mmZ\".
* <p>
Example: {@code 2021-02-12T22:47:12.613Z}
* 
    */
  "timeCreated"?: Date;
  /**
   * The time of the last change to the Email Return Path configuration, due to a state change or
   * an update operation.
   * Times are expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * timestamp format, \"YYYY-MM-ddThh:mmZ\".
   *
   */
  "timeUpdated"?: Date;
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
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace EmailReturnPath {
  export enum LifecycleState {
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    NeedsAttention = "NEEDS_ATTENTION",
    Updating = "UPDATING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: EmailReturnPath): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EmailReturnPath): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
