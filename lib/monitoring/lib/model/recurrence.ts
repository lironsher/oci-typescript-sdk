/**
 * Monitoring API
 * Use the Monitoring API to manage metric queries and alarms for assessing the health, capacity, and performance of your cloud resources.
Endpoints vary by operation. For PostMetricData, use the `telemetry-ingestion` endpoints; for all other operations, use the `telemetry` endpoints.
For more information, see
[the Monitoring documentation](/iaas/Content/Monitoring/home.htm).

 * OpenAPI spec version: 20180401
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
 * Alarm suppression recurring schedule. Only one recurrence condition is supported within the list of preconditions for a suppression ({@code suppressionConditions}).
 *
 */
export interface Recurrence extends model.SuppressionCondition {
  /**
   * Frequency and start time of the recurring suppression. The format follows
   * [the iCalendar specification (RFC 5545, section 3.3.10)](https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10).
   * Supported rule parts:
   * * {@code FREQ}: Frequency of the recurring suppression: {@code WEEKLY} or {@code DAILY} only.
   * * {@code BYDAY}: Comma separated days. Use with weekly suppressions only. Supported values: {@code MO}, {@code TU}, {@code WE}, {@code TH}, {@code FR}, {@code SA} ,{@code SU}.
   * * {@code BYHOUR}, {@code BYMINUTE}, {@code BYSECOND}: Start time in UTC, after {@code timeSuppressFrom} value. Default is 00:00:00 UTC after {@code timeSuppressFrom}.
   *
   */
  "suppressionRecurrence": string;
  /**
   * Duration of the recurring suppression. Specified as a string in ISO 8601 format. Minimum: {@code PT1M} (1 minute). Maximum: {@code PT24H} (24 hours).
   *
   */
  "suppressionDuration": string;

  "conditionType": string;
}

export namespace Recurrence {
  export function getJsonObj(obj: Recurrence, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.SuppressionCondition.getJsonObj(obj) as Recurrence)),
      ...{}
    };

    return jsonObj;
  }
  export const conditionType = "RECURRENCE";
  export function getDeserializedJsonObj(obj: Recurrence, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SuppressionCondition.getDeserializedJsonObj(obj) as Recurrence)),
      ...{}
    };

    return jsonObj;
  }
}
