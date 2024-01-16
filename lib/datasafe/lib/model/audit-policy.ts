/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The resource represents all available audit policies relevant for the target database with their corresponding audit conditions.
 * The audit policies could be in any one of the following 3 states in the target database
 * 1) Created and enabled
 * 2) Created but not enabled
 * 3) Not created
 * For more details on available audit policies, refer to [documentation](https://docs.oracle.com/en/cloud/paas/data-safe/udscs/audit-policies.html#GUID-361A9A9A-7C21-4F5A-8945-9B3A0C472827).
 *
 */
export interface AuditPolicy {
  /**
   * The OCID of the audit policy.
   */
  "id": string;
  /**
   * The OCID of the compartment containing the audit policy.
   */
  "compartmentId": string;
  /**
   * The display name of the audit policy.
   */
  "displayName": string;
  /**
   * Description of the audit policy.
   */
  "description"?: string;
  /**
   * The time the the audit policy was created, in the format defined by RFC3339.
   */
  "timeCreated": Date;
  /**
   * The last date and time the audit policy was updated, in the format defined by RFC3339.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the audit policy.
   */
  "lifecycleState": model.AuditPolicyLifecycleState;
  /**
   * Details about the current state of the audit policy in Data Safe.
   */
  "lifecycleDetails"?: string;
  /**
   * The OCID of the target for which the audit policy is created.
   */
  "targetId": string;
  /**
   * Option provided to users at the target to indicate whether the Data Safe service account has to be excluded while provisioning the audit policies.
   */
  "isDataSafeServiceAccountExcluded": boolean;
  /**
   * Indicates the last provisioning time of audit policies on the target, in the format defined by RFC3339.
   */
  "timeLastProvisioned"?: Date;
  /**
   * The time when the audit policies was last retrieved from this target, in the format defined by RFC3339.
   */
  "timeLastRetrieved"?: Date;
  /**
   * Represents all available audit policy specifications relevant for the target database. For more details on available audit polcies, refer to [documentation](https://docs.oracle.com/en/cloud/paas/data-safe/udscs/audit-policies.html#GUID-361A9A9A-7C21-4F5A-8945-9B3A0C472827).
   *
   */
  "auditSpecifications"?: Array<model.AuditSpecification>;
  /**
   * Lists the audit policy provisioning conditions for the target database.
   */
  "auditConditions"?: Array<model.AuditConditions>;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see Resource Tags.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace AuditPolicy {
  export function getJsonObj(obj: AuditPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "auditSpecifications": obj.auditSpecifications
          ? obj.auditSpecifications.map(item => {
              return model.AuditSpecification.getJsonObj(item);
            })
          : undefined,
        "auditConditions": obj.auditConditions
          ? obj.auditConditions.map(item => {
              return model.AuditConditions.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AuditPolicy): object {
    const jsonObj = {
      ...obj,
      ...{
        "auditSpecifications": obj.auditSpecifications
          ? obj.auditSpecifications.map(item => {
              return model.AuditSpecification.getDeserializedJsonObj(item);
            })
          : undefined,
        "auditConditions": obj.auditConditions
          ? obj.auditConditions.map(item => {
              return model.AuditConditions.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
