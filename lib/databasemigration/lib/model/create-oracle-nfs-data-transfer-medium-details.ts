/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20230518
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
 * OCI Object Storage bucket will be used to store Data Pump dump files for the migration.
 */
export interface CreateOracleNfsDataTransferMediumDetails
  extends model.CreateOracleDataTransferMediumDetails {
  "objectStorageBucket"?: model.CreateObjectStoreBucket;
  "source"?: model.OciCliDumpTransferDetails | model.CurlTransferDetails;
  "target"?: model.OciCliDumpTransferDetails | model.CurlTransferDetails;
  /**
   * OCID of the shared storage mount target
   *
   */
  "sharedStorageMountTargetId"?: string;

  "type": string;
}

export namespace CreateOracleNfsDataTransferMediumDetails {
  export function getJsonObj(
    obj: CreateOracleNfsDataTransferMediumDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateOracleDataTransferMediumDetails.getJsonObj(
            obj
          ) as CreateOracleNfsDataTransferMediumDetails)),
      ...{
        "objectStorageBucket": obj.objectStorageBucket
          ? model.CreateObjectStoreBucket.getJsonObj(obj.objectStorageBucket)
          : undefined,
        "source": obj.source ? model.HostDumpTransferDetails.getJsonObj(obj.source) : undefined,
        "target": obj.target ? model.HostDumpTransferDetails.getJsonObj(obj.target) : undefined
      }
    };

    return jsonObj;
  }
  export const type = "NFS";
  export function getDeserializedJsonObj(
    obj: CreateOracleNfsDataTransferMediumDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateOracleDataTransferMediumDetails.getDeserializedJsonObj(
            obj
          ) as CreateOracleNfsDataTransferMediumDetails)),
      ...{
        "objectStorageBucket": obj.objectStorageBucket
          ? model.CreateObjectStoreBucket.getDeserializedJsonObj(obj.objectStorageBucket)
          : undefined,
        "source": obj.source
          ? model.HostDumpTransferDetails.getDeserializedJsonObj(obj.source)
          : undefined,
        "target": obj.target
          ? model.HostDumpTransferDetails.getDeserializedJsonObj(obj.target)
          : undefined
      }
    };

    return jsonObj;
  }
}
