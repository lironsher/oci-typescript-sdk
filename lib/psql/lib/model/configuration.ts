/**
 * PGSQL Control Plane API
 * Use the OCI Database with PostgreSQL API to manage resources such as database systems, database nodes, backups, and configurations. 
For information, see the user guide documentation for the [service](/iaas/Content/postgresql/home.htm).

 * OpenAPI spec version: 20220915
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
 * PostgreSQL configuration for a database system.
 */
export interface Configuration {
  /**
   * A unique identifier for the configuration. Immutable on creation.
   */
  "id": string;
  /**
   * A user-friendly display name for the configuration. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * A description for the configuration.
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment that contains the configuration.
   */
  "compartmentId": string;
  /**
    * The date and time that the configuration was created, expressed in
* [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated": Date;
  /**
   * The current state of the configuration.
   */
  "lifecycleState": Configuration.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * The name of the shape for the configuration.
   * Example: {@code VM.Standard.E4.Flex}
   *
   */
  "shape": string;
  /**
   * CPU core count.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "instanceOcpuCount": number;
  /**
   * Memory size in gigabytes with 1GB increment.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "instanceMemorySizeInGBs": number;
  /**
   * Version of the PostgreSQL database.
   */
  "dbVersion": string;
  "configurationDetails": model.ConfigurationDetails;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
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
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Configuration {
  export enum LifecycleState {
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Configuration): object {
    const jsonObj = {
      ...obj,
      ...{
        "configurationDetails": obj.configurationDetails
          ? model.ConfigurationDetails.getJsonObj(obj.configurationDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Configuration): object {
    const jsonObj = {
      ...obj,
      ...{
        "configurationDetails": obj.configurationDetails
          ? model.ConfigurationDetails.getDeserializedJsonObj(obj.configurationDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
