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
 * Description of a software source to be created on the management system
 */
export interface CreateSoftwareSourceDetails {
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
   * The architecture type supported by the Software Source
   */
  "archType": model.ArchTypes;
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
   * The yum repository checksum type used by this software source
   */
  "checksumType"?: model.ChecksumTypes;
  /**
   * OCID for the parent software source, if there is one
   */
  "parentId"?: string;
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

export namespace CreateSoftwareSourceDetails {
  export function getJsonObj(obj: CreateSoftwareSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateSoftwareSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
