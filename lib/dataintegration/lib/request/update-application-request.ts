/**
 *
 *
 * OpenAPI spec version: 20200430
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dataintegration/UpdateApplication.ts.html |here} to see how to use UpdateApplicationRequest.
 */
export interface UpdateApplicationRequest extends common.BaseRequest {
  /**
   * The workspace ID.
   */
  "workspaceId": string;
  /**
   * The application key.
   */
  "applicationKey": string;
  /**
   * The details needed to update an application.
   */
  "updateApplicationDetails": model.UpdateApplicationDetails;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call for a resource, set the {@code if-match} parameter to the value of the {@code etag} from a previous GET or POST response for that resource.
   * The resource will be updated or deleted only if the {@code etag} you provide matches the resource's current {@code etag} value.
   * When 'if-match' is provided and its value does not exactly match the 'etag' of the resource on the server, the request fails with the 412 response code.
   *
   */
  "ifMatch"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If
   * you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}
