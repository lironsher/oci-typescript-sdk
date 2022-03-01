/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The job infrastructure configuration details (shape, block storage, etc.)
 *
 */
export interface JobInfrastructureConfigurationDetails {
  "jobInfrastructureType": string;
}

export namespace JobInfrastructureConfigurationDetails {
  export function getJsonObj(obj: JobInfrastructureConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("jobInfrastructureType" in obj && obj.jobInfrastructureType) {
      switch (obj.jobInfrastructureType) {
        case "ME_STANDALONE":
          return model.ManagedEgressStandaloneJobInfrastructureConfigurationDetails.getJsonObj(
            <model.ManagedEgressStandaloneJobInfrastructureConfigurationDetails>(<object>jsonObj),
            true
          );
        case "STANDALONE":
          return model.StandaloneJobInfrastructureConfigurationDetails.getJsonObj(
            <model.StandaloneJobInfrastructureConfigurationDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.jobInfrastructureType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JobInfrastructureConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("jobInfrastructureType" in obj && obj.jobInfrastructureType) {
      switch (obj.jobInfrastructureType) {
        case "ME_STANDALONE":
          return model.ManagedEgressStandaloneJobInfrastructureConfigurationDetails.getDeserializedJsonObj(
            <model.ManagedEgressStandaloneJobInfrastructureConfigurationDetails>(<object>jsonObj),
            true
          );
        case "STANDALONE":
          return model.StandaloneJobInfrastructureConfigurationDetails.getDeserializedJsonObj(
            <model.StandaloneJobInfrastructureConfigurationDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.jobInfrastructureType);
      }
    }
    return jsonObj;
  }
}
