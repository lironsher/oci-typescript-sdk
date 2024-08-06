/**
 * Java Management Service Fleets API
 * The APIs for the [Fleet Management](https://docs.oracle.com/en-us/iaas/jms/doc/fleet-management.html) feature of Java Management Service to monitor and manage the usage of Java in your enterprise. Use these APIs to manage fleets, configure managed instances to report to fleets, and gain insights into the Java workloads running on these instances by carrying out basic and advanced features.
 * OpenAPI spec version: 20210610
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
 * Installation site of a Java Runtime.
 * An installation site is a Java Runtime installed at a specific path on a managed instance.
 *
 */
export interface InstallationSiteSummary {
  /**
   * The unique identifier for the installation of Java Runtime at a specific path on a specific operating system.
   */
  "installationKey": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the related managed instance.
   *
   */
  "managedInstanceId": string;
  "jre"?: model.JavaRuntimeId;
  /**
   * The security status of the Java Runtime.
   */
  "securityStatus"?: model.JreSecurityStatus;
  /**
   * The file system path of the installation.
   */
  "path"?: string;
  "operatingSystem"?: model.OperatingSystem;
  /**
   * The approximate count of applications running on this installation Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateApplicationCount"?: number;
  /**
   * The date and time the resource was _last_ reported to JMS.
   * This is potentially _after_ the specified time period provided by the filters.
   * For example, a resource can be last reported to JMS before the start of a specified time period,
   * if it is also reported during the time period.
   *
   */
  "timeLastSeen"?: Date;
  /**
   * The list of operations that are blocklisted.
   */
  "blocklist"?: Array<model.BlocklistEntry>;
  /**
   * The lifecycle state of the installation site.
   */
  "lifecycleState"?: model.LifecycleState;
}

export namespace InstallationSiteSummary {
  export function getJsonObj(obj: InstallationSiteSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "jre": obj.jre ? model.JavaRuntimeId.getJsonObj(obj.jre) : undefined,

        "operatingSystem": obj.operatingSystem
          ? model.OperatingSystem.getJsonObj(obj.operatingSystem)
          : undefined,

        "blocklist": obj.blocklist
          ? obj.blocklist.map(item => {
              return model.BlocklistEntry.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstallationSiteSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "jre": obj.jre ? model.JavaRuntimeId.getDeserializedJsonObj(obj.jre) : undefined,

        "operatingSystem": obj.operatingSystem
          ? model.OperatingSystem.getDeserializedJsonObj(obj.operatingSystem)
          : undefined,

        "blocklist": obj.blocklist
          ? obj.blocklist.map(item => {
              return model.BlocklistEntry.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
