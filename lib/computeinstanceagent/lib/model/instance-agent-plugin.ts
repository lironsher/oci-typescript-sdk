/**
 * Oracle Cloud Agent API
 * API for the Oracle Cloud Agent software running on compute instances. Oracle Cloud Agent
is a lightweight process that monitors and manages compute instances.

 * OpenAPI spec version: 20180530
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
 * The agent plugin
 */
export interface InstanceAgentPlugin {
  /**
   * The plugin name
   */
  "name": string;
  /**
   * The plugin status Specified the plugin state on the instance * {@code RUNNING} - The plugin is in running state * {@code STOPPED} - The plugin is in stopped state * {@code NOT_SUPPORTED} - The plugin is not supported on this platform * {@code INVALID} - The plugin state is not recognizable by the service
   */
  "status": InstanceAgentPlugin.Status;
  /**
   * The last update time of the plugin in UTC
   */
  "timeLastUpdatedUtc": Date;
  /**
   * The optional message from the agent plugin
   */
  "message"?: string;
}

export namespace InstanceAgentPlugin {
  export enum Status {
    Running = "RUNNING",
    Stopped = "STOPPED",
    NotSupported = "NOT_SUPPORTED",
    Invalid = "INVALID",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: InstanceAgentPlugin): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceAgentPlugin): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
