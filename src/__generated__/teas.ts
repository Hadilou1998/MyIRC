/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: fVKTHyfFGExPh9Zi4UPjLVcqN6dRyNKALqRNUTcW1OzTQucpd/81g3xSvHggY2dy+uiJiUZuOWHRgsAXm7+qaA==
 */

/* eslint-disable */
// tslint:disable

interface Teas {
  created_at: ((string | Date)) | null
  description: string
  id: number & {readonly __brand?: 'teas_id'}
  image_url: string
  name: string
  price: number
  stock: number
  updated_at: ((string | Date)) | null
}
export default Teas;

interface Teas_InsertParameters {
  created_at?: ((string | Date)) | null
  description: string
  id: number & {readonly __brand?: 'teas_id'}
  image_url: string
  name: string
  price: number
  stock: number
  updated_at?: ((string | Date)) | null
}
export type {Teas_InsertParameters}
