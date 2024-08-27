/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Autonomous Database Software Images created from Autonomous Container Database
 *
 */
export interface AutonomousDatabaseSoftwareImage {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Autonomous Database Software Image.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The database version with which the Autonomous Database Software Image is to be built.
   */
  "databaseVersion": string;
  /**
   * The user-friendly name for the Autonomous Database Software Image. The name does not have to be unique.
   */
  "displayName": string;
  /**
   * The current state of the Autonomous Database Software Image.
   */
  "lifecycleState": AutonomousDatabaseSoftwareImage.LifecycleState;
  /**
   * Detailed message for the lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time the Autonomous Database Software Image was created.
   */
  "timeCreated": Date;
  /**
   * The Release Updates.
   */
  "releaseUpdate": string;
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
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * One-off patches included in the Autonomous Database Software Image
   */
  "autonomousDsiOneOffPatches"?: Array<string>;
  /**
   * To what shape the image is meant for.
   */
  "imageShapeFamily": AutonomousDatabaseSoftwareImage.ImageShapeFamily;
  /**
   * DST Time-Zone File version of the Autonomous Container Database.
   */
  "dstFileVersion"?: string;
}

export namespace AutonomousDatabaseSoftwareImage {
  export enum LifecycleState {
    Available = "AVAILABLE",
    Failed = "FAILED",
    Provisioning = "PROVISIONING",
    Expired = "EXPIRED",
    Terminated = "TERMINATED",
    Terminating = "TERMINATING",
    Updating = "UPDATING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ImageShapeFamily {
    ExaccShape = "EXACC_SHAPE",
    ExadataShape = "EXADATA_SHAPE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AutonomousDatabaseSoftwareImage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutonomousDatabaseSoftwareImage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
