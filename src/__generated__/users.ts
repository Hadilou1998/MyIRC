/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: yboLpIMOLCf8vI/KDOA5I2OhIPxSyGk2hm961ZAjPHl78nRac/Qjijc3prBk7umgFe55y6oGFllzgZYe0Z4iXA==
 */

/* eslint-disable */
// tslint:disable

import Phones from './phones'

interface Users {
  created_at: ((string | Date)) | null
  email: string
  email_verified_at: ((string | Date)) | null
  first_name: string
  id: number & {readonly __brand?: 'users_id'}
  /**
   * @default 0
   */
  isAuthorized: (boolean | number)
  last_name: string
  password: string
  photo-url: (string) | null
  remember_token: (string) | null
  telephoneId: Phones['id']
  updated_at: ((string | Date)) | null
}
export default Users;

interface Users_InsertParameters {
  created_at?: ((string | Date)) | null
  email: string
  email_verified_at?: ((string | Date)) | null
  first_name: string
  id: number & {readonly __brand?: 'users_id'}
  /**
   * @default 0
   */
  isAuthorized?: (boolean | number)
  last_name: string
  password: string
  photo-url?: (string) | null
  remember_token?: (string) | null
  telephoneId: Phones['id']
  updated_at?: ((string | Date)) | null
}
export type {Users_InsertParameters}
