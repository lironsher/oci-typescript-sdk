/**
 *
 *
 * OpenAPI spec version: 20231107
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/capacitymanagement/ListInternalOccHandoverResourceBlocks.ts.html |here} to see how to use ListInternalOccHandoverResourceBlocksRequest.
 */
export interface ListInternalOccHandoverResourceBlocksRequest extends common.BaseRequest {
  /**
   * The namespace enum value that needs to be passed as a required query parameter.
   *
   */
  "namespace": model.Namespace;
  /**
   * The ocid of the compartment or tenancy in which resources are to be listed. This will also be used for authorization purposes.
   */
  "compartmentId": string;
  /**
   * The customer group ocid by which we would filter the list.
   */
  "occCustomerGroupId": string;
  /**
   * A filter to return only the list of resources that match the name provided in this filter.
   *
   */
  "handoverResourceName"?: string;
  /**
   * This filter helps in fetching all handed over resources for which the recordDate is greater than or equal to the startDate.
   *
   */
  "handoverDateGreaterThanOrEqualTo"?: Date;
  /**
   * This filter helps in fetching all handed over resources for which the recordDate is less than or equal to the endDate.
   *
   */
  "handoverDateLessThanOrEqualTo"?: Date;
  /**
   * This filter helps in fetching the handed over resource for which the occHandoverResourceId is equal to the one provided here.
   *
   */
  "occHandoverResourceBlockId"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * A token representing the position at which to start retrieving results. This must come from {@code opc-next-page} header field of a previous response.
   */
  "page"?: string;
  /**
   * The client request ID for tracing. The only valid characters for request IDs are letters, numbers,
   * underscore, and dash.
   *
   */
  "opcRequestId"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided.
   * The default order for handoverDate is chronological order(latest date item at the end).
   *
   */
  "sortBy"?: ListInternalOccHandoverResourceBlocksRequest.SortBy;
}

export namespace ListInternalOccHandoverResourceBlocksRequest {
  export enum SortBy {
    HandoverDate = "handoverDate"
  }
}
