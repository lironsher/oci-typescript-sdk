/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
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
 * A software source contains a collection of packages
 */
export interface SoftwareSource {
  /**
   * OCID for the Software Source
   */
  "id": string;
  /**
   * OCID for the Compartment
   */
  "compartmentId": string;
  /**
   * User friendly name for the software source
   */
  "displayName": string;
  /**
   * Information specified by the user about the software source
   */
  "description"?: string;
  /**
   * Type of the Software Source
   */
  "repoType": string;
  /**
   * The architecture type supported by the Software Source
   */
  "archType"?: model.ArchTypes;
  /**
   * URL for the repostiory
   */
  "url": string;
  /**
   * OCID for the parent software source, if there is one
   */
  "parentId"?: string;
  /**
   * Display name the parent software source, if there is one
   */
  "parentName"?: string;
  /**
   * The yum repository checksum type used by this software source
   */
  "checksumType"?: model.ChecksumTypes;
  /**
   * Name of the person maintaining this software source
   */
  "maintainerName"?: string;
  /**
   * Email address of the person maintaining this software source
   */
  "maintainerEmail"?: string;
  /**
   * Phone number of the person maintaining this software source
   */
  "maintainerPhone"?: string;
  /**
   * URL of the GPG key for this software source
   */
  "gpgKeyUrl"?: string;
  /**
   * ID of the GPG key for this software source
   */
  "gpgKeyId"?: string;
  /**
   * Fingerprint of the GPG key for this software source
   */
  "gpgKeyFingerprint"?: string;
  /**
   * status of the software source.
   */
  "status"?: SoftwareSource.Status;
  /**
   * The current state of the Software Source.
   */
  "lifecycleState"?: model.LifecycleStates;
  /**
   * Number of packages Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "packages"?: number;
  /**
   * list of the Managed Instances associated with this Software Sources
   */
  "associatedManagedInstances"?: Array<model.Id>;
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
}

export namespace SoftwareSource {
  export enum Status {
    Normal = "NORMAL",
    Unreachable = "UNREACHABLE",
    Error = "ERROR",
    Warning = "WARNING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SoftwareSource): object {
    const jsonObj = {
      ...obj,
      ...{
        "associatedManagedInstances": obj.associatedManagedInstances
          ? obj.associatedManagedInstances.map(item => {
              return model.Id.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SoftwareSource): object {
    const jsonObj = {
      ...obj,
      ...{
        "associatedManagedInstances": obj.associatedManagedInstances
          ? obj.associatedManagedInstances.map(item => {
              return model.Id.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
