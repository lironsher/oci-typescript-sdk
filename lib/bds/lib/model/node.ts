/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details about a node.
 */
export interface Node {
  /**
   * The OCID of the underlying Oracle Cloud Infrastructure Compute instance.
   */
  "instanceId": string;
  /**
   * The name of the node.
   */
  "displayName": string;
  /**
   * The state of the node.
   */
  "lifecycleState": Node.LifecycleState;
  /**
   * Cluster node type.
   */
  "nodeType": Node.NodeType;
  /**
   * Shape of the node.
   */
  "shape": string;
  /**
   * The list of block volumes attached to a given node.
   */
  "attachedBlockVolumes"?: Array<model.VolumeAttachmentDetail>;
  /**
   * The OCID of the subnet in which the node is to be created.
   */
  "subnetId": string;
  /**
   * IP address of the node.
   */
  "ipAddress": string;
  /**
   * The fully-qualified hostname (FQDN) of the node.
   */
  "hostname"?: string;
  /**
   * The OCID of the image from which the node was created.
   */
  "imageId"?: string;
  /**
   * The fingerprint of the SSH key used for node access.
   */
  "sshFingerprint": string;
  /**
   * The name of the availability domain in which the node is running.
   */
  "availabilityDomain": string;
  /**
   * The name of the fault domain in which the node is running.
   */
  "faultDomain": string;
  /**
   * The time the node was created, shown as an RFC 3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time the cluster was updated, shown as an RFC 3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
}

export namespace Node {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum NodeType {
    Master = "MASTER",
    Edge = "EDGE",
    Utility = "UTILITY",
    Worker = "WORKER",
    Bursting = "BURSTING",
    CloudSql = "CLOUD_SQL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Node): object {
    const jsonObj = {
      ...obj,
      ...{
        "attachedBlockVolumes": obj.attachedBlockVolumes
          ? obj.attachedBlockVolumes.map(item => {
              return model.VolumeAttachmentDetail.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Node): object {
    const jsonObj = {
      ...obj,
      ...{
        "attachedBlockVolumes": obj.attachedBlockVolumes
          ? obj.attachedBlockVolumes.map(item => {
              return model.VolumeAttachmentDetail.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
