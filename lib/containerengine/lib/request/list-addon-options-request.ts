/**
 *
 *
 * OpenAPI spec version: 20180222
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/containerengine/ListAddonOptions.ts.html |here} to see how to use ListAddonOptionsRequest.
 */
export interface ListAddonOptionsRequest extends common.BaseRequest {
  /**
   * The kubernetes version to fetch the addons.
   */
  "kubernetesVersion": string;
  /**
   * The name of the addon.
   */
  "addonName"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * For list pagination. The maximum number of results per page, or items to return in a paginated \"List\" call.
   * 1 is the minimum, 1000 is the maximum. For important details about how pagination works,
   * see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "limit"?: number;
  /**
   * For list pagination. The value of the {@code opc-next-page} response header from the previous \"List\" call.
   * For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The optional order in which to sort the results.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The optional field to sort the results by.
   */
  "sortBy"?: ListAddonOptionsRequest.SortBy;
}

export namespace ListAddonOptionsRequest {
  export enum SortBy {
    Name = "NAME",
    TimeCreated = "TIME_CREATED"
  }
}
