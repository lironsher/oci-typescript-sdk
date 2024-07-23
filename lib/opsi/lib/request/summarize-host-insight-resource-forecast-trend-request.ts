/**
 *
 *
 * OpenAPI spec version: 20200630
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opsi/SummarizeHostInsightResourceForecastTrend.ts.html |here} to see how to use SummarizeHostInsightResourceForecastTrendRequest.
 */
export interface SummarizeHostInsightResourceForecastTrendRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * Filter by host resource metric.
   * Supported values are CPU, MEMORY, LOGICAL_MEMORY, STORAGE and NETWORK.
   *
   */
  "resourceMetric": string;
  /**
   * Specify time period in ISO 8601 format with respect to current time.
   * Default is last 30 days represented by P30D.
   * If timeInterval is specified, then timeIntervalStart and timeIntervalEnd will be ignored.
   * Examples  P90D (last 90 days), P4W (last 4 weeks), P2M (last 2 months), P1Y (last 12 months), . Maximum value allowed is 25 months prior to current time (P25M).
   *
   */
  "analysisTimeInterval"?: string;
  /**
   * Analysis start time in UTC in ISO 8601 format(inclusive).
   * Example 2019-10-30T00:00:00Z (yyyy-MM-ddThh:mm:ssZ).
   * The minimum allowed value is 2 years prior to the current day.
   * timeIntervalStart and timeIntervalEnd parameters are used together.
   * If analysisTimeInterval is specified, this parameter is ignored.
   *
   */
  "timeIntervalStart"?: Date;
  /**
   * Analysis end time in UTC in ISO 8601 format(exclusive).
   * Example 2019-10-30T00:00:00Z (yyyy-MM-ddThh:mm:ssZ).
   * timeIntervalStart and timeIntervalEnd are used together.
   * If timeIntervalEnd is not specified, current time is used as timeIntervalEnd.
   *
   */
  "timeIntervalEnd"?: Date;
  /**
   * Filter by one or more platform types.
   * Supported platformType(s) for MACS-managed external host insight: [LINUX, SOLARIS, WINDOWS].
   * Supported platformType(s) for MACS-managed cloud host insight: [LINUX].
   * Supported platformType(s) for EM-managed external host insight: [LINUX, SOLARIS, SUNOS, ZLINUX, WINDOWS, AIX, HP-UX].
   *
   */
  "platformType"?: Array<SummarizeHostInsightResourceForecastTrendRequest.PlatformType>;
  /**
   * Optional list of host insight resource [OCIDs](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "id"?: Array<string>;
  /**
   * Optional list of exadata insight resource [OCIDs](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "exadataInsightId"?: Array<string>;
  /**
   * Choose the type of statistic metric data to be used for forecasting.
   */
  "statistic"?: SummarizeHostInsightResourceForecastTrendRequest.Statistic;
  /**
   * Number of days used for utilization forecast analysis.
   *
   */
  "forecastDays"?: number;
  /**
   * Choose algorithm model for the forecasting.
   * Possible values:
   *   - LINEAR: Uses linear regression algorithm for forecasting.
   *   - ML_AUTO: Automatically detects best algorithm to use for forecasting.
   *   - ML_NO_AUTO: Automatically detects seasonality of the data for forecasting using linear or seasonal algorithm.
   *
   */
  "forecastModel"?: SummarizeHostInsightResourceForecastTrendRequest.ForecastModel;
  /**
   * Filter by utilization level by the following buckets:
   *   - HIGH_UTILIZATION: DBs with utilization greater or equal than 75.
   *   - LOW_UTILIZATION: DBs with utilization lower than 25.
   *   - MEDIUM_HIGH_UTILIZATION: DBs with utilization greater or equal than 50 but lower than 75.
   *   - MEDIUM_LOW_UTILIZATION: DBs with utilization greater or equal than 25 but lower than 50.
   *
   */
  "utilizationLevel"?: SummarizeHostInsightResourceForecastTrendRequest.UtilizationLevel;
  /**
   * This parameter is used to change data's confidence level, this data is ingested by the
   * forecast algorithm.
   * Confidence is the probability of an interval to contain the expected population parameter.
   * Manipulation of this value will lead to different results.
   * If not set, default confidence value is 95%.
   *
   */
  "confidence"?: number;
  /**
   * For list pagination. The value of the {@code opc-next-page} response header from
   * the previous \"List\" call. For important details about how pagination works,
   * see [List Pagination](https://docs.cloud.oracle.com/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * A list of tag filters to apply.  Only resources with a defined tag matching the value will be returned.
   * Each item in the list has the format \"{namespace}.{tagName}.{value}\".  All inputs are case-insensitive.
   * Multiple values for the same key (i.e. same namespace and tag name) are interpreted as \"OR\".
   * Values for different keys (i.e. different namespaces, different tag names, or both) are interpreted as \"AND\".
   *
   */
  "definedTagEquals"?: Array<string>;
  /**
   * A list of tag filters to apply.  Only resources with a freeform tag matching the value will be returned.
   * The key for each tag is \"{tagName}.{value}\".  All inputs are case-insensitive.
   * Multiple values for the same tag name are interpreted as \"OR\".  Values for different tag names are interpreted as \"AND\".
   *
   */
  "freeformTagEquals"?: Array<string>;
  /**
   * A list of tag existence filters to apply.  Only resources for which the specified defined tags exist will be returned.
   * Each item in the list has the format \"{namespace}.{tagName}.true\" (for checking existence of a defined tag)
   * or \"{namespace}.true\".  All inputs are case-insensitive.
   * Currently, only existence (\"true\" at the end) is supported. Absence (\"false\" at the end) is not supported.
   * Multiple values for the same key (i.e. same namespace and tag name) are interpreted as \"OR\".
   * Values for different keys (i.e. different namespaces, different tag names, or both) are interpreted as \"AND\".
   *
   */
  "definedTagExists"?: Array<string>;
  /**
   * A list of tag existence filters to apply.  Only resources for which the specified freeform tags exist the value will be returned.
   * The key for each tag is \"{tagName}.true\".  All inputs are case-insensitive.
   * Currently, only existence (\"true\" at the end) is supported. Absence (\"false\" at the end) is not supported.
   * Multiple values for different tag names are interpreted as \"AND\".
   *
   */
  "freeformTagExists"?: Array<string>;
  /**
   * A flag to search all resources within a given compartment and all sub-compartments.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * Filter by one or more host types.
   * Possible values are CLOUD-HOST, EXTERNAL-HOST, COMANAGED-VM-HOST, COMANAGED-BM-HOST, COMANAGED-EXACS-HOST
   *
   */
  "hostType"?: Array<string>;
  /**
   * Optional [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the host (Compute Id)
   *
   */
  "hostId"?: string;
  /**
   * Optional list of Exadata Insight VM cluster name.
   *
   */
  "vmclusterName"?: Array<string>;
  /**
   * Percent value in which a resource metric is considered highly utilized.
   */
  "highUtilizationThreshold"?: number;
  /**
   * Percent value in which a resource metric is considered low utilized.
   */
  "lowUtilizationThreshold"?: number;
  /**
   * Mount points are specialized NTFS filesystem objects.
   *
   */
  "mountPoint"?: string;
  /**
   * Name of the network interface.
   *
   */
  "interfaceName"?: string;
  /**
   * GPU identifier.
   *
   */
  "gpuId"?: number;
  /**
   * Resource Status
   */
  "status"?: Array<model.ResourceStatus>;
}

export namespace SummarizeHostInsightResourceForecastTrendRequest {
  export enum PlatformType {
    Linux = "LINUX",
    Solaris = "SOLARIS",
    Sunos = "SUNOS",
    Zlinux = "ZLINUX",
    Windows = "WINDOWS",
    Aix = "AIX",
    HpUx = "HP_UX"
  }

  export enum Statistic {
    Avg = "AVG",
    Max = "MAX"
  }

  export enum ForecastModel {
    Linear = "LINEAR",
    MlAuto = "ML_AUTO",
    MlNoAuto = "ML_NO_AUTO"
  }

  export enum UtilizationLevel {
    HighUtilization = "HIGH_UTILIZATION",
    LowUtilization = "LOW_UTILIZATION",
    MediumHighUtilization = "MEDIUM_HIGH_UTILIZATION",
    MediumLowUtilization = "MEDIUM_LOW_UTILIZATION"
  }
}
