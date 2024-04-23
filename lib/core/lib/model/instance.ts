/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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
* A compute host. The image used to launch the instance determines its operating system and other
* software. The shape specified during the launch process determines the number of CPUs and memory
* allocated to the instance.
* <p>
When you launch an instance, it is automatically attached to a virtual
* network interface card (VNIC), called the *primary VNIC*. The VNIC
* has a private IP address from the subnet's CIDR. You can either assign a
* private IP address of your choice or let Oracle automatically assign one.
* You can choose whether the instance has a public IP address. To retrieve the
* addresses, use the {@link #listVnicAttachments(ListVnicAttachmentsRequest) listVnicAttachments}
* operation to get the VNIC ID for the instance, and then call
* {@link #getVnic(GetVnicRequest) getVnic} with the VNIC ID.
* <p>
For more information, see
* [Overview of the Compute Service](https://docs.cloud.oracle.com/iaas/Content/Compute/Concepts/computeoverview.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you
* supply string values using the API.
* 
*/
export interface Instance {
  /**
    * The availability domain the instance is running in.
* <p>
Example: {@code Uocm:PHX-AD-1}
* 
    */
  "availabilityDomain": string;
  /**
   * The OCID of the compute capacity reservation this instance is launched under.
   * When this field contains an empty string or is null, the instance is not currently in a capacity reservation.
   * For more information, see [Capacity Reservations](https://docs.cloud.oracle.com/iaas/Content/Compute/Tasks/reserve-capacity.htm#default).
   *
   */
  "capacityReservationId"?: string;
  /**
   * The OCID of the compartment that contains the instance.
   */
  "compartmentId": string;
  /**
   * The OCID of the cluster placement group of the instance.
   */
  "clusterPlacementGroupId"?: string;
  /**
   * The OCID of the dedicated virtual machine host that the instance is placed on.
   *
   */
  "dedicatedVmHostId"?: string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Additional metadata key/value pairs that you provide. They serve the same purpose and functionality
* as fields in the {@code metadata} object.
* <p>
They are distinguished from {@code metadata} fields in that these can be nested JSON objects (whereas {@code metadata}
* fields are string/string maps only).
* 
    */
  "extendedMetadata"?: { [key: string]: any };
  /**
    * The name of the fault domain the instance is running in.
* <p>
A fault domain is a grouping of hardware and infrastructure within an availability domain.
* Each availability domain contains three fault domains. Fault domains let you distribute your
* instances so that they are not on the same physical hardware within a single availability domain.
* A hardware failure or Compute hardware maintenance that affects one fault domain does not affect
* instances in other fault domains.
* <p>
If you do not specify the fault domain, the system selects one for you.
* <p>
Example: {@code FAULT-DOMAIN-1}
* 
    */
  "faultDomain"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The OCID of the instance.
   */
  "id": string;
  /**
   * Deprecated. Use {@code sourceDetails} instead.
   *
   */
  "imageId"?: string;
  /**
    * When a bare metal or virtual machine
* instance boots, the iPXE firmware that runs on the instance is
* configured to run an iPXE script to continue the boot process.
* <p>
If you want more control over the boot process, you can provide
* your own custom iPXE script that will run when the instance boots.
* Be aware that the same iPXE script will run
* every time an instance boots, not only after the initial
* LaunchInstance call.
* <p>
The default iPXE script connects to the instance's local boot
* volume over iSCSI and performs a network boot. If you use a custom iPXE
* script and want to network-boot from the instance's local boot volume
* over iSCSI the same way as the default iPXE script, use the
* following iSCSI IP address: 169.254.0.2, and boot volume IQN:
* iqn.2015-02.oracle.boot.
* <p>
If your instance boot volume attachment type is paravirtualized,
* the boot volume is attached to the instance through virtio-scsi and no iPXE script is used.
* If your instance boot volume attachment type is paravirtualized
* and you use custom iPXE to network boot into your instance,
* the primary boot volume is attached as a data volume through virtio-scsi drive.
* <p>
For more information about the Bring Your Own Image feature of
* Oracle Cloud Infrastructure, see
* [Bring Your Own Image](https://docs.cloud.oracle.com/iaas/Content/Compute/References/bringyourownimage.htm).
* <p>
For more information about iPXE, see http://ipxe.org.
* 
    */
  "ipxeScript"?: string;
  /**
   * Specifies the configuration mode for launching virtual machine (VM) instances. The configuration modes are:
   * * {@code NATIVE} - VM instances launch with iSCSI boot and VFIO devices. The default value for platform images.
   * * {@code EMULATED} - VM instances launch with emulated devices, such as the E1000 network driver and emulated SCSI disk controller.
   * * {@code PARAVIRTUALIZED} - VM instances launch with paravirtualized devices using VirtIO drivers.
   * * {@code CUSTOM} - VM instances launch with custom configuration settings specified in the {@code LaunchOptions} parameter.
   *
   */
  "launchMode"?: Instance.LaunchMode;
  "launchOptions"?: model.LaunchOptions;
  "instanceOptions"?: model.InstanceOptions;
  "availabilityConfig"?: model.InstanceAvailabilityConfig;
  "preemptibleInstanceConfig"?: model.PreemptibleInstanceConfigDetails;
  /**
   * The current state of the instance.
   */
  "lifecycleState": Instance.LifecycleState;
  /**
   * Custom metadata that you provide.
   */
  "metadata"?: { [key: string]: string };
  /**
    * The region that contains the availability domain the instance is running in.
* <p>
For the us-phoenix-1 and us-ashburn-1 regions, {@code phx} and {@code iad} are returned, respectively.
* For all other regions, the full region name is returned.
* <p>
Examples: {@code phx}, {@code eu-frankfurt-1}
* 
    */
  "region": string;
  /**
   * The shape of the instance. The shape determines the number of CPUs and the amount of memory
   * allocated to the instance. You can enumerate all available shapes by calling
   * {@link #listShapes(ListShapesRequest) listShapes}.
   *
   */
  "shape": string;
  "shapeConfig"?: model.InstanceShapeConfig;
  /**
   * Whether the instance\u2019s OCPUs and memory are distributed across multiple NUMA nodes.
   *
   */
  "isCrossNumaNode"?: boolean;
  "sourceDetails"?: model.InstanceSourceViaImageDetails | model.InstanceSourceViaBootVolumeDetails;
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
    * The date and time the instance was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated": Date;
  "agentConfig"?: model.InstanceAgentConfig;
  /**
   * The date and time the instance is expected to be stopped / started,  in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * After that time if instance hasn't been rebooted, Oracle will reboot the instance within 24 hours of the due time.
   * Regardless of how the instance was stopped, the flag will be reset to empty as soon as instance reaches Stopped state.
   * Example: {@code 2018-05-25T21:10:29.600Z}
   *
   */
  "timeMaintenanceRebootDue"?: Date;
  "platformConfig"?:
    | model.AmdMilanBmPlatformConfig
    | model.AmdRomeBmPlatformConfig
    | model.IntelSkylakeBmPlatformConfig
    | model.AmdRomeBmGpuPlatformConfig
    | model.IntelIcelakeBmPlatformConfig
    | model.AmdVmPlatformConfig
    | model.IntelVmPlatformConfig
    | model.GenericBmPlatformConfig
    | model.AmdMilanBmGpuPlatformConfig;
  /**
   * The OCID of the Instance Configuration used to source launch details for this instance. Any other fields supplied in the instance launch request override the details stored in the Instance Configuration for this instance launch.
   */
  "instanceConfigurationId"?: string;
}

export namespace Instance {
  export enum LaunchMode {
    Native = "NATIVE",
    Emulated = "EMULATED",
    Paravirtualized = "PARAVIRTUALIZED",
    Custom = "CUSTOM",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Moving = "MOVING",
    Provisioning = "PROVISIONING",
    Running = "RUNNING",
    Starting = "STARTING",
    Stopping = "STOPPING",
    Stopped = "STOPPED",
    CreatingImage = "CREATING_IMAGE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Instance): object {
    const jsonObj = {
      ...obj,
      ...{
        "launchOptions": obj.launchOptions
          ? model.LaunchOptions.getJsonObj(obj.launchOptions)
          : undefined,
        "instanceOptions": obj.instanceOptions
          ? model.InstanceOptions.getJsonObj(obj.instanceOptions)
          : undefined,
        "availabilityConfig": obj.availabilityConfig
          ? model.InstanceAvailabilityConfig.getJsonObj(obj.availabilityConfig)
          : undefined,
        "preemptibleInstanceConfig": obj.preemptibleInstanceConfig
          ? model.PreemptibleInstanceConfigDetails.getJsonObj(obj.preemptibleInstanceConfig)
          : undefined,

        "shapeConfig": obj.shapeConfig
          ? model.InstanceShapeConfig.getJsonObj(obj.shapeConfig)
          : undefined,

        "sourceDetails": obj.sourceDetails
          ? model.InstanceSourceDetails.getJsonObj(obj.sourceDetails)
          : undefined,

        "agentConfig": obj.agentConfig
          ? model.InstanceAgentConfig.getJsonObj(obj.agentConfig)
          : undefined,

        "platformConfig": obj.platformConfig
          ? model.PlatformConfig.getJsonObj(obj.platformConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Instance): object {
    const jsonObj = {
      ...obj,
      ...{
        "launchOptions": obj.launchOptions
          ? model.LaunchOptions.getDeserializedJsonObj(obj.launchOptions)
          : undefined,
        "instanceOptions": obj.instanceOptions
          ? model.InstanceOptions.getDeserializedJsonObj(obj.instanceOptions)
          : undefined,
        "availabilityConfig": obj.availabilityConfig
          ? model.InstanceAvailabilityConfig.getDeserializedJsonObj(obj.availabilityConfig)
          : undefined,
        "preemptibleInstanceConfig": obj.preemptibleInstanceConfig
          ? model.PreemptibleInstanceConfigDetails.getDeserializedJsonObj(
              obj.preemptibleInstanceConfig
            )
          : undefined,

        "shapeConfig": obj.shapeConfig
          ? model.InstanceShapeConfig.getDeserializedJsonObj(obj.shapeConfig)
          : undefined,

        "sourceDetails": obj.sourceDetails
          ? model.InstanceSourceDetails.getDeserializedJsonObj(obj.sourceDetails)
          : undefined,

        "agentConfig": obj.agentConfig
          ? model.InstanceAgentConfig.getDeserializedJsonObj(obj.agentConfig)
          : undefined,

        "platformConfig": obj.platformConfig
          ? model.PlatformConfig.getDeserializedJsonObj(obj.platformConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
