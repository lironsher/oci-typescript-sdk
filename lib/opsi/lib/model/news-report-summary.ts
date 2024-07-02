/**
 * Ops Insights API
 * Use the Ops Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Ops Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

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
 * Summary of a news report resource.
 */
export interface NewsReportSummary {
  /**
   * News report frequency.
   */
  "newsFrequency": model.NewsFrequency;
  "contentTypes": model.NewsContentTypes;
  /**
   * Language of the news report.
   */
  "locale"?: model.NewsLocale;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the news report resource.
   */
  "id": string;
  /**
   * The description of the news report.
   *
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The news report name.
   */
  "name"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the ONS topic.
   */
  "onsTopicId"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Indicates the status of a news report in Ops Insights.
   */
  "status"?: model.ResourceStatus;
  /**
   * The time the the news report was first enabled. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time the news report was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the news report.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Day of the week in which the news report will be sent if the frequency is set to WEEKLY.
   */
  "dayOfWeek"?: model.DayOfWeek;
  /**
   * A flag to consider the resources within a given compartment and all sub-compartments.
   */
  "areChildCompartmentsIncluded"?: boolean;
}

export namespace NewsReportSummary {
  export function getJsonObj(obj: NewsReportSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "contentTypes": obj.contentTypes
          ? model.NewsContentTypes.getJsonObj(obj.contentTypes)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NewsReportSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "contentTypes": obj.contentTypes
          ? model.NewsContentTypes.getDeserializedJsonObj(obj.contentTypes)
          : undefined
      }
    };

    return jsonObj;
  }
}
