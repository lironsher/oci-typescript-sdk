/**
 * OCI Cache API
 * Use the OCI Cache API to create and manage clusters. A cluster is a memory-based storage solution. For more information, see [OCI Cache](/iaas/Content/ocicache/home.htm).
 * OpenAPI spec version: 20220315
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
 * A list of nodes in a cluster that match filter criteria, if any.
 */
export interface RedisNodeCollection {
  /**
   * The list of nodes in a cluster.
   */
  "items": Array<model.NodeSummary>;
}

export namespace RedisNodeCollection {
  export function getJsonObj(obj: RedisNodeCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.NodeSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RedisNodeCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.NodeSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
