/**
 * Functions Service API
 * API for the Functions service.

 * OpenAPI spec version: 20181201
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
 * Properties to create a new function.
 *
 */
export interface CreateFunctionDetails {
  /**
   * The display name of the function. The display name must be unique within the application containing the function. Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * The OCID of the application this function belongs to.
   */
  "applicationId": string;
  /**
   * The qualified name of the Docker image to use in the function, including the image tag.
   * The image should be in the OCI Registry that is in the same region as the function itself.
   * Example: {@code phx.ocir.io/ten/functions/function:0.0.1}
   *
   */
  "image"?: string;
  /**
   * The image digest for the version of the image that will be pulled when invoking this function.
   * If no value is specified, the digest currently associated with the image in the OCI Registry will be used.
   * Example: {@code sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7}
   *
   */
  "imageDigest"?: string;
  "sourceDetails"?: model.PreBuiltFunctionSourceDetails;
  /**
   * Maximum usable memory for the function (MiB). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryInMBs": number;
  /**
    * Function configuration. These values are passed on to the function as environment variables, this overrides application configuration values.
* Keys must be ASCII strings consisting solely of letters, digits, and the '_' (underscore) character, and must not begin with a digit. Values should be limited to printable unicode characters.
* <p>
Example: {@code {\"MY_FUNCTION_CONFIG\": \"ConfVal\"}}
* <p>
The maximum size for all configuration keys and values is limited to 4KB. This is measured as the sum of octets necessary to represent each key and value in UTF-8.
* 
    */
  "config"?: { [key: string]: string };
  /**
   * Timeout for executions of the function. Value in seconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeoutInSeconds"?: number;
  "provisionedConcurrencyConfig"?:
    | model.NoneProvisionedConcurrencyConfig
    | model.ConstantProvisionedConcurrencyConfig;
  "traceConfig"?: model.FunctionTraceConfig;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateFunctionDetails {
  export function getJsonObj(obj: CreateFunctionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.FunctionSourceDetails.getJsonObj(obj.sourceDetails)
          : undefined,

        "provisionedConcurrencyConfig": obj.provisionedConcurrencyConfig
          ? model.FunctionProvisionedConcurrencyConfig.getJsonObj(obj.provisionedConcurrencyConfig)
          : undefined,
        "traceConfig": obj.traceConfig
          ? model.FunctionTraceConfig.getJsonObj(obj.traceConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateFunctionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceDetails": obj.sourceDetails
          ? model.FunctionSourceDetails.getDeserializedJsonObj(obj.sourceDetails)
          : undefined,

        "provisionedConcurrencyConfig": obj.provisionedConcurrencyConfig
          ? model.FunctionProvisionedConcurrencyConfig.getDeserializedJsonObj(
              obj.provisionedConcurrencyConfig
            )
          : undefined,
        "traceConfig": obj.traceConfig
          ? model.FunctionTraceConfig.getDeserializedJsonObj(obj.traceConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
