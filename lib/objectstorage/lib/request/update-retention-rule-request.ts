/**
 *
 *
 * OpenAPI spec version: 20160918
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/objectstorage/UpdateRetentionRule.ts.html |here} to see how to use UpdateRetentionRuleRequest.
 */
export interface UpdateRetentionRuleRequest extends common.BaseRequest {
  /**
   * The Object Storage namespace used for the request.
   */
  "namespaceName": string;
  /**
   * The name of the bucket. Avoid entering confidential information.
   * Example: {@code my-new-bucket1}
   *
   */
  "bucketName": string;
  /**
   * The ID of the retention rule.
   */
  "retentionRuleId": string;
  /**
   * Request object for updating the retention rule.
   */
  "updateRetentionRuleDetails": model.UpdateRetentionRuleDetails;
  /**
   * The entity tag (ETag) to match with the ETag of an existing resource. If the specified ETag matches the ETag of
   * the existing resource, GET and HEAD requests will return the resource and PUT and POST requests will upload
   * the resource.
   *
   */
  "ifMatch"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcClientRequestId"?: string;
}
