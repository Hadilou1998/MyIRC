/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: tq7WYnDOUjLAnYF6brsC+mpS2Le017PdpI3UKMl25qEQtHK/aCPbfIIB6Xek09gngIYdoPIpIdJHBbWoPy22tw==
 */

/* eslint-disable */
// tslint:disable

interface Threads {
  CONNECTION_TYPE: (string) | null
  CONTROLLED_MEMORY: (string | number | BigInt)
  EXECUTION_ENGINE: (("PRIMARY" | "SECONDARY")) | null
  HISTORY: ("YES" | "NO")
  INSTRUMENTED: ("YES" | "NO")
  MAX_CONTROLLED_MEMORY: (string | number | BigInt)
  MAX_TOTAL_MEMORY: (string | number | BigInt)
  NAME: string
  PARENT_THREAD_ID: ((string | number | BigInt)) | null
  PROCESSLIST_COMMAND: (string) | null
  PROCESSLIST_DB: (string) | null
  PROCESSLIST_HOST: (string) | null
  PROCESSLIST_ID: ((string | number | BigInt)) | null
  PROCESSLIST_INFO: (unknown) | null
  PROCESSLIST_STATE: (string) | null
  PROCESSLIST_TIME: ((string | number | BigInt)) | null
  PROCESSLIST_USER: (string) | null
  RESOURCE_GROUP: (string) | null
  ROLE: (string) | null
  THREAD_ID: (string | number | BigInt) & {readonly __brand?: 'threads_THREAD_ID'}
  THREAD_OS_ID: ((string | number | BigInt)) | null
  TOTAL_MEMORY: (string | number | BigInt)
  TYPE: string
}
export default Threads;

interface Threads_InsertParameters {
  CONNECTION_TYPE?: (string) | null
  CONTROLLED_MEMORY: (string | number | BigInt)
  EXECUTION_ENGINE?: (("PRIMARY" | "SECONDARY")) | null
  HISTORY: ("YES" | "NO")
  INSTRUMENTED: ("YES" | "NO")
  MAX_CONTROLLED_MEMORY: (string | number | BigInt)
  MAX_TOTAL_MEMORY: (string | number | BigInt)
  NAME: string
  PARENT_THREAD_ID?: ((string | number | BigInt)) | null
  PROCESSLIST_COMMAND?: (string) | null
  PROCESSLIST_DB?: (string) | null
  PROCESSLIST_HOST?: (string) | null
  PROCESSLIST_ID?: ((string | number | BigInt)) | null
  PROCESSLIST_INFO?: (unknown) | null
  PROCESSLIST_STATE?: (string) | null
  PROCESSLIST_TIME?: ((string | number | BigInt)) | null
  PROCESSLIST_USER?: (string) | null
  RESOURCE_GROUP?: (string) | null
  ROLE?: (string) | null
  THREAD_ID: (string | number | BigInt) & {readonly __brand?: 'threads_THREAD_ID'}
  THREAD_OS_ID?: ((string | number | BigInt)) | null
  TOTAL_MEMORY: (string | number | BigInt)
  TYPE: string
}
export type {Threads_InsertParameters}
