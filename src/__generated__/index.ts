/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: NNchGpKyPGzRSEuu1pXtJ44Wb9KbyyNO753sF5fGfALi7AGjycS1XnRWfsN+0nlQAlSLCMRVw9TMYwDd2+Bc6Q==
 */

/* eslint-disable */
// tslint:disable

import Accounts, {Accounts_InsertParameters} from './accounts'
import BinaryLogTransactionCompressionStats, {BinaryLogTransactionCompressionStats_InsertParameters} from './binary_log_transaction_compression_stats'
import ColumnsPriv, {ColumnsPriv_InsertParameters} from './columns_priv'
import CommandProducts, {CommandProducts_InsertParameters} from './command_products'
import Commands, {Commands_InsertParameters} from './commands'
import Comments, {Comments_InsertParameters} from './comments'
import Component, {Component_InsertParameters} from './component'
import CondInstances, {CondInstances_InsertParameters} from './cond_instances'
import DataLockWaits, {DataLockWaits_InsertParameters} from './data_lock_waits'
import DataLocks, {DataLocks_InsertParameters} from './data_locks'
import Db, {Db_InsertParameters} from './db'
import DefaultRoles, {DefaultRoles_InsertParameters} from './default_roles'
import EngineCost, {EngineCost_InsertParameters} from './engine_cost'
import ErrorLog, {ErrorLog_InsertParameters} from './error_log'
import EventsErrorsSummaryByAccountByError, {EventsErrorsSummaryByAccountByError_InsertParameters} from './events_errors_summary_by_account_by_error'
import EventsErrorsSummaryByHostByError, {EventsErrorsSummaryByHostByError_InsertParameters} from './events_errors_summary_by_host_by_error'
import EventsErrorsSummaryByThreadByError, {EventsErrorsSummaryByThreadByError_InsertParameters} from './events_errors_summary_by_thread_by_error'
import EventsErrorsSummaryByUserByError, {EventsErrorsSummaryByUserByError_InsertParameters} from './events_errors_summary_by_user_by_error'
import EventsErrorsSummaryGlobalByError, {EventsErrorsSummaryGlobalByError_InsertParameters} from './events_errors_summary_global_by_error'
import EventsStagesCurrent, {EventsStagesCurrent_InsertParameters} from './events_stages_current'
import EventsStagesHistory, {EventsStagesHistory_InsertParameters} from './events_stages_history'
import EventsStagesHistoryLong, {EventsStagesHistoryLong_InsertParameters} from './events_stages_history_long'
import EventsStagesSummaryByAccountByEventName, {EventsStagesSummaryByAccountByEventName_InsertParameters} from './events_stages_summary_by_account_by_event_name'
import EventsStagesSummaryByHostByEventName, {EventsStagesSummaryByHostByEventName_InsertParameters} from './events_stages_summary_by_host_by_event_name'
import EventsStagesSummaryByThreadByEventName, {EventsStagesSummaryByThreadByEventName_InsertParameters} from './events_stages_summary_by_thread_by_event_name'
import EventsStagesSummaryByUserByEventName, {EventsStagesSummaryByUserByEventName_InsertParameters} from './events_stages_summary_by_user_by_event_name'
import EventsStagesSummaryGlobalByEventName, {EventsStagesSummaryGlobalByEventName_InsertParameters} from './events_stages_summary_global_by_event_name'
import EventsStatementsCurrent, {EventsStatementsCurrent_InsertParameters} from './events_statements_current'
import EventsStatementsHistogramByDigest, {EventsStatementsHistogramByDigest_InsertParameters} from './events_statements_histogram_by_digest'
import EventsStatementsHistogramGlobal, {EventsStatementsHistogramGlobal_InsertParameters} from './events_statements_histogram_global'
import EventsStatementsHistory, {EventsStatementsHistory_InsertParameters} from './events_statements_history'
import EventsStatementsHistoryLong, {EventsStatementsHistoryLong_InsertParameters} from './events_statements_history_long'
import EventsStatementsSummaryByAccountByEventName, {EventsStatementsSummaryByAccountByEventName_InsertParameters} from './events_statements_summary_by_account_by_event_name'
import EventsStatementsSummaryByDigest, {EventsStatementsSummaryByDigest_InsertParameters} from './events_statements_summary_by_digest'
import EventsStatementsSummaryByHostByEventName, {EventsStatementsSummaryByHostByEventName_InsertParameters} from './events_statements_summary_by_host_by_event_name'
import EventsStatementsSummaryByProgram, {EventsStatementsSummaryByProgram_InsertParameters} from './events_statements_summary_by_program'
import EventsStatementsSummaryByThreadByEventName, {EventsStatementsSummaryByThreadByEventName_InsertParameters} from './events_statements_summary_by_thread_by_event_name'
import EventsStatementsSummaryByUserByEventName, {EventsStatementsSummaryByUserByEventName_InsertParameters} from './events_statements_summary_by_user_by_event_name'
import EventsStatementsSummaryGlobalByEventName, {EventsStatementsSummaryGlobalByEventName_InsertParameters} from './events_statements_summary_global_by_event_name'
import EventsTransactionsCurrent, {EventsTransactionsCurrent_InsertParameters} from './events_transactions_current'
import EventsTransactionsHistory, {EventsTransactionsHistory_InsertParameters} from './events_transactions_history'
import EventsTransactionsHistoryLong, {EventsTransactionsHistoryLong_InsertParameters} from './events_transactions_history_long'
import EventsTransactionsSummaryByAccountByEventName, {EventsTransactionsSummaryByAccountByEventName_InsertParameters} from './events_transactions_summary_by_account_by_event_name'
import EventsTransactionsSummaryByHostByEventName, {EventsTransactionsSummaryByHostByEventName_InsertParameters} from './events_transactions_summary_by_host_by_event_name'
import EventsTransactionsSummaryByThreadByEventName, {EventsTransactionsSummaryByThreadByEventName_InsertParameters} from './events_transactions_summary_by_thread_by_event_name'
import EventsTransactionsSummaryByUserByEventName, {EventsTransactionsSummaryByUserByEventName_InsertParameters} from './events_transactions_summary_by_user_by_event_name'
import EventsTransactionsSummaryGlobalByEventName, {EventsTransactionsSummaryGlobalByEventName_InsertParameters} from './events_transactions_summary_global_by_event_name'
import EventsWaitsCurrent, {EventsWaitsCurrent_InsertParameters} from './events_waits_current'
import EventsWaitsHistory, {EventsWaitsHistory_InsertParameters} from './events_waits_history'
import EventsWaitsHistoryLong, {EventsWaitsHistoryLong_InsertParameters} from './events_waits_history_long'
import EventsWaitsSummaryByAccountByEventName, {EventsWaitsSummaryByAccountByEventName_InsertParameters} from './events_waits_summary_by_account_by_event_name'
import EventsWaitsSummaryByHostByEventName, {EventsWaitsSummaryByHostByEventName_InsertParameters} from './events_waits_summary_by_host_by_event_name'
import EventsWaitsSummaryByInstance, {EventsWaitsSummaryByInstance_InsertParameters} from './events_waits_summary_by_instance'
import EventsWaitsSummaryByThreadByEventName, {EventsWaitsSummaryByThreadByEventName_InsertParameters} from './events_waits_summary_by_thread_by_event_name'
import EventsWaitsSummaryByUserByEventName, {EventsWaitsSummaryByUserByEventName_InsertParameters} from './events_waits_summary_by_user_by_event_name'
import EventsWaitsSummaryGlobalByEventName, {EventsWaitsSummaryGlobalByEventName_InsertParameters} from './events_waits_summary_global_by_event_name'
import FailedJobs, {FailedJobs_InsertParameters} from './failed_jobs'
import FileInstances, {FileInstances_InsertParameters} from './file_instances'
import FileSummaryByEventName, {FileSummaryByEventName_InsertParameters} from './file_summary_by_event_name'
import FileSummaryByInstance, {FileSummaryByInstance_InsertParameters} from './file_summary_by_instance'
import Func, {Func_InsertParameters} from './func'
import GeneralLog, {GeneralLog_InsertParameters} from './general_log'
import GlobalGrants, {GlobalGrants_InsertParameters} from './global_grants'
import GlobalStatus, {GlobalStatus_InsertParameters} from './global_status'
import GlobalVariables, {GlobalVariables_InsertParameters} from './global_variables'
import GtidExecuted, {GtidExecuted_InsertParameters} from './gtid_executed'
import HelpCategory, {HelpCategory_InsertParameters} from './help_category'
import HelpKeyword, {HelpKeyword_InsertParameters} from './help_keyword'
import HelpRelation, {HelpRelation_InsertParameters} from './help_relation'
import HelpTopic, {HelpTopic_InsertParameters} from './help_topic'
import HostCache, {HostCache_InsertParameters} from './host_cache'
import Hosts, {Hosts_InsertParameters} from './hosts'
import InnodbIndexStats, {InnodbIndexStats_InsertParameters} from './innodb_index_stats'
import InnodbRedoLogFiles, {InnodbRedoLogFiles_InsertParameters} from './innodb_redo_log_files'
import InnodbTableStats, {InnodbTableStats_InsertParameters} from './innodb_table_stats'
import KeyringComponentStatus, {KeyringComponentStatus_InsertParameters} from './keyring_component_status'
import KeyringKeys, {KeyringKeys_InsertParameters} from './keyring_keys'
import LogStatus, {LogStatus_InsertParameters} from './log_status'
import MemorySummaryByAccountByEventName, {MemorySummaryByAccountByEventName_InsertParameters} from './memory_summary_by_account_by_event_name'
import MemorySummaryByHostByEventName, {MemorySummaryByHostByEventName_InsertParameters} from './memory_summary_by_host_by_event_name'
import MemorySummaryByThreadByEventName, {MemorySummaryByThreadByEventName_InsertParameters} from './memory_summary_by_thread_by_event_name'
import MemorySummaryByUserByEventName, {MemorySummaryByUserByEventName_InsertParameters} from './memory_summary_by_user_by_event_name'
import MemorySummaryGlobalByEventName, {MemorySummaryGlobalByEventName_InsertParameters} from './memory_summary_global_by_event_name'
import MetadataLocks, {MetadataLocks_InsertParameters} from './metadata_locks'
import Migrations, {Migrations_InsertParameters} from './migrations'
import Milks, {Milks_InsertParameters} from './milks'
import MutexInstances, {MutexInstances_InsertParameters} from './mutex_instances'
import ObjectsSummaryGlobalByType, {ObjectsSummaryGlobalByType_InsertParameters} from './objects_summary_global_by_type'
import PasswordHistory, {PasswordHistory_InsertParameters} from './password_history'
import PasswordResets, {PasswordResets_InsertParameters} from './password_resets'
import PerformanceTimers, {PerformanceTimers_InsertParameters} from './performance_timers'
import PersistedVariables, {PersistedVariables_InsertParameters} from './persisted_variables'
import PersonalAccessTokens, {PersonalAccessTokens_InsertParameters} from './personal_access_tokens'
import Phones, {Phones_InsertParameters} from './phones'
import Plugin, {Plugin_InsertParameters} from './plugin'
import Poppings, {Poppings_InsertParameters} from './poppings'
import PreparedStatementsInstances, {PreparedStatementsInstances_InsertParameters} from './prepared_statements_instances'
import Processlist, {Processlist_InsertParameters} from './processlist'
import ProcsPriv, {ProcsPriv_InsertParameters} from './procs_priv'
import ProxiesPriv, {ProxiesPriv_InsertParameters} from './proxies_priv'
import Purees, {Purees_InsertParameters} from './purees'
import Recipes, {Recipes_InsertParameters} from './recipes'
import ReplicationApplierConfiguration, {ReplicationApplierConfiguration_InsertParameters} from './replication_applier_configuration'
import ReplicationApplierFilters, {ReplicationApplierFilters_InsertParameters} from './replication_applier_filters'
import ReplicationApplierGlobalFilters, {ReplicationApplierGlobalFilters_InsertParameters} from './replication_applier_global_filters'
import ReplicationApplierStatus, {ReplicationApplierStatus_InsertParameters} from './replication_applier_status'
import ReplicationApplierStatusByCoordinator, {ReplicationApplierStatusByCoordinator_InsertParameters} from './replication_applier_status_by_coordinator'
import ReplicationApplierStatusByWorker, {ReplicationApplierStatusByWorker_InsertParameters} from './replication_applier_status_by_worker'
import ReplicationAsynchronousConnectionFailover, {ReplicationAsynchronousConnectionFailover_InsertParameters} from './replication_asynchronous_connection_failover'
import ReplicationAsynchronousConnectionFailoverManaged, {ReplicationAsynchronousConnectionFailoverManaged_InsertParameters} from './replication_asynchronous_connection_failover_managed'
import ReplicationConnectionConfiguration, {ReplicationConnectionConfiguration_InsertParameters} from './replication_connection_configuration'
import ReplicationConnectionStatus, {ReplicationConnectionStatus_InsertParameters} from './replication_connection_status'
import ReplicationGroupConfigurationVersion, {ReplicationGroupConfigurationVersion_InsertParameters} from './replication_group_configuration_version'
import ReplicationGroupMemberActions, {ReplicationGroupMemberActions_InsertParameters} from './replication_group_member_actions'
import ReplicationGroupMemberStats, {ReplicationGroupMemberStats_InsertParameters} from './replication_group_member_stats'
import ReplicationGroupMembers, {ReplicationGroupMembers_InsertParameters} from './replication_group_members'
import RoleEdges, {RoleEdges_InsertParameters} from './role_edges'
import Room, {Room_InsertParameters} from './room'
import RwlockInstances, {RwlockInstances_InsertParameters} from './rwlock_instances'
import ServerCost, {ServerCost_InsertParameters} from './server_cost'
import Servers, {Servers_InsertParameters} from './servers'
import SessionAccountConnectAttrs, {SessionAccountConnectAttrs_InsertParameters} from './session_account_connect_attrs'
import SessionConnectAttrs, {SessionConnectAttrs_InsertParameters} from './session_connect_attrs'
import SessionStatus, {SessionStatus_InsertParameters} from './session_status'
import SessionVariables, {SessionVariables_InsertParameters} from './session_variables'
import SetupActors, {SetupActors_InsertParameters} from './setup_actors'
import SetupConsumers, {SetupConsumers_InsertParameters} from './setup_consumers'
import SetupInstruments, {SetupInstruments_InsertParameters} from './setup_instruments'
import SetupObjects, {SetupObjects_InsertParameters} from './setup_objects'
import SetupThreads, {SetupThreads_InsertParameters} from './setup_threads'
import SlaveMasterInfo, {SlaveMasterInfo_InsertParameters} from './slave_master_info'
import SlaveRelayLogInfo, {SlaveRelayLogInfo_InsertParameters} from './slave_relay_log_info'
import SlaveWorkerInfo, {SlaveWorkerInfo_InsertParameters} from './slave_worker_info'
import SlowLog, {SlowLog_InsertParameters} from './slow_log'
import SocketInstances, {SocketInstances_InsertParameters} from './socket_instances'
import SocketSummaryByEventName, {SocketSummaryByEventName_InsertParameters} from './socket_summary_by_event_name'
import SocketSummaryByInstance, {SocketSummaryByInstance_InsertParameters} from './socket_summary_by_instance'
import StatusByAccount, {StatusByAccount_InsertParameters} from './status_by_account'
import StatusByHost, {StatusByHost_InsertParameters} from './status_by_host'
import StatusByThread, {StatusByThread_InsertParameters} from './status_by_thread'
import StatusByUser, {StatusByUser_InsertParameters} from './status_by_user'
import Stores, {Stores_InsertParameters} from './stores'
import SysConfig, {SysConfig_InsertParameters} from './sys_config'
import TableHandles, {TableHandles_InsertParameters} from './table_handles'
import TableIoWaitsSummaryByIndexUsage, {TableIoWaitsSummaryByIndexUsage_InsertParameters} from './table_io_waits_summary_by_index_usage'
import TableIoWaitsSummaryByTable, {TableIoWaitsSummaryByTable_InsertParameters} from './table_io_waits_summary_by_table'
import TableLockWaitsSummaryByTable, {TableLockWaitsSummaryByTable_InsertParameters} from './table_lock_waits_summary_by_table'
import TablesPriv, {TablesPriv_InsertParameters} from './tables_priv'
import Teas, {Teas_InsertParameters} from './teas'
import Threads, {Threads_InsertParameters} from './threads'
import TimeZone, {TimeZone_InsertParameters} from './time_zone'
import TimeZoneLeapSecond, {TimeZoneLeapSecond_InsertParameters} from './time_zone_leap_second'
import TimeZoneName, {TimeZoneName_InsertParameters} from './time_zone_name'
import TimeZoneTransition, {TimeZoneTransition_InsertParameters} from './time_zone_transition'
import TimeZoneTransitionType, {TimeZoneTransitionType_InsertParameters} from './time_zone_transition_type'
import TlsChannelStatus, {TlsChannelStatus_InsertParameters} from './tls_channel_status'
import User, {User_InsertParameters} from './user'
import UserDefinedFunctions, {UserDefinedFunctions_InsertParameters} from './user_defined_functions'
import UserVariablesByThread, {UserVariablesByThread_InsertParameters} from './user_variables_by_thread'
import Users, {Users_InsertParameters} from './users'
import VariablesByThread, {VariablesByThread_InsertParameters} from './variables_by_thread'
import VariablesInfo, {VariablesInfo_InsertParameters} from './variables_info'

interface DatabaseSchema {
  command_products: {record: CommandProducts, insert: CommandProducts_InsertParameters};
  commands: {record: Commands, insert: Commands_InsertParameters};
  comments: {record: Comments, insert: Comments_InsertParameters};
  failed_jobs: {record: FailedJobs, insert: FailedJobs_InsertParameters};
  migrations: {record: Migrations, insert: Migrations_InsertParameters};
  milks: {record: Milks, insert: Milks_InsertParameters};
  password_resets: {record: PasswordResets, insert: PasswordResets_InsertParameters};
  personal_access_tokens: {record: PersonalAccessTokens, insert: PersonalAccessTokens_InsertParameters};
  phones: {record: Phones, insert: Phones_InsertParameters};
  poppings: {record: Poppings, insert: Poppings_InsertParameters};
  purees: {record: Purees, insert: Purees_InsertParameters};
  recipes: {record: Recipes, insert: Recipes_InsertParameters};
  stores: {record: Stores, insert: Stores_InsertParameters};
  teas: {record: Teas, insert: Teas_InsertParameters};
  users: {record: Users, insert: Users_InsertParameters};
  room: {record: Room, insert: Room_InsertParameters};
  users: {record: Users, insert: Users_InsertParameters};
  columns_priv: {record: ColumnsPriv, insert: ColumnsPriv_InsertParameters};
  component: {record: Component, insert: Component_InsertParameters};
  db: {record: Db, insert: Db_InsertParameters};
  default_roles: {record: DefaultRoles, insert: DefaultRoles_InsertParameters};
  engine_cost: {record: EngineCost, insert: EngineCost_InsertParameters};
  func: {record: Func, insert: Func_InsertParameters};
  general_log: {record: GeneralLog, insert: GeneralLog_InsertParameters};
  global_grants: {record: GlobalGrants, insert: GlobalGrants_InsertParameters};
  gtid_executed: {record: GtidExecuted, insert: GtidExecuted_InsertParameters};
  help_category: {record: HelpCategory, insert: HelpCategory_InsertParameters};
  help_keyword: {record: HelpKeyword, insert: HelpKeyword_InsertParameters};
  help_relation: {record: HelpRelation, insert: HelpRelation_InsertParameters};
  help_topic: {record: HelpTopic, insert: HelpTopic_InsertParameters};
  innodb_index_stats: {record: InnodbIndexStats, insert: InnodbIndexStats_InsertParameters};
  innodb_table_stats: {record: InnodbTableStats, insert: InnodbTableStats_InsertParameters};
  password_history: {record: PasswordHistory, insert: PasswordHistory_InsertParameters};
  plugin: {record: Plugin, insert: Plugin_InsertParameters};
  procs_priv: {record: ProcsPriv, insert: ProcsPriv_InsertParameters};
  proxies_priv: {record: ProxiesPriv, insert: ProxiesPriv_InsertParameters};
  replication_asynchronous_connection_failover: {record: ReplicationAsynchronousConnectionFailover, insert: ReplicationAsynchronousConnectionFailover_InsertParameters};
  replication_asynchronous_connection_failover_managed: {record: ReplicationAsynchronousConnectionFailoverManaged, insert: ReplicationAsynchronousConnectionFailoverManaged_InsertParameters};
  replication_group_configuration_version: {record: ReplicationGroupConfigurationVersion, insert: ReplicationGroupConfigurationVersion_InsertParameters};
  replication_group_member_actions: {record: ReplicationGroupMemberActions, insert: ReplicationGroupMemberActions_InsertParameters};
  role_edges: {record: RoleEdges, insert: RoleEdges_InsertParameters};
  server_cost: {record: ServerCost, insert: ServerCost_InsertParameters};
  servers: {record: Servers, insert: Servers_InsertParameters};
  slave_master_info: {record: SlaveMasterInfo, insert: SlaveMasterInfo_InsertParameters};
  slave_relay_log_info: {record: SlaveRelayLogInfo, insert: SlaveRelayLogInfo_InsertParameters};
  slave_worker_info: {record: SlaveWorkerInfo, insert: SlaveWorkerInfo_InsertParameters};
  slow_log: {record: SlowLog, insert: SlowLog_InsertParameters};
  tables_priv: {record: TablesPriv, insert: TablesPriv_InsertParameters};
  time_zone: {record: TimeZone, insert: TimeZone_InsertParameters};
  time_zone_leap_second: {record: TimeZoneLeapSecond, insert: TimeZoneLeapSecond_InsertParameters};
  time_zone_name: {record: TimeZoneName, insert: TimeZoneName_InsertParameters};
  time_zone_transition: {record: TimeZoneTransition, insert: TimeZoneTransition_InsertParameters};
  time_zone_transition_type: {record: TimeZoneTransitionType, insert: TimeZoneTransitionType_InsertParameters};
  user: {record: User, insert: User_InsertParameters};
  accounts: {record: Accounts, insert: Accounts_InsertParameters};
  binary_log_transaction_compression_stats: {record: BinaryLogTransactionCompressionStats, insert: BinaryLogTransactionCompressionStats_InsertParameters};
  cond_instances: {record: CondInstances, insert: CondInstances_InsertParameters};
  data_lock_waits: {record: DataLockWaits, insert: DataLockWaits_InsertParameters};
  data_locks: {record: DataLocks, insert: DataLocks_InsertParameters};
  error_log: {record: ErrorLog, insert: ErrorLog_InsertParameters};
  events_errors_summary_by_account_by_error: {record: EventsErrorsSummaryByAccountByError, insert: EventsErrorsSummaryByAccountByError_InsertParameters};
  events_errors_summary_by_host_by_error: {record: EventsErrorsSummaryByHostByError, insert: EventsErrorsSummaryByHostByError_InsertParameters};
  events_errors_summary_by_thread_by_error: {record: EventsErrorsSummaryByThreadByError, insert: EventsErrorsSummaryByThreadByError_InsertParameters};
  events_errors_summary_by_user_by_error: {record: EventsErrorsSummaryByUserByError, insert: EventsErrorsSummaryByUserByError_InsertParameters};
  events_errors_summary_global_by_error: {record: EventsErrorsSummaryGlobalByError, insert: EventsErrorsSummaryGlobalByError_InsertParameters};
  events_stages_current: {record: EventsStagesCurrent, insert: EventsStagesCurrent_InsertParameters};
  events_stages_history: {record: EventsStagesHistory, insert: EventsStagesHistory_InsertParameters};
  events_stages_history_long: {record: EventsStagesHistoryLong, insert: EventsStagesHistoryLong_InsertParameters};
  events_stages_summary_by_account_by_event_name: {record: EventsStagesSummaryByAccountByEventName, insert: EventsStagesSummaryByAccountByEventName_InsertParameters};
  events_stages_summary_by_host_by_event_name: {record: EventsStagesSummaryByHostByEventName, insert: EventsStagesSummaryByHostByEventName_InsertParameters};
  events_stages_summary_by_thread_by_event_name: {record: EventsStagesSummaryByThreadByEventName, insert: EventsStagesSummaryByThreadByEventName_InsertParameters};
  events_stages_summary_by_user_by_event_name: {record: EventsStagesSummaryByUserByEventName, insert: EventsStagesSummaryByUserByEventName_InsertParameters};
  events_stages_summary_global_by_event_name: {record: EventsStagesSummaryGlobalByEventName, insert: EventsStagesSummaryGlobalByEventName_InsertParameters};
  events_statements_current: {record: EventsStatementsCurrent, insert: EventsStatementsCurrent_InsertParameters};
  events_statements_histogram_by_digest: {record: EventsStatementsHistogramByDigest, insert: EventsStatementsHistogramByDigest_InsertParameters};
  events_statements_histogram_global: {record: EventsStatementsHistogramGlobal, insert: EventsStatementsHistogramGlobal_InsertParameters};
  events_statements_history: {record: EventsStatementsHistory, insert: EventsStatementsHistory_InsertParameters};
  events_statements_history_long: {record: EventsStatementsHistoryLong, insert: EventsStatementsHistoryLong_InsertParameters};
  events_statements_summary_by_account_by_event_name: {record: EventsStatementsSummaryByAccountByEventName, insert: EventsStatementsSummaryByAccountByEventName_InsertParameters};
  events_statements_summary_by_digest: {record: EventsStatementsSummaryByDigest, insert: EventsStatementsSummaryByDigest_InsertParameters};
  events_statements_summary_by_host_by_event_name: {record: EventsStatementsSummaryByHostByEventName, insert: EventsStatementsSummaryByHostByEventName_InsertParameters};
  events_statements_summary_by_program: {record: EventsStatementsSummaryByProgram, insert: EventsStatementsSummaryByProgram_InsertParameters};
  events_statements_summary_by_thread_by_event_name: {record: EventsStatementsSummaryByThreadByEventName, insert: EventsStatementsSummaryByThreadByEventName_InsertParameters};
  events_statements_summary_by_user_by_event_name: {record: EventsStatementsSummaryByUserByEventName, insert: EventsStatementsSummaryByUserByEventName_InsertParameters};
  events_statements_summary_global_by_event_name: {record: EventsStatementsSummaryGlobalByEventName, insert: EventsStatementsSummaryGlobalByEventName_InsertParameters};
  events_transactions_current: {record: EventsTransactionsCurrent, insert: EventsTransactionsCurrent_InsertParameters};
  events_transactions_history: {record: EventsTransactionsHistory, insert: EventsTransactionsHistory_InsertParameters};
  events_transactions_history_long: {record: EventsTransactionsHistoryLong, insert: EventsTransactionsHistoryLong_InsertParameters};
  events_transactions_summary_by_account_by_event_name: {record: EventsTransactionsSummaryByAccountByEventName, insert: EventsTransactionsSummaryByAccountByEventName_InsertParameters};
  events_transactions_summary_by_host_by_event_name: {record: EventsTransactionsSummaryByHostByEventName, insert: EventsTransactionsSummaryByHostByEventName_InsertParameters};
  events_transactions_summary_by_thread_by_event_name: {record: EventsTransactionsSummaryByThreadByEventName, insert: EventsTransactionsSummaryByThreadByEventName_InsertParameters};
  events_transactions_summary_by_user_by_event_name: {record: EventsTransactionsSummaryByUserByEventName, insert: EventsTransactionsSummaryByUserByEventName_InsertParameters};
  events_transactions_summary_global_by_event_name: {record: EventsTransactionsSummaryGlobalByEventName, insert: EventsTransactionsSummaryGlobalByEventName_InsertParameters};
  events_waits_current: {record: EventsWaitsCurrent, insert: EventsWaitsCurrent_InsertParameters};
  events_waits_history: {record: EventsWaitsHistory, insert: EventsWaitsHistory_InsertParameters};
  events_waits_history_long: {record: EventsWaitsHistoryLong, insert: EventsWaitsHistoryLong_InsertParameters};
  events_waits_summary_by_account_by_event_name: {record: EventsWaitsSummaryByAccountByEventName, insert: EventsWaitsSummaryByAccountByEventName_InsertParameters};
  events_waits_summary_by_host_by_event_name: {record: EventsWaitsSummaryByHostByEventName, insert: EventsWaitsSummaryByHostByEventName_InsertParameters};
  events_waits_summary_by_instance: {record: EventsWaitsSummaryByInstance, insert: EventsWaitsSummaryByInstance_InsertParameters};
  events_waits_summary_by_thread_by_event_name: {record: EventsWaitsSummaryByThreadByEventName, insert: EventsWaitsSummaryByThreadByEventName_InsertParameters};
  events_waits_summary_by_user_by_event_name: {record: EventsWaitsSummaryByUserByEventName, insert: EventsWaitsSummaryByUserByEventName_InsertParameters};
  events_waits_summary_global_by_event_name: {record: EventsWaitsSummaryGlobalByEventName, insert: EventsWaitsSummaryGlobalByEventName_InsertParameters};
  file_instances: {record: FileInstances, insert: FileInstances_InsertParameters};
  file_summary_by_event_name: {record: FileSummaryByEventName, insert: FileSummaryByEventName_InsertParameters};
  file_summary_by_instance: {record: FileSummaryByInstance, insert: FileSummaryByInstance_InsertParameters};
  global_status: {record: GlobalStatus, insert: GlobalStatus_InsertParameters};
  global_variables: {record: GlobalVariables, insert: GlobalVariables_InsertParameters};
  host_cache: {record: HostCache, insert: HostCache_InsertParameters};
  hosts: {record: Hosts, insert: Hosts_InsertParameters};
  innodb_redo_log_files: {record: InnodbRedoLogFiles, insert: InnodbRedoLogFiles_InsertParameters};
  keyring_component_status: {record: KeyringComponentStatus, insert: KeyringComponentStatus_InsertParameters};
  keyring_keys: {record: KeyringKeys, insert: KeyringKeys_InsertParameters};
  log_status: {record: LogStatus, insert: LogStatus_InsertParameters};
  memory_summary_by_account_by_event_name: {record: MemorySummaryByAccountByEventName, insert: MemorySummaryByAccountByEventName_InsertParameters};
  memory_summary_by_host_by_event_name: {record: MemorySummaryByHostByEventName, insert: MemorySummaryByHostByEventName_InsertParameters};
  memory_summary_by_thread_by_event_name: {record: MemorySummaryByThreadByEventName, insert: MemorySummaryByThreadByEventName_InsertParameters};
  memory_summary_by_user_by_event_name: {record: MemorySummaryByUserByEventName, insert: MemorySummaryByUserByEventName_InsertParameters};
  memory_summary_global_by_event_name: {record: MemorySummaryGlobalByEventName, insert: MemorySummaryGlobalByEventName_InsertParameters};
  metadata_locks: {record: MetadataLocks, insert: MetadataLocks_InsertParameters};
  mutex_instances: {record: MutexInstances, insert: MutexInstances_InsertParameters};
  objects_summary_global_by_type: {record: ObjectsSummaryGlobalByType, insert: ObjectsSummaryGlobalByType_InsertParameters};
  performance_timers: {record: PerformanceTimers, insert: PerformanceTimers_InsertParameters};
  persisted_variables: {record: PersistedVariables, insert: PersistedVariables_InsertParameters};
  prepared_statements_instances: {record: PreparedStatementsInstances, insert: PreparedStatementsInstances_InsertParameters};
  processlist: {record: Processlist, insert: Processlist_InsertParameters};
  replication_applier_configuration: {record: ReplicationApplierConfiguration, insert: ReplicationApplierConfiguration_InsertParameters};
  replication_applier_filters: {record: ReplicationApplierFilters, insert: ReplicationApplierFilters_InsertParameters};
  replication_applier_global_filters: {record: ReplicationApplierGlobalFilters, insert: ReplicationApplierGlobalFilters_InsertParameters};
  replication_applier_status: {record: ReplicationApplierStatus, insert: ReplicationApplierStatus_InsertParameters};
  replication_applier_status_by_coordinator: {record: ReplicationApplierStatusByCoordinator, insert: ReplicationApplierStatusByCoordinator_InsertParameters};
  replication_applier_status_by_worker: {record: ReplicationApplierStatusByWorker, insert: ReplicationApplierStatusByWorker_InsertParameters};
  replication_asynchronous_connection_failover: {record: ReplicationAsynchronousConnectionFailover, insert: ReplicationAsynchronousConnectionFailover_InsertParameters};
  replication_asynchronous_connection_failover_managed: {record: ReplicationAsynchronousConnectionFailoverManaged, insert: ReplicationAsynchronousConnectionFailoverManaged_InsertParameters};
  replication_connection_configuration: {record: ReplicationConnectionConfiguration, insert: ReplicationConnectionConfiguration_InsertParameters};
  replication_connection_status: {record: ReplicationConnectionStatus, insert: ReplicationConnectionStatus_InsertParameters};
  replication_group_member_stats: {record: ReplicationGroupMemberStats, insert: ReplicationGroupMemberStats_InsertParameters};
  replication_group_members: {record: ReplicationGroupMembers, insert: ReplicationGroupMembers_InsertParameters};
  rwlock_instances: {record: RwlockInstances, insert: RwlockInstances_InsertParameters};
  session_account_connect_attrs: {record: SessionAccountConnectAttrs, insert: SessionAccountConnectAttrs_InsertParameters};
  session_connect_attrs: {record: SessionConnectAttrs, insert: SessionConnectAttrs_InsertParameters};
  session_status: {record: SessionStatus, insert: SessionStatus_InsertParameters};
  session_variables: {record: SessionVariables, insert: SessionVariables_InsertParameters};
  setup_actors: {record: SetupActors, insert: SetupActors_InsertParameters};
  setup_consumers: {record: SetupConsumers, insert: SetupConsumers_InsertParameters};
  setup_instruments: {record: SetupInstruments, insert: SetupInstruments_InsertParameters};
  setup_objects: {record: SetupObjects, insert: SetupObjects_InsertParameters};
  setup_threads: {record: SetupThreads, insert: SetupThreads_InsertParameters};
  socket_instances: {record: SocketInstances, insert: SocketInstances_InsertParameters};
  socket_summary_by_event_name: {record: SocketSummaryByEventName, insert: SocketSummaryByEventName_InsertParameters};
  socket_summary_by_instance: {record: SocketSummaryByInstance, insert: SocketSummaryByInstance_InsertParameters};
  status_by_account: {record: StatusByAccount, insert: StatusByAccount_InsertParameters};
  status_by_host: {record: StatusByHost, insert: StatusByHost_InsertParameters};
  status_by_thread: {record: StatusByThread, insert: StatusByThread_InsertParameters};
  status_by_user: {record: StatusByUser, insert: StatusByUser_InsertParameters};
  table_handles: {record: TableHandles, insert: TableHandles_InsertParameters};
  table_io_waits_summary_by_index_usage: {record: TableIoWaitsSummaryByIndexUsage, insert: TableIoWaitsSummaryByIndexUsage_InsertParameters};
  table_io_waits_summary_by_table: {record: TableIoWaitsSummaryByTable, insert: TableIoWaitsSummaryByTable_InsertParameters};
  table_lock_waits_summary_by_table: {record: TableLockWaitsSummaryByTable, insert: TableLockWaitsSummaryByTable_InsertParameters};
  threads: {record: Threads, insert: Threads_InsertParameters};
  tls_channel_status: {record: TlsChannelStatus, insert: TlsChannelStatus_InsertParameters};
  user_defined_functions: {record: UserDefinedFunctions, insert: UserDefinedFunctions_InsertParameters};
  user_variables_by_thread: {record: UserVariablesByThread, insert: UserVariablesByThread_InsertParameters};
  users: {record: Users, insert: Users_InsertParameters};
  variables_by_thread: {record: VariablesByThread, insert: VariablesByThread_InsertParameters};
  variables_info: {record: VariablesInfo, insert: VariablesInfo_InsertParameters};
  sys_config: {record: SysConfig, insert: SysConfig_InsertParameters};
}
export default DatabaseSchema;

/**
 * JSON serialize values (v) if the table name (t) and column name (c)
 * is a JSON column.
 * This is necessary if you want to store values that are not plain objects
 * in a JSON column.
 */
function serializeValue(t: string, c: string, v: unknown): unknown {
  if (
    (t === "replication_asynchronous_connection_failover_managed" && c === "Configuration") ||
    (t === "user" && c === "User_attributes") ||
    (t === "log_status" && (c === "LOCAL" || c === "REPLICATION" || c === "STORAGE_ENGINES")) ||
    (t === "replication_asynchronous_connection_failover_managed" && c === "CONFIGURATION")
  ) {
    return JSON.stringify(v);
  }
  return v;
}
export {serializeValue}
