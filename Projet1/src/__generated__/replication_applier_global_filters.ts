/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: s1CTpphxifK7Hp0yi2yBn7PjsHLTsZ2jIrzfgrPLkx7rOf0dIKZlLJ1raRNuKsEbFYPJTr+Huik9jaHGQot2zQ==
 */

/* eslint-disable */
// tslint:disable

interface ReplicationApplierGlobalFilters {
  ACTIVE_SINCE: (string | Date)
  CONFIGURED_BY: ("STARTUP_OPTIONS" | "CHANGE_REPLICATION_FILTER")
  FILTER_NAME: string
  FILTER_RULE: unknown
}
export default ReplicationApplierGlobalFilters;

interface ReplicationApplierGlobalFilters_InsertParameters {
  ACTIVE_SINCE: (string | Date)
  CONFIGURED_BY: ("STARTUP_OPTIONS" | "CHANGE_REPLICATION_FILTER")
  FILTER_NAME: string
  FILTER_RULE: unknown
}
export type {ReplicationApplierGlobalFilters_InsertParameters}