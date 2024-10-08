/**
 * Kubernetes Engine API
 * API for the Kubernetes Engine service (also known as the Container Engine for Kubernetes service). Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Kubernetes Engine](/iaas/Content/ContEng/Concepts/contengoverview.htm).

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
 * Pod shape.
 */
export interface PodShapeSummary {
  /**
   * The name of the identifying shape.
   */
  "name": string;
  /**
   * A short description of the VM's processor (CPU).
   */
  "processorDescription"?: string;
  /**
   * Options for OCPU shape.
   */
  "ocpuOptions"?: Array<model.ShapeOcpuOptions>;
  /**
   * ShapeMemoryOptions.
   */
  "memoryOptions"?: Array<model.ShapeMemoryOptions>;
  /**
   * ShapeNetworkBandwidthOptions.
   */
  "networkBandwidthOptions"?: Array<model.ShapeNetworkBandwidthOptions>;
}

export namespace PodShapeSummary {
  export function getJsonObj(obj: PodShapeSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "ocpuOptions": obj.ocpuOptions
          ? obj.ocpuOptions.map(item => {
              return model.ShapeOcpuOptions.getJsonObj(item);
            })
          : undefined,
        "memoryOptions": obj.memoryOptions
          ? obj.memoryOptions.map(item => {
              return model.ShapeMemoryOptions.getJsonObj(item);
            })
          : undefined,
        "networkBandwidthOptions": obj.networkBandwidthOptions
          ? obj.networkBandwidthOptions.map(item => {
              return model.ShapeNetworkBandwidthOptions.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PodShapeSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "ocpuOptions": obj.ocpuOptions
          ? obj.ocpuOptions.map(item => {
              return model.ShapeOcpuOptions.getDeserializedJsonObj(item);
            })
          : undefined,
        "memoryOptions": obj.memoryOptions
          ? obj.memoryOptions.map(item => {
              return model.ShapeMemoryOptions.getDeserializedJsonObj(item);
            })
          : undefined,
        "networkBandwidthOptions": obj.networkBandwidthOptions
          ? obj.networkBandwidthOptions.map(item => {
              return model.ShapeNetworkBandwidthOptions.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
