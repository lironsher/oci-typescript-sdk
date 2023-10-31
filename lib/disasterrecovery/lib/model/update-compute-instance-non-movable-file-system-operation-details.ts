/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (DR) API to manage disaster recovery for business applications.
Full Stack DR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster 
recovery capabilities for all layers of an application stack, including infrastructure, middleware, database, 
and application.

 * OpenAPI spec version: 20220125
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The details for updating the operations performed on a file systems for non-movable compute instance.
 *
 */
export interface UpdateComputeInstanceNonMovableFileSystemOperationDetails {
  /**
    * The export path of the file system.
* <p>
Example: `/fs-export-path`
* 
    */
  "exportPath": string;
  /**
    * The physical mount point of the file system on a host.
* <p>
Example: `/mnt/yourmountpoint`
* 
    */
  "mountPoint": string;
  /**
    * The OCID of mount target.
* <p>
Example: `ocid1.mounttarget.oc1..uniqueID`
* 
    */
  "mountTargetId": string;
}

export namespace UpdateComputeInstanceNonMovableFileSystemOperationDetails {
  export function getJsonObj(
    obj: UpdateComputeInstanceNonMovableFileSystemOperationDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: UpdateComputeInstanceNonMovableFileSystemOperationDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
