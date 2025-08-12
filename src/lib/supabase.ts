import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lovable.app/supabase'
const supabaseAnonKey = 'lovable-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Product = {
  id: string
  name: string
  price: number
  original_price?: number
  image: string
  category: string
  rating: number
  reviews: number
  is_on_sale: boolean
  description?: string
  created_at: string
  updated_at: string
}

export type CartItem = {
  id: string
  user_id: string
  product_id: string
  quantity: number
  created_at: string
  updated_at: string
  products: Product
}

export type Order = {
  id: string
  user_id: string
  total_amount: number
  status: string
  customer_name: string
  customer_email: string
  delivery_address: string
  created_at: string
  updated_at: string
}