/**
 *
 *
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cloudbridge/ListAssetSourceConnections.ts.html |here} to see how to use ListAssetSourceConnectionsRequest.
 */
export interface ListAssetSourceConnectionsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the asset source.
   */
  "assetSourceId": string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * A token representing the position at which to start retrieving results. This must come from the {@code opc-next-page} header field of a previous response.
   */
  "page"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}
