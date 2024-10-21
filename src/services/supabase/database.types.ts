export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Addresses: {
        Row: {
          city: string | null
          country: string | null
          created_at: string
          deletedAt: string | null
          id: number
          is_deleted: boolean | null
          state: string | null
          street: string | null
          updated_at: string | null
          user_id: string | null
          zip_code: string | null
        }
        Insert: {
          city?: string | null
          country?: string | null
          created_at?: string
          deletedAt?: string | null
          id?: number
          is_deleted?: boolean | null
          state?: string | null
          street?: string | null
          updated_at?: string | null
          user_id?: string | null
          zip_code?: string | null
        }
        Update: {
          city?: string | null
          country?: string | null
          created_at?: string
          deletedAt?: string | null
          id?: number
          is_deleted?: boolean | null
          state?: string | null
          street?: string | null
          updated_at?: string | null
          user_id?: string | null
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Addresses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Categories: {
        Row: {
          created_at: string
          deletedAt: string | null
          id: number
          is_deleted: boolean | null
          name: string | null
          restaurant_id: number | null
          updatedAt: string | null
        }
        Insert: {
          created_at?: string
          deletedAt?: string | null
          id?: number
          is_deleted?: boolean | null
          name?: string | null
          restaurant_id?: number | null
          updatedAt?: string | null
        }
        Update: {
          created_at?: string
          deletedAt?: string | null
          id?: number
          is_deleted?: boolean | null
          name?: string | null
          restaurant_id?: number | null
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Categories_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "Restaurant"
            referencedColumns: ["id"]
          },
        ]
      }
      Favorites: {
        Row: {
          created_at: string
          id: number
          product_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          product_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          product_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "Favorites_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "Products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Favorites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Modifier: {
        Row: {
          created_at: string
          deletedAt: string | null
          id: number
          is_deleted: boolean | null
          name: string | null
          product_id: number | null
          updatedAt: string | null
        }
        Insert: {
          created_at?: string
          deletedAt?: string | null
          id?: number
          is_deleted?: boolean | null
          name?: string | null
          product_id?: number | null
          updatedAt?: string | null
        }
        Update: {
          created_at?: string
          deletedAt?: string | null
          id?: number
          is_deleted?: boolean | null
          name?: string | null
          product_id?: number | null
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "modifier_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "Products"
            referencedColumns: ["id"]
          },
        ]
      }
      Modifier_Option: {
        Row: {
          created_at: string
          deletedAt: string | null
          id: number
          is_deleted: boolean | null
          modifier_id: number | null
          option_name: string | null
          price: number | null
          updatedAt: string | null
        }
        Insert: {
          created_at?: string
          deletedAt?: string | null
          id?: number
          is_deleted?: boolean | null
          modifier_id?: number | null
          option_name?: string | null
          price?: number | null
          updatedAt?: string | null
        }
        Update: {
          created_at?: string
          deletedAt?: string | null
          id?: number
          is_deleted?: boolean | null
          modifier_id?: number | null
          option_name?: string | null
          price?: number | null
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "option_modifier_modifier_id_fkey"
            columns: ["modifier_id"]
            isOneToOne: false
            referencedRelation: "Modifier"
            referencedColumns: ["id"]
          },
        ]
      }
      Order_Item_Option_Modifier: {
        Row: {
          created_at: string
          id: number
          is_selected: boolean | null
          modifier_id: number | null
          option_modifier_id: number
          order_id: number | null
          order_item_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          is_selected?: boolean | null
          modifier_id?: number | null
          option_modifier_id: number
          order_id?: number | null
          order_item_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          is_selected?: boolean | null
          modifier_id?: number | null
          option_modifier_id?: number
          order_id?: number | null
          order_item_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "order_item_option_modifier_modifier_id_fkey"
            columns: ["modifier_id"]
            isOneToOne: false
            referencedRelation: "Modifier"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_item_option_modifier_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "Orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_item_option_option_modifier_id_fkey"
            columns: ["option_modifier_id"]
            isOneToOne: false
            referencedRelation: "Modifier_Option"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_item_option_order_item_id_fkey"
            columns: ["order_item_id"]
            isOneToOne: false
            referencedRelation: "Order_Items"
            referencedColumns: ["id"]
          },
        ]
      }
      Order_Items: {
        Row: {
          created_at: string
          deletedAt: string | null
          id: number
          imageUrl: string | null
          is_deleted: boolean | null
          notes: string | null
          order_id: number | null
          price: number | null
          product_id: number | null
          quantity: number | null
          updatedAt: string | null
        }
        Insert: {
          created_at?: string
          deletedAt?: string | null
          id?: number
          imageUrl?: string | null
          is_deleted?: boolean | null
          notes?: string | null
          order_id?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          updatedAt?: string | null
        }
        Update: {
          created_at?: string
          deletedAt?: string | null
          id?: number
          imageUrl?: string | null
          is_deleted?: boolean | null
          notes?: string | null
          order_id?: number | null
          price?: number | null
          product_id?: number | null
          quantity?: number | null
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Order_Items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "Orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Order_Items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "Products"
            referencedColumns: ["id"]
          },
        ]
      }
      Orders: {
        Row: {
          address_id: number | null
          created_at: string
          deletedAt: string | null
          deliveryAt: string | null
          id: number
          is_deleted: boolean | null
          order_type: Database["public"]["Enums"]["ordertype"] | null
          payment_method_id: number | null
          restaurant_id: number
          status: Database["public"]["Enums"]["Enum_Status"] | null
          totalAmount: number | null
          totalQuantity: number | null
          updatedAt: string | null
          user_id: string
        }
        Insert: {
          address_id?: number | null
          created_at?: string
          deletedAt?: string | null
          deliveryAt?: string | null
          id?: number
          is_deleted?: boolean | null
          order_type?: Database["public"]["Enums"]["ordertype"] | null
          payment_method_id?: number | null
          restaurant_id?: number
          status?: Database["public"]["Enums"]["Enum_Status"] | null
          totalAmount?: number | null
          totalQuantity?: number | null
          updatedAt?: string | null
          user_id: string
        }
        Update: {
          address_id?: number | null
          created_at?: string
          deletedAt?: string | null
          deliveryAt?: string | null
          id?: number
          is_deleted?: boolean | null
          order_type?: Database["public"]["Enums"]["ordertype"] | null
          payment_method_id?: number | null
          restaurant_id?: number
          status?: Database["public"]["Enums"]["Enum_Status"] | null
          totalAmount?: number | null
          totalQuantity?: number | null
          updatedAt?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "Orders_address_id_fkey"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "Addresses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Orders_payment_method_id_fkey"
            columns: ["payment_method_id"]
            isOneToOne: false
            referencedRelation: "Payment_Method"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Orders_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "Restaurant"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Payment_Method: {
        Row: {
          card_cvc: number | null
          card_number: string | null
          created_at: string
          deletedAt: string | null
          expire_date: string | null
          id: number
          is_deleted: boolean | null
          method_type: Database["public"]["Enums"]["payment_method"] | null
          updatedAt: string | null
          user_id: string
        }
        Insert: {
          card_cvc?: number | null
          card_number?: string | null
          created_at?: string
          deletedAt?: string | null
          expire_date?: string | null
          id?: number
          is_deleted?: boolean | null
          method_type?: Database["public"]["Enums"]["payment_method"] | null
          updatedAt?: string | null
          user_id: string
        }
        Update: {
          card_cvc?: number | null
          card_number?: string | null
          created_at?: string
          deletedAt?: string | null
          expire_date?: string | null
          id?: number
          is_deleted?: boolean | null
          method_type?: Database["public"]["Enums"]["payment_method"] | null
          updatedAt?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "Payment_Method_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Payment_Methodpaypal: {
        Row: {
          account_name: string | null
          created_at: string
          deletedAt: string | null
          email: string | null
          id: number
          is_deleted: boolean | null
          method_type: string | null
          phone_number: string | null
          updatedAt: string | null
          user_id: string | null
        }
        Insert: {
          account_name?: string | null
          created_at?: string
          deletedAt?: string | null
          email?: string | null
          id?: number
          is_deleted?: boolean | null
          method_type?: string | null
          phone_number?: string | null
          updatedAt?: string | null
          user_id?: string | null
        }
        Update: {
          account_name?: string | null
          created_at?: string
          deletedAt?: string | null
          email?: string | null
          id?: number
          is_deleted?: boolean | null
          method_type?: string | null
          phone_number?: string | null
          updatedAt?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Payment_Methodpaypal_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Products: {
        Row: {
          categoriy_id: number
          created_at: string
          deleteAt: string | null
          description: string | null
          id: number
          imageUrl: string | null
          is_deleted: boolean | null
          name: string | null
          price: number | null
          restaurant_Id: number | null
          updatedAt: string | null
        }
        Insert: {
          categoriy_id: number
          created_at?: string
          deleteAt?: string | null
          description?: string | null
          id?: number
          imageUrl?: string | null
          is_deleted?: boolean | null
          name?: string | null
          price?: number | null
          restaurant_Id?: number | null
          updatedAt?: string | null
        }
        Update: {
          categoriy_id?: number
          created_at?: string
          deleteAt?: string | null
          description?: string | null
          id?: number
          imageUrl?: string | null
          is_deleted?: boolean | null
          name?: string | null
          price?: number | null
          restaurant_Id?: number | null
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Products_categoriy_id_fkey"
            columns: ["categoriy_id"]
            isOneToOne: false
            referencedRelation: "Categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Products_restaurant_Id_fkey"
            columns: ["restaurant_Id"]
            isOneToOne: false
            referencedRelation: "Restaurant"
            referencedColumns: ["id"]
          },
        ]
      }
      Restaurant: {
        Row: {
          address: string | null
          created_at: string | null
          deletedAt: string | null
          id: number
          is_deleted: boolean | null
          name: string | null
          phone: string | null
          updatedAt: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          deletedAt?: string | null
          id?: number
          is_deleted?: boolean | null
          name?: string | null
          phone?: string | null
          updatedAt?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          deletedAt?: string | null
          id?: number
          is_deleted?: boolean | null
          name?: string | null
          phone?: string | null
          updatedAt?: string | null
        }
        Relationships: []
      }
      User: {
        Row: {
          adressId: number | null
          created_at: string | null
          email: string
          id: string
          is_deleted: boolean | null
          name: string | null
          phone: string
          updated_at: string | null
        }
        Insert: {
          adressId?: number | null
          created_at?: string | null
          email: string
          id: string
          is_deleted?: boolean | null
          name?: string | null
          phone: string
          updated_at?: string | null
        }
        Update: {
          adressId?: number | null
          created_at?: string | null
          email?: string
          id?: string
          is_deleted?: boolean | null
          name?: string | null
          phone?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      ordernn_5o: {
        Args: {
          userid: string
          order_data: Json
        }
        Returns: number
      }
    }
    Enums: {
      Enum_Status:
        | "pending"
        | "confirmed"
        | "preparing"
        | "out for delivery"
        | "received"
        | "reject"
      ordertype: "Delivery" | "Pick up"
      payment_method: "Visa" | "Super Visa"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
