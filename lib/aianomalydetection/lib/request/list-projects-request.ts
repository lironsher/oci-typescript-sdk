/**
 *
 *
 * OpenAPI spec version: 20210101
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/aianomalydetection/ListProjects.ts.html |here} to see how to use ListProjectsRequest.
 */
export interface ListProjectsRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * <b>Filter</b> results by the specified lifecycle state. Must be a valid
   * state for the resource type.
   *
   */
  "lifecycleState"?: string;
  /**
   * A filter to return only resources that match the entire display name given.
   */
  "displayName"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * Specifies the field to sort by. Accepts only one field.
   * By default, when you sort by {@code timeCreated}, the results are shown
   * in descending order. When you sort by {@code displayName}, the results are
   * shown in ascending order. Sort order for the {@code displayName} field is case sensitive.
   *
   */
  "sortBy"?: ListProjectsRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListProjectsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
