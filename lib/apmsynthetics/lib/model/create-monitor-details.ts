/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).
 * OpenAPI spec version: 20200630
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of the request body used to create a new monitor.
 */
export interface CreateMonitorDetails {
  /**
   * Unique name that can be edited. The name should not contain any confidential information.
   */
  "displayName": string;
  /**
   * Type of monitor.
   */
  "monitorType": model.MonitorTypes;
  /**
   * A list of public and dedicated vantage points from which to execute the monitor.
   * Use /publicVantagePoints to fetch public vantage points, and /dedicatedVantagePoints to fetch dedicated vantage points.
   *
   */
  "vantagePoints": Array<string>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the script.
   * scriptId is mandatory for creation of SCRIPTED_BROWSER and SCRIPTED_REST monitor types. For other monitor types, it should be set to null.
   *
   */
  "scriptId"?: string;
  /**
   * Enables or disables the monitor.
   */
  "status"?: model.MonitorStatus;
  /**
   * Interval in seconds after the start time when the job should be repeated.
   * Minimum repeatIntervalInSeconds should be 300 seconds for Scripted REST, Scripted Browser and Browser monitors, and 60 seconds for REST monitor.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "repeatIntervalInSeconds": number;
  /**
   * If runOnce is enabled, then the monitor will run once.
   */
  "isRunOnce"?: boolean;
  /**
   * Timeout in seconds. If isFailureRetried is true, then timeout cannot be more than 30% of repeatIntervalInSeconds time for monitors.
   * If isFailureRetried is false, then timeout cannot be more than 50% of repeatIntervalInSeconds time for monitors.
   * Also, timeoutInSeconds should be a multiple of 60 for Scripted REST, Scripted Browser and Browser monitors.
   * Monitor will be allowed to run only for timeoutInSeconds time. It would be terminated after that.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeoutInSeconds"?: number;
  /**
   * Specify the endpoint on which to run the monitor.
   * For BROWSER and REST monitor types, target is mandatory.
   * If target is specified in the SCRIPTED_BROWSER monitor type, then the monitor will run the selected script (specified by scriptId in monitor) against the specified target endpoint.
   * If target is not specified in the SCRIPTED_BROWSER monitor type, then the monitor will run the selected script as it is.
   * For NETWORK monitor with TCP protocol, a port needs to be provided along with target. Example: 192.168.0.1:80
   *
   */
  "target"?: string;
  /**
   * List of script parameters in the monitor.
   * This is valid only for SCRIPTED_BROWSER and SCRIPTED_REST monitor types. For other monitor types, it should be set to null.
   * Example: `[{\"paramName\": \"userid\", \"paramValue\":\"testuser\"}]`
   *
   */
  "scriptParameters"?: Array<model.MonitorScriptParameter>;
  "configuration"?:
    | model.ScriptedRestMonitorConfiguration
    | model.ScriptedBrowserMonitorConfiguration
    | model.RestMonitorConfiguration
    | model.BrowserMonitorConfiguration
    | model.NetworkMonitorConfiguration;
  "availabilityConfiguration"?: model.AvailabilityConfiguration;
  "maintenanceWindowSchedule"?: model.MaintenanceWindowSchedule;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * If isRunNow is enabled, then the monitor will run immediately.
   */
  "isRunNow"?: boolean;
  /**
   * Scheduling policy to decide the distribution of monitor executions on vantage points.
   */
  "schedulingPolicy"?: model.SchedulingPolicy;
  /**
   * Time interval between two runs in round robin batch mode (SchedulingPolicy - BATCHED_ROUND_ROBIN). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "batchIntervalInSeconds"?: number;
}

export namespace CreateMonitorDetails {
  export function getJsonObj(obj: CreateMonitorDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "scriptParameters": obj.scriptParameters
          ? obj.scriptParameters.map(item => {
              return model.MonitorScriptParameter.getJsonObj(item);
            })
          : undefined,
        "configuration": obj.configuration
          ? model.MonitorConfiguration.getJsonObj(obj.configuration)
          : undefined,
        "availabilityConfiguration": obj.availabilityConfiguration
          ? model.AvailabilityConfiguration.getJsonObj(obj.availabilityConfiguration)
          : undefined,
        "maintenanceWindowSchedule": obj.maintenanceWindowSchedule
          ? model.MaintenanceWindowSchedule.getJsonObj(obj.maintenanceWindowSchedule)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateMonitorDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "scriptParameters": obj.scriptParameters
          ? obj.scriptParameters.map(item => {
              return model.MonitorScriptParameter.getDeserializedJsonObj(item);
            })
          : undefined,
        "configuration": obj.configuration
          ? model.MonitorConfiguration.getDeserializedJsonObj(obj.configuration)
          : undefined,
        "availabilityConfiguration": obj.availabilityConfiguration
          ? model.AvailabilityConfiguration.getDeserializedJsonObj(obj.availabilityConfiguration)
          : undefined,
        "maintenanceWindowSchedule": obj.maintenanceWindowSchedule
          ? model.MaintenanceWindowSchedule.getDeserializedJsonObj(obj.maintenanceWindowSchedule)
          : undefined
      }
    };

    return jsonObj;
  }
}
