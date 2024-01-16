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
 * Description of an asset source.
 */
export interface VmWareAssetSourceSummary extends model.AssetSourceSummary {
  /**
   * Endpoint for VMware asset discovery and replication in the form of {@code https://<host>:<port>/sdk}
   */
  "vcenterEndpoint": string;

  "type": string;
}

export namespace VmWareAssetSourceSummary {
  export function getJsonObj(obj: VmWareAssetSourceSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AssetSourceSummary.getJsonObj(obj) as VmWareAssetSourceSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "VMWARE";
  export function getDeserializedJsonObj(
    obj: VmWareAssetSourceSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AssetSourceSummary.getDeserializedJsonObj(obj) as VmWareAssetSourceSummary)),
      ...{}
    };

    return jsonObj;
  }
}
