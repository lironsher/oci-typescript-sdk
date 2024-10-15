/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
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
 * A DNS zone.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface Zone {
  /**
   * The name of the zone.
   */
  "name": string;
  /**
   * The type of the zone. Must be either {@code PRIMARY} or {@code SECONDARY}. {@code SECONDARY} is only supported for GLOBAL zones.
   *
   */
  "zoneType": Zone.ZoneType;
  /**
   * The OCID of the compartment containing the zone.
   */
  "compartmentId": string;
  /**
   * The OCID of the private view containing the zone. This value will
   * be null for zones in the global DNS, which are publicly resolvable and
   * not part of a private view.
   *
   */
  "viewId"?: string;
  /**
   * The scope of the zone.
   */
  "scope": model.Scope;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>

* **Example:** {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags": { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>

* **Example:** {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
    * The state of DNSSEC on the zone.
* <p>
For DNSSEC to function, every parent zone in the DNS tree up to the top-level domain (or an independent
* trust anchor) must also have DNSSEC correctly set up.
* After enabling DNSSEC, you must add a DS record to the zone's parent zone containing the
* {@code KskDnssecKeyVersion} data. You can find the DS data in the {@code dsData} attribute of the {@code KskDnssecKeyVersion}.
* Then, use the {@code PromoteZoneDnssecKeyVersion} operation to promote the {@code KskDnssecKeyVersion}.
* <p>
New {@code KskDnssecKeyVersion}s are generated annually, a week before the existing {@code KskDnssecKeyVersion}'s expiration.
* To rollover a {@code KskDnssecKeyVersion}, you must replace the parent zone's DS record containing the old
* {@code KskDnssecKeyVersion} data with the data from the new {@code KskDnssecKeyVersion}.
* <p>
To remove the old DS record without causing service disruption, wait until the old DS record's TTL has
* expired, and the new DS record has propagated. After the DS replacement has been completed, then the
* {@code PromoteZoneDnssecKeyVersion} operation must be called.
* <p>
Metrics are emitted in the {@code oci_dns} namespace daily for each {@code KskDnssecKeyVersion} indicating how many
* days are left until expiration.
* We recommend that you set up alarms and notifications for KskDnssecKeyVersion expiration so that the
* necessary parent zone updates can be made and the {@code PromoteZoneDnssecKeyVersion} operation can be called.
* <p>
Enabling DNSSEC results in additional records in DNS responses which increases their size and can
* cause higher response latency.
* <p>
For more information, see [DNSSEC](https://docs.cloud.oracle.com/iaas/Content/DNS/Concepts/dnssec.htm).
* 
    */
  "dnssecState": model.ZoneDnssecState;
  /**
   * External master servers for the zone. {@code externalMasters} becomes a
   * required parameter when the {@code zoneType} value is {@code SECONDARY}.
   *
   */
  "externalMasters": Array<model.ExternalMaster>;
  /**
   * External secondary servers for the zone.
   * This field is currently not supported when {@code zoneType} is {@code SECONDARY} or {@code scope} is {@code PRIVATE}.
   *
   */
  "externalDownstreams": Array<model.ExternalDownstream>;
  /**
   * The canonical absolute URL of the resource.
   */
  "self": string;
  /**
   * The OCID of the zone.
   */
  "id": string;
  /**
   * The date and time the resource was created in \"YYYY-MM-ddThh:mm:ssZ\" format
   * with a Z offset, as defined by RFC 3339.
   * <p>
   **Example:** {@code 2016-07-22T17:23:59:60Z}
   *
   */
  "timeCreated": Date;
  /**
   * Version is the never-repeating, totally-orderable, version of the
   * zone, from which the serial field of the zone's SOA record is
   * derived.
   *
   */
  "version": string;
  /**
   * The current serial of the zone. As seen in the zone's SOA record.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "serial": number;
  /**
   * The current state of the zone resource.
   */
  "lifecycleState": Zone.LifecycleState;
  /**
   * A Boolean flag indicating whether or not parts of the resource are unable to be explicitly managed.
   *
   */
  "isProtected": boolean;
  "dnssecConfig"?: model.DnssecConfig;
  /**
   * The authoritative nameservers for the zone.
   */
  "nameservers": Array<model.Nameserver>;
  /**
   * The OCI nameservers that transfer the zone data with external nameservers.
   *
   */
  "zoneTransferServers"?: Array<model.ZoneTransferServer>;
}

export namespace Zone {
  export enum ZoneType {
    Primary = "PRIMARY",
    Secondary = "SECONDARY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleted = "DELETED",
    Deleting = "DELETING",
    Failed = "FAILED",
    Updating = "UPDATING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Zone): object {
    const jsonObj = {
      ...obj,
      ...{
        "externalMasters": obj.externalMasters
          ? obj.externalMasters.map(item => {
              return model.ExternalMaster.getJsonObj(item);
            })
          : undefined,
        "externalDownstreams": obj.externalDownstreams
          ? obj.externalDownstreams.map(item => {
              return model.ExternalDownstream.getJsonObj(item);
            })
          : undefined,

        "dnssecConfig": obj.dnssecConfig
          ? model.DnssecConfig.getJsonObj(obj.dnssecConfig)
          : undefined,
        "nameservers": obj.nameservers
          ? obj.nameservers.map(item => {
              return model.Nameserver.getJsonObj(item);
            })
          : undefined,
        "zoneTransferServers": obj.zoneTransferServers
          ? obj.zoneTransferServers.map(item => {
              return model.ZoneTransferServer.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Zone): object {
    const jsonObj = {
      ...obj,
      ...{
        "externalMasters": obj.externalMasters
          ? obj.externalMasters.map(item => {
              return model.ExternalMaster.getDeserializedJsonObj(item);
            })
          : undefined,
        "externalDownstreams": obj.externalDownstreams
          ? obj.externalDownstreams.map(item => {
              return model.ExternalDownstream.getDeserializedJsonObj(item);
            })
          : undefined,

        "dnssecConfig": obj.dnssecConfig
          ? model.DnssecConfig.getDeserializedJsonObj(obj.dnssecConfig)
          : undefined,
        "nameservers": obj.nameservers
          ? obj.nameservers.map(item => {
              return model.Nameserver.getDeserializedJsonObj(item);
            })
          : undefined,
        "zoneTransferServers": obj.zoneTransferServers
          ? obj.zoneTransferServers.map(item => {
              return model.ZoneTransferServer.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
