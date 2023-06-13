/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * Summarizes application installation usage information during a specified time period. The main difference between ApplicationUsage and ApplicationInstallationUsageSummary is the presence of installation information. ApplicationUsage provides only aggregated information for an application regardless of the installation paths. Therefore, two different applications with the same application name installed in two different paths will be aggregated to a single application. This aggregation makes it difficult to focus actions to single application installed on a known path.
 * An application installation is independent of the Java Runtime on which it's running or the Managed Instance where it's installed.
 *
 */
export interface ApplicationInstallationUsageSummary {
  /**
   * An internal identifier for the application installation that is unique to a Fleet.
   *
   */
  "applicationInstallationKey": string;
  /**
   * An internal identifier for the application that is unique to a Fleet.
   * ApplicationKey will be identical for applications with different installation information.
   *
   */
  "applicationKey": string;
  /**
   * The name of the application.
   */
  "displayName": string;
  /**
   * The type of the application, denoted by how the application was started.
   */
  "applicationType": string;
  /**
   * The full path on which the application installation was detected.
   */
  "installationPath"?: string;
  /**
   * List of full paths where the application last searched for classes.
   * Contains full paths to all items from module-list and class path list.
   *
   */
  "fullClassPath"?: Array<string>;
  /**
   * The operating systems running this application.
   */
  "operatingSystems"?: Array<model.OperatingSystem>;
  /**
   * The approximate count of installations running this application. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateInstallationCount"?: number;
  /**
   * The approximate count of Java Runtimes running this application. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateJreCount"?: number;
  /**
   * The approximate count of managed instances reporting this application. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateManagedInstanceCount"?: number;
  /**
   * Lower bound of the specified time period filter. JMS provides a view of the data that is _per day_. The query uses only the date element of the parameter.
   */
  "timeStart"?: Date;
  /**
   * Upper bound of the specified time period filter. JMS provides a view of the data that is _per day_. The query uses only the date element of the parameter.
   */
  "timeEnd"?: Date;
  /**
   * The date and time the resource was _first_ reported to JMS.
   * This is potentially _before_ the specified time period provided by the filters.
   * For example, a resource can be first reported to JMS before the start of a specified time period,
   * if it is also reported during the time period.
   *
   */
  "timeFirstSeen"?: Date;
  /**
   * The date and time the resource was _last_ reported to JMS.
   * This is potentially _after_ the specified time period provided by the filters.
   * For example, a resource can be last reported to JMS before the start of a specified time period,
   * if it is also reported during the time period.
   *
   */
  "timeLastSeen"?: Date;
}

export namespace ApplicationInstallationUsageSummary {
  export function getJsonObj(obj: ApplicationInstallationUsageSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "operatingSystems": obj.operatingSystems
          ? obj.operatingSystems.map(item => {
              return model.OperatingSystem.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApplicationInstallationUsageSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "operatingSystems": obj.operatingSystems
          ? obj.operatingSystems.map(item => {
              return model.OperatingSystem.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
