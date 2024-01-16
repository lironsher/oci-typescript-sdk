/**
 * Usage API
 * Use the Usage API to view your Oracle Cloud usage and costs. The API allows you to request data that meets the specified filter criteria, and to group that data by the dimension of your choosing. The Usage API is used by the Cost Analysis tool in the Console. Also see [Using the Usage API](/Content/Billing/Concepts/costanalysisoverview.htm#cost_analysis_using_the_api) for more information.
 * OpenAPI spec version: 20200107
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
 * The request of the generated usage carbon emissions report.
 */
export interface UsageCarbonEmissionsReportQuery {
  /**
   * Tenant ID.
   */
  "tenantId": string;
  /**
   * The usage start time.
   */
  "timeUsageStarted"?: Date;
  /**
   * The usage end time.
   */
  "timeUsageEnded"?: Date;
  /**
   * Specifies whether aggregated by time. If isAggregateByTime is true, all usage or cost over the query time period will be added up.
   */
  "isAggregateByTime"?: boolean;
  /**
   * Specifies what to aggregate the result by.
   * For example:
   *   {@code [\"tagNamespace\", \"tagKey\", \"tagValue\", \"service\", \"skuName\", \"skuPartNumber\", \"unit\",
   *     \"compartmentName\", \"compartmentPath\", \"compartmentId\", \"platform\", \"region\", \"logicalAd\",
   *     \"resourceId\", \"tenantId\", \"tenantName\"]}
   *
   */
  "groupBy"?: Array<string>;
  /**
   * GroupBy a specific tagKey. Provide the tagNamespace and tagKey in the tag object. Only supports one tag in the list.
   * For example:
   *   {@code [{\"namespace\":\"oracle\", \"key\":\"createdBy\"]}
   *
   */
  "groupByTag"?: Array<model.Tag>;
  /**
   * The compartment depth level. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "compartmentDepth"?: number;
  "filter"?: model.Filter;
  /**
   * The UI date range, for example, LAST_THREE_MONTHS. It will override timeUsageStarted and timeUsageEnded properties.
   */
  "dateRangeName"?: UsageCarbonEmissionsReportQuery.DateRangeName;
}

export namespace UsageCarbonEmissionsReportQuery {
  export enum DateRangeName {
    LastTwoMonths = "LAST_TWO_MONTHS",
    LastThreeMonths = "LAST_THREE_MONTHS",
    LastSixMonths = "LAST_SIX_MONTHS",
    LastOneYear = "LAST_ONE_YEAR",
    Custom = "CUSTOM",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: UsageCarbonEmissionsReportQuery): object {
    const jsonObj = {
      ...obj,
      ...{
        "groupByTag": obj.groupByTag
          ? obj.groupByTag.map(item => {
              return model.Tag.getJsonObj(item);
            })
          : undefined,

        "filter": obj.filter ? model.Filter.getJsonObj(obj.filter) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UsageCarbonEmissionsReportQuery): object {
    const jsonObj = {
      ...obj,
      ...{
        "groupByTag": obj.groupByTag
          ? obj.groupByTag.map(item => {
              return model.Tag.getDeserializedJsonObj(item);
            })
          : undefined,

        "filter": obj.filter ? model.Filter.getDeserializedJsonObj(obj.filter) : undefined
      }
    };

    return jsonObj;
  }
}
