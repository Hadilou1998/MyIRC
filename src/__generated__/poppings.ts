/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: wG3Mjd0dONKWGMedYNsfYqN+tN1mdFFjwfjIuQttp/CQFlXAst1D/hSrP4uE2TOVlaVkFWAfP1k1xV/dDCCJ3Q==
 */

/* eslint-disable */
// tslint:disable

interface Poppings {
  created_at: ((string | Date)) | null
  description: string
  id: number & {readonly __brand?: 'poppings_id'}
  image_url: string
  name: string
  price: number
  stock: number
  updated_at: ((string | Date)) | null
}
export default Poppings;

interface Poppings_InsertParameters {
  created_at?: ((string | Date)) | null
  description: string
  id: number & {readonly __brand?: 'poppings_id'}
  image_url: string
  name: string
  price: number
  stock: number
  updated_at?: ((string | Date)) | null
}
export type {Poppings_InsertParameters}
