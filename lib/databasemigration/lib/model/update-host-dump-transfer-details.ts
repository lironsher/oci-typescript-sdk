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
 * Optional additional properties for dump transfer in source or target host. Default kind is CURL.
 */
export interface UpdateHostDumpTransferDetails {
  /**
   * Directory path to OCI SSL wallet location on Db server node.
   */
  "walletLocation"?: string;

  "kind": string;
}

export namespace UpdateHostDumpTransferDetails {
  export function getJsonObj(obj: UpdateHostDumpTransferDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "CURL":
          return model.UpdateCurlTransferDetails.getJsonObj(
            <model.UpdateCurlTransferDetails>(<object>jsonObj),
            true
          );
        case "OCI_CLI":
          return model.UpdateOciCliDumpTransferDetails.getJsonObj(
            <model.UpdateOciCliDumpTransferDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.kind}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateHostDumpTransferDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "CURL":
          return model.UpdateCurlTransferDetails.getDeserializedJsonObj(
            <model.UpdateCurlTransferDetails>(<object>jsonObj),
            true
          );
        case "OCI_CLI":
          return model.UpdateOciCliDumpTransferDetails.getDeserializedJsonObj(
            <model.UpdateOciCliDumpTransferDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.kind}`);
      }
    }
    return jsonObj;
  }
}
