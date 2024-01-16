/**
 *
 *
 * OpenAPI spec version: 20211001
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datalabelingservicedataplane/GetRecordPreviewContent.ts.html |here} to see how to use GetRecordPreviewContentRequest.
 */
export interface GetRecordPreviewContentRequest extends common.BaseRequest {
  /**
   * The OCID of the record annotated.
   */
  "recordId": string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * For optimistic concurrency control. In the GET call
   * for a resource, set the {@code if-none-match} parameter to the value of the
   * etag from a previous GET or POST response for that resource.
   * The resource will be fetched only if the etag you provide does
   * not match the resource's current etag value.
   *
   */
  "ifNoneMatch"?: string;
}
