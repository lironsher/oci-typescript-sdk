/**
 * Oracle Cloud Bridge API
 * API for Oracle Cloud Bridge service.
 * OpenAPI spec version: 20220509
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
 * Description of the ApplianceImage.
 */
export interface ApplianceImageSummary {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * The name of the appliance Image file.
   */
  "fileName": string;
  /**
   * The name of the image to be displayed.
   */
  "displayName": string;
  /**
   * The version of the image file.
   */
  "version": string;
  /**
   * The size of the image file in megabytes.
   */
  "sizeInMBs": string;
  /**
   * The checksum of the image file.
   */
  "checksum": string;
  /**
   * The virtualization platform that the image file supports.
   */
  "platform": string;
  /**
   * The file format of the image file.
   */
  "format": string;
  /**
   * The time when the appliance image was created.An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time when the appliance image was last updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated": Date;
  /**
   * The current state of the appliance image.
   */
  "lifecycleState"?: ApplianceImageSummary.LifecycleState;
  /**
   * The URL from which the appliance image can be downloaded.
   */
  "downloadUrl": string;
  /**
   * The freeform tags associated with this resource, if any. Each tag is a simple key-value pair with no
   * predefined name, type, or namespace/scope. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags associated with this resource, if any. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ApplianceImageSummary {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
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

  export function getJsonObj(obj: ApplianceImageSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApplianceImageSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
