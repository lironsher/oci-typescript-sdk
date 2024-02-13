/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * The configuration details of collection rule to enable automatic log collection from an object storage bucket.
 *
 */
export interface CreateLogAnalyticsObjectCollectionRuleDetails {
  /**
   * A unique name given to the rule. The name must be unique within the tenancy, and cannot be modified.
   */
  "name": string;
  /**
   * A string that describes the details of the rule. It does not have to be unique, and can be changed.
   * Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment to which this rule belongs.
   */
  "compartmentId": string;
  /**
   * Object Storage namespace.
   */
  "osNamespace": string;
  /**
   * Name of the Object Storage bucket.
   */
  "osBucketName": string;
  /**
   * The type of collection.
   *
   */
  "collectionType"?: model.ObjectCollectionRuleCollectionTypes;
  /**
   * The oldest time of the file in the bucket to consider for collection.
   * Accepted values are: BEGINNING or CURRENT_TIME or RFC3339 formatted datetime string.
   * Use this for HISTORIC or HISTORIC_LIVE collection types. When collectionType is LIVE, specifying pollSince value other than CURRENT_TIME will result in error.
   *
   */
  "pollSince"?: string;
  /**
   * The newest time of the file in the bucket to consider for collection.
   * Accepted values are: CURRENT_TIME or RFC3339 formatted datetime string.
   * Use this for HISTORIC collection type. When collectionType is LIVE or HISTORIC_LIVE, specifying pollTill will result in error.
   *
   */
  "pollTill"?: string;
  /**
   * Logging Analytics Log group OCID to associate the processed logs with.
   */
  "logGroupId": string;
  /**
   * Name of the Logging Analytics Source to use for the processing.
   */
  "logSourceName": string;
  /**
   * Logging Analytics entity OCID. Associates the processed logs with the given entity (optional).
   */
  "entityId"?: string;
  /**
   * An optional character encoding to aid in detecting the character encoding of the contents of the objects while processing.
   * It is recommended to set this value as ISO_8859_1 when configuring content of the objects having more numeric characters,
   * and very few alphabets.
   * For e.g. this applies when configuring VCN Flow Logs.
   *
   */
  "charEncoding"?: string;
  /**
   * Whether or not this rule is currently enabled.
   *
   */
  "isEnabled"?: boolean;
  /**
   * Timezone to be used when processing log entries whose timestamps do not include an explicit timezone.
   * When this property is not specified, the timezone of the entity specified is used.
   * If the entity is also not specified or do not have a valid timezone then UTC is used.
   *
   */
  "timezone"?: string;
  /**
   * The logSet to be associated with the processed logs. The logSet feature can be used by customers with high volume of data
   * and this feature has to be enabled for a given tenancy prior to its usage.
   * When logSetExtRegex value is provided, it will take precedence over this logSet value and logSet will be computed dynamically
   * using logSetKey and logSetExtRegex.
   *
   */
  "logSet"?: string;
  /**
   * An optional parameter to indicate from where the logSet to be extracted using logSetExtRegex. Default value is OBJECT_PATH (e.g. /n/<namespace>/b/<bucketname>/o/<objectname>).
   *
   */
  "logSetKey"?: model.LogSetKeyTypes;
  /**
   * The regex to be applied against given logSetKey. Regex has to be in string escaped format.
   *
   */
  "logSetExtRegex"?: string;
  /**
   * The override is used to modify some important configuration properties for objects matching a specific pattern inside the bucket.
   * Supported propeties for override are: logSourceName, charEncoding, entityId.
   * Supported matchType for override are \"contains\".
   *
   */
  "overrides"?: { [key: string]: Array<model.PropertyOverride> };
  /**
   * When the filters are provided, only the objects matching the filters are picked up for processing.
   * The matchType supported is exact match and accommodates wildcard \"*\".
   * For more information on filters, see [Event Filters](https://docs.oracle.com/en-us/iaas/Content/Events/Concepts/filterevents.htm).
   *
   */
  "objectNameFilters"?: Array<string>;
  /**
   * Type of files/objects in this object collection rule.
   *
   */
  "logType"?: model.LogTypes;
  /**
   * Flag to allow historic collection if poll period overlaps with existing ACTIVE collection rule
   *
   */
  "isForceHistoricCollection"?: boolean;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
}

export namespace CreateLogAnalyticsObjectCollectionRuleDetails {
  export function getJsonObj(obj: CreateLogAnalyticsObjectCollectionRuleDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: CreateLogAnalyticsObjectCollectionRuleDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
