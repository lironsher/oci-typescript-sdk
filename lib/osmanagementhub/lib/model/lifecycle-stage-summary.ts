/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for instances in OCI, your private data center, or 3rd-party clouds. 
For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * Provides summary information for a lifecycle stage.
 */
export interface LifecycleStageSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the lifecycle stage.
   */
  "id"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains the lifecycle stage.
   */
  "compartmentId": string;
  /**
   * The user-friendly name for the lifecycle stage.
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the lifecycle environment that contains the lifecycle stage.
   */
  "lifecycleEnvironmentId"?: string;
  /**
   * The user-friendly name for the lifecycle environment. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "lifecycleEnvironmentDisplayName"?: string;
  /**
   * User-specified rank for the lifecycle stage. Rank determines the hierarchy of the lifecycle stages within the lifecycle environment.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "rank": number;
  /**
   * The operating system of the managed instances in the lifecycle stage.
   */
  "osFamily"?: model.OsFamily;
  /**
   * The CPU architecture of the managed instances in the lifecycle stage.
   */
  "archType"?: model.ArchType;
  /**
   * The vendor of the operating system used by the managed instances in the lifecycle stage.
   */
  "vendorName"?: model.VendorName;
  /**
   * The list of managed instances associated with the lifecycle stage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "managedInstances"?: number;
  /**
   * The location of managed instances associated with the lifecycle stage.
   */
  "location"?: model.ManagedInstanceLocation;
  "softwareSourceId"?: model.SoftwareSourceDetails;
  /**
   * The time the lifecycle stage was created (in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) format).
   */
  "timeCreated"?: Date;
  /**
   * The time the lifecycle stage was last modified (in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) format).
   */
  "timeModified"?: Date;
  /**
   * The current state of the lifecycle environment.
   */
  "lifecycleState"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace LifecycleStageSummary {
  export function getJsonObj(obj: LifecycleStageSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "softwareSourceId": obj.softwareSourceId
          ? model.SoftwareSourceDetails.getJsonObj(obj.softwareSourceId)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LifecycleStageSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "softwareSourceId": obj.softwareSourceId
          ? model.SoftwareSourceDetails.getDeserializedJsonObj(obj.softwareSourceId)
          : undefined
      }
    };

    return jsonObj;
  }
}
