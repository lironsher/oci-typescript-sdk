/**
 * Data Flow API
 * Use the Data Flow APIs to run any Apache Spark application at any scale without deploying or managing any infrastructure.

 * OpenAPI spec version: 20200129
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
 * The create application details.
 *
 */
export interface CreateApplicationDetails {
  /**
   * A comma separated list of one or more archive files as Oracle Cloud Infrastructure URIs. For example, {@code oci://path/to/a.zip,oci://path/to/b.zip}. An Oracle Cloud Infrastructure URI of an archive.zip file containing custom dependencies that may be used to support the execution of a Python, Java, or Scala application.
   * See https://docs.cloud.oracle.com/iaas/Content/API/SDKDocs/hdfsconnector.htm#uriformat.
   *
   */
  "archiveUri"?: string;
  /**
   * The arguments passed to the running application as command line arguments.  An argument is
   * either a plain text or a placeholder. Placeholders are replaced using values from the parameters
   * map.  Each placeholder specified must be represented in the parameters map else the request
   * (POST or PUT) will fail with a HTTP 400 status code.  Placeholders are specified as
   * {@code Service Api Spec}, where {@code name} is the name of the parameter.
   * Example:  {@code [ \"--input\", \"${input_file}\", \"--name\", \"John Doe\" ]}
   * If \"input_file\" has a value of \"mydata.xml\", then the value above will be translated to
   * {@code --input mydata.xml --name \"John Doe\"}
   *
   */
  "arguments"?: Array<string>;
  "applicationLogConfig"?: model.ApplicationLogConfig;
  /**
   * The class for the application.
   *
   */
  "className"?: string;
  /**
   * The OCID of a compartment.
   *
   */
  "compartmentId": string;
  /**
   * The Spark configuration passed to the running process.
   * See https://spark.apache.org/docs/latest/configuration.html#available-properties.
   * Example: { \"spark.app.name\" : \"My App Name\", \"spark.shuffle.io.maxRetries\" : \"4\" }
   * Note: Not all Spark properties are permitted to be set.  Attempting to set a property that is
   * not allowed to be overwritten will cause a 400 status to be returned.
   *
   */
  "configuration"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly description. Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
   * A user-friendly name. It does not have to be unique. Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * The VM shape for the driver. Sets the driver cores and memory.
   *
   */
  "driverShape": string;
  "driverShapeConfig"?: model.ShapeConfig;
  /**
   * The input used for spark-submit command. For more details see https://spark.apache.org/docs/latest/submitting-applications.html#launching-applications-with-spark-submit.
   * Supported options include {@code --class}{@code , }{@code --file}{@code , }{@code --jars}{@code , }{@code --conf}{@code , }{@code --py-files}{@code , and main application file with arguments.
   * Example: }{@code --jars oci://path/to/a.jar,oci://path/to/b.jar --files oci://path/to/a.json,oci://path/to/b.csv --py-files oci://path/to/a.py,oci://path/to/b.py --conf spark.sql.crossJoin.enabled=true --class org.apache.spark.examples.SparkPi oci://path/to/main.jar 10}
   * Note: If execute is specified together with applicationId, className, configuration, fileUri, language, arguments, parameters during application create/update, or run create/submit,
   * Data Flow service will use derived information from execute input only.
   *
   */
  "execute"?: string;
  /**
   * The VM shape for the executors. Sets the executor cores and memory.
   *
   */
  "executorShape": string;
  "executorShapeConfig"?: model.ShapeConfig;
  /**
   * An Oracle Cloud Infrastructure URI of the file containing the application to execute.
   * See https://docs.cloud.oracle.com/iaas/Content/API/SDKDocs/hdfsconnector.htm#uriformat.
   *
   */
  "fileUri"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The Spark language.
   *
   */
  "language": model.ApplicationLanguage;
  /**
   * An Oracle Cloud Infrastructure URI of the bucket where the Spark job logs are to be uploaded.
   * See https://docs.cloud.oracle.com/iaas/Content/API/SDKDocs/hdfsconnector.htm#uriformat.
   *
   */
  "logsBucketUri"?: string;
  /**
   * The OCID of OCI Hive Metastore.
   *
   */
  "metastoreId"?: string;
  /**
   * The number of executor VMs requested.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numExecutors": number;
  /**
   * An array of name/value pairs used to fill placeholders found in properties like
   * {@code Application.arguments}.  The name must be a string of one or more word characters
   * (a-z, A-Z, 0-9, _).  The value can be a string of 0 or more characters of any kind.
   * Example:  [ { name: \"iterations\", value: \"10\"}, { name: \"input_file\", value: \"mydata.xml\" }, { name: \"variable_x\", value: \"${x}\"} ]
   *
   */
  "parameters"?: Array<model.ApplicationParameter>;
  /**
   * The OCID of a pool. Unique Id to indentify a dataflow pool resource.
   *
   */
  "poolId"?: string;
  /**
   * The OCID of a private endpoint.
   *
   */
  "privateEndpointId"?: string;
  /**
   * The Spark version utilized to run the application.
   *
   */
  "sparkVersion": string;
  /**
   * The Spark application processing type.
   *
   */
  "type"?: model.ApplicationType;
  /**
   * An Oracle Cloud Infrastructure URI of the bucket to be used as default warehouse directory
   * for BATCH SQL runs.
   * See https://docs.cloud.oracle.com/iaas/Content/API/SDKDocs/hdfsconnector.htm#uriformat.
   *
   */
  "warehouseBucketUri"?: string;
  /**
   * The maximum duration in minutes for which an Application should run. Data Flow Run would be terminated
   * once it reaches this duration from the time it transitions to {@code IN_PROGRESS} state.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxDurationInMinutes"?: number;
  /**
   * The timeout value in minutes used to manage Runs. A Run would be stopped after inactivity for this amount of time period.
   * Note: This parameter is currently only applicable for Runs of type {@code SESSION}. Default value is 2880 minutes (2 days)
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "idleTimeoutInMinutes"?: number;
}

export namespace CreateApplicationDetails {
  export function getJsonObj(obj: CreateApplicationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "applicationLogConfig": obj.applicationLogConfig
          ? model.ApplicationLogConfig.getJsonObj(obj.applicationLogConfig)
          : undefined,

        "driverShapeConfig": obj.driverShapeConfig
          ? model.ShapeConfig.getJsonObj(obj.driverShapeConfig)
          : undefined,

        "executorShapeConfig": obj.executorShapeConfig
          ? model.ShapeConfig.getJsonObj(obj.executorShapeConfig)
          : undefined,

        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.ApplicationParameter.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateApplicationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "applicationLogConfig": obj.applicationLogConfig
          ? model.ApplicationLogConfig.getDeserializedJsonObj(obj.applicationLogConfig)
          : undefined,

        "driverShapeConfig": obj.driverShapeConfig
          ? model.ShapeConfig.getDeserializedJsonObj(obj.driverShapeConfig)
          : undefined,

        "executorShapeConfig": obj.executorShapeConfig
          ? model.ShapeConfig.getDeserializedJsonObj(obj.executorShapeConfig)
          : undefined,

        "parameters": obj.parameters
          ? obj.parameters.map(item => {
              return model.ApplicationParameter.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
