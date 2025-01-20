export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      booking: {
        Row: {
          booking_date: string | null;
          created_at: string;
          id: number;
          tour_id: number | null;
          user_id: string | null;
        };
        Insert: {
          booking_date?: string | null;
          created_at?: string;
          id?: number;
          tour_id?: number | null;
          user_id?: string | null;
        };
        Update: {
          booking_date?: string | null;
          created_at?: string;
          id?: number;
          tour_id?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "booking_tour_id_fkey";
            columns: ["tour_id"];
            isOneToOne: false;
            referencedRelation: "tours";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "booking_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      favourite: {
        Row: {
          created_at: string;
          id: number;
          tour_id: number | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          tour_id?: number | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          tour_id?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "favotite_table_tour_id_fkey";
            columns: ["tour_id"];
            isOneToOne: false;
            referencedRelation: "tours";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "favotite_table_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      feedback: {
        Row: {
          comment: string | null;
          created_at: string;
          id: number;
          stars: number | null;
          tour_id: number | null;
          user_id: string | null;
        };
        Insert: {
          comment?: string | null;
          created_at?: string;
          id?: number;
          stars?: number | null;
          tour_id?: number | null;
          user_id?: string | null;
        };
        Update: {
          comment?: string | null;
          created_at?: string;
          id?: number;
          stars?: number | null;
          tour_id?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "feedback_tour_id_fkey";
            columns: ["tour_id"];
            isOneToOne: false;
            referencedRelation: "tours";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "feedback_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      gallery: {
        Row: {
          id: number;
          image_url: string | null;
        };
        Insert: {
          id?: number;
          image_url?: string | null;
        };
        Update: {
          id?: number;
          image_url?: string | null;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          admin: boolean | null;
          avatar_url: string | null;
          full_name: string | null;
          id: string;
          name_en: string | null;
          name_ka: string | null;
          phone: string | null;
          points: number | null;
          quiz_completed: boolean | null;
          surname_en: string | null;
          surname_ka: string | null;
          type: string | null;
          updated_at: string | null;
          username: string | null;
        };
        Insert: {
          admin?: boolean | null;
          avatar_url?: string | null;
          full_name?: string | null;
          id: string;
          name_en?: string | null;
          name_ka?: string | null;
          phone?: string | null;
          points?: number | null;
          quiz_completed?: boolean | null;
          surname_en?: string | null;
          surname_ka?: string | null;
          type?: string | null;
          updated_at?: string | null;
          username?: string | null;
        };
        Update: {
          admin?: boolean | null;
          avatar_url?: string | null;
          full_name?: string | null;
          id?: string;
          name_en?: string | null;
          name_ka?: string | null;
          phone?: string | null;
          points?: number | null;
          quiz_completed?: boolean | null;
          surname_en?: string | null;
          surname_ka?: string | null;
          type?: string | null;
          updated_at?: string | null;
          username?: string | null;
        };
        Relationships: [];
      };
      tours: {
        Row: {
          airport: string | null;
          city: string | null;
          country: string | null;
          created_at: string;
          description: string | null;
          duration: number | null;
          hotel: string | null;
          id: number;
          img: string | null;
          location: string | null;
          price: number | null;
          tourName: string | null;
          type: string | null;
        };
        Insert: {
          airport?: string | null;
          city?: string | null;
          country?: string | null;
          created_at?: string;
          description?: string | null;
          duration?: number | null;
          hotel?: string | null;
          id?: number;
          img?: string | null;
          location?: string | null;
          price?: number | null;
          tourName?: string | null;
          type?: string | null;
        };
        Update: {
          airport?: string | null;
          city?: string | null;
          country?: string | null;
          created_at?: string;
          description?: string | null;
          duration?: number | null;
          hotel?: string | null;
          id?: number;
          img?: string | null;
          location?: string | null;
          price?: number | null;
          tourName?: string | null;
          type?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

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
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

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
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;
