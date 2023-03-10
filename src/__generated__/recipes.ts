/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: mTZoGU190YpdQBzxRHql4/2OXeBxvx2Ei20ah+YJaLDv96viZ9A0eourYak1ZJT8Cz82VjDqgwKi6a6UqhGS6w==
 */

/* eslint-disable */
// tslint:disable

import Milks from './milks'
import Poppings from './poppings'
import Purees from './purees'
import Teas from './teas'

interface Recipes {
  created_at: ((string | Date)) | null
  description: string
  id: number & {readonly __brand?: 'recipes_id'}
  milkId: Milks['id']
  name: string
  poppingId: Poppings['id']
  price: number
  pureeId: Purees['id']
  teaId: Teas['id']
  updated_at: ((string | Date)) | null
}
export default Recipes;

interface Recipes_InsertParameters {
  created_at?: ((string | Date)) | null
  description: string
  id: number & {readonly __brand?: 'recipes_id'}
  milkId: Milks['id']
  name: string
  poppingId: Poppings['id']
  price: number
  pureeId: Purees['id']
  teaId: Teas['id']
  updated_at?: ((string | Date)) | null
}
export type {Recipes_InsertParameters}
