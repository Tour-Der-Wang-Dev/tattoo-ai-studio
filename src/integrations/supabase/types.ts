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
      artist_chat_messages: {
        Row: {
          chat_room_id: string | null
          created_at: string
          file_url: string | null
          id: string
          message_text: string | null
          message_type: string | null
          sender_id: string | null
          thread_id: string | null
        }
        Insert: {
          chat_room_id?: string | null
          created_at?: string
          file_url?: string | null
          id?: string
          message_text?: string | null
          message_type?: string | null
          sender_id?: string | null
          thread_id?: string | null
        }
        Update: {
          chat_room_id?: string | null
          created_at?: string
          file_url?: string | null
          id?: string
          message_text?: string | null
          message_type?: string | null
          sender_id?: string | null
          thread_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "artist_chat_messages_chat_room_id_fkey"
            columns: ["chat_room_id"]
            isOneToOne: false
            referencedRelation: "artist_chat_rooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "artist_chat_messages_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "artist_chat_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      artist_chat_rooms: {
        Row: {
          artist_id: string | null
          booking_request_id: string | null
          client_id: string | null
          created_at: string
          id: string
          is_active: boolean | null
        }
        Insert: {
          artist_id?: string | null
          booking_request_id?: string | null
          client_id?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
        }
        Update: {
          artist_id?: string | null
          booking_request_id?: string | null
          client_id?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "artist_chat_rooms_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artist_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "artist_chat_rooms_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artist_rankings_mv"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "artist_chat_rooms_booking_request_id_fkey"
            columns: ["booking_request_id"]
            isOneToOne: false
            referencedRelation: "booking_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      artist_portfolios: {
        Row: {
          artist_id: string | null
          before_image_url: string | null
          body_part: string | null
          collaboration_type: string | null
          created_at: string
          description: string | null
          display_order: number | null
          id: string
          image_url: string
          is_featured: boolean | null
          metadata: Json | null
          process_steps: Json | null
          style: string | null
          title: string
        }
        Insert: {
          artist_id?: string | null
          before_image_url?: string | null
          body_part?: string | null
          collaboration_type?: string | null
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          image_url: string
          is_featured?: boolean | null
          metadata?: Json | null
          process_steps?: Json | null
          style?: string | null
          title: string
        }
        Update: {
          artist_id?: string | null
          before_image_url?: string | null
          body_part?: string | null
          collaboration_type?: string | null
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          image_url?: string
          is_featured?: boolean | null
          metadata?: Json | null
          process_steps?: Json | null
          style?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "artist_portfolios_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artist_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "artist_portfolios_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artist_rankings_mv"
            referencedColumns: ["id"]
          },
        ]
      }
      artist_profiles: {
        Row: {
          availability_settings: Json | null
          average_rating: number | null
          bio: string | null
          completed_projects: number | null
          created_at: string
          hourly_rate: number | null
          id: string
          is_verified: boolean | null
          portfolio_images: string[] | null
          professional_tier: string | null
          response_time_hours: number | null
          social_links: Json | null
          specializations: string[] | null
          total_reviews: number | null
          updated_at: string
          user_id: string | null
          verification_date: string | null
          verification_level: string | null
        }
        Insert: {
          availability_settings?: Json | null
          average_rating?: number | null
          bio?: string | null
          completed_projects?: number | null
          created_at?: string
          hourly_rate?: number | null
          id?: string
          is_verified?: boolean | null
          portfolio_images?: string[] | null
          professional_tier?: string | null
          response_time_hours?: number | null
          social_links?: Json | null
          specializations?: string[] | null
          total_reviews?: number | null
          updated_at?: string
          user_id?: string | null
          verification_date?: string | null
          verification_level?: string | null
        }
        Update: {
          availability_settings?: Json | null
          average_rating?: number | null
          bio?: string | null
          completed_projects?: number | null
          created_at?: string
          hourly_rate?: number | null
          id?: string
          is_verified?: boolean | null
          portfolio_images?: string[] | null
          professional_tier?: string | null
          response_time_hours?: number | null
          social_links?: Json | null
          specializations?: string[] | null
          total_reviews?: number | null
          updated_at?: string
          user_id?: string | null
          verification_date?: string | null
          verification_level?: string | null
        }
        Relationships: []
      }
      artist_reviews: {
        Row: {
          artist_id: string | null
          client_id: string | null
          created_at: string
          design_id: string | null
          id: string
          is_verified: boolean | null
          rating: number | null
          review_images: string[] | null
          review_text: string | null
        }
        Insert: {
          artist_id?: string | null
          client_id?: string | null
          created_at?: string
          design_id?: string | null
          id?: string
          is_verified?: boolean | null
          rating?: number | null
          review_images?: string[] | null
          review_text?: string | null
        }
        Update: {
          artist_id?: string | null
          client_id?: string | null
          created_at?: string
          design_id?: string | null
          id?: string
          is_verified?: boolean | null
          rating?: number | null
          review_images?: string[] | null
          review_text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "artist_reviews_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artist_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "artist_reviews_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artist_rankings_mv"
            referencedColumns: ["id"]
          },
        ]
      }
      artist_skills: {
        Row: {
          artist_id: string | null
          certification_url: string | null
          created_at: string
          id: string
          proficiency_level: number | null
          skill_name: string
          years_experience: number | null
        }
        Insert: {
          artist_id?: string | null
          certification_url?: string | null
          created_at?: string
          id?: string
          proficiency_level?: number | null
          skill_name: string
          years_experience?: number | null
        }
        Update: {
          artist_id?: string | null
          certification_url?: string | null
          created_at?: string
          id?: string
          proficiency_level?: number | null
          skill_name?: string
          years_experience?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "artist_skills_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artist_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "artist_skills_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artist_rankings_mv"
            referencedColumns: ["id"]
          },
        ]
      }
      booking_requests: {
        Row: {
          artist_id: string | null
          booking_slot_id: string | null
          client_id: string | null
          created_at: string
          design_id: string | null
          id: string
          preferred_dates: string[] | null
          session_type: string
          special_requests: string | null
          status: string | null
          total_price: number | null
          updated_at: string
        }
        Insert: {
          artist_id?: string | null
          booking_slot_id?: string | null
          client_id?: string | null
          created_at?: string
          design_id?: string | null
          id?: string
          preferred_dates?: string[] | null
          session_type: string
          special_requests?: string | null
          status?: string | null
          total_price?: number | null
          updated_at?: string
        }
        Update: {
          artist_id?: string | null
          booking_slot_id?: string | null
          client_id?: string | null
          created_at?: string
          design_id?: string | null
          id?: string
          preferred_dates?: string[] | null
          session_type?: string
          special_requests?: string | null
          status?: string | null
          total_price?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "booking_requests_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artist_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_requests_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artist_rankings_mv"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_requests_booking_slot_id_fkey"
            columns: ["booking_slot_id"]
            isOneToOne: false
            referencedRelation: "booking_slots"
            referencedColumns: ["id"]
          },
        ]
      }
      booking_slots: {
        Row: {
          artist_id: string | null
          created_at: string
          end_time: string
          id: string
          is_available: boolean | null
          notes: string | null
          price: number | null
          session_type: string | null
          start_time: string
        }
        Insert: {
          artist_id?: string | null
          created_at?: string
          end_time: string
          id?: string
          is_available?: boolean | null
          notes?: string | null
          price?: number | null
          session_type?: string | null
          start_time: string
        }
        Update: {
          artist_id?: string | null
          created_at?: string
          end_time?: string
          id?: string
          is_available?: boolean | null
          notes?: string | null
          price?: number | null
          session_type?: string | null
          start_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "booking_slots_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artist_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_slots_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artist_rankings_mv"
            referencedColumns: ["id"]
          },
        ]
      }
      collection_images: {
        Row: {
          added_at: string
          collection_id: string
          id: string
          image_id: string
          position: number | null
        }
        Insert: {
          added_at?: string
          collection_id: string
          id?: string
          image_id: string
          position?: number | null
        }
        Update: {
          added_at?: string
          collection_id?: string
          id?: string
          image_id?: string
          position?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "collection_images_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collection_images_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "generated_images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collection_images_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "popular_images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collection_images_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "popular_images_mv"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_collection_images_collection"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_collection_images_image"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "generated_images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_collection_images_image"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "popular_images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_collection_images_image"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "popular_images_mv"
            referencedColumns: ["id"]
          },
        ]
      }
      collections: {
        Row: {
          cover_image_id: string | null
          created_at: string
          description: string | null
          id: string
          is_public: boolean
          metadata: Json | null
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          cover_image_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_public?: boolean
          metadata?: Json | null
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          cover_image_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_public?: boolean
          metadata?: Json | null
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "collections_cover_image_id_fkey"
            columns: ["cover_image_id"]
            isOneToOne: false
            referencedRelation: "generated_images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collections_cover_image_id_fkey"
            columns: ["cover_image_id"]
            isOneToOne: false
            referencedRelation: "popular_images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collections_cover_image_id_fkey"
            columns: ["cover_image_id"]
            isOneToOne: false
            referencedRelation: "popular_images_mv"
            referencedColumns: ["id"]
          },
        ]
      }
      credit_transactions: {
        Row: {
          amount: number
          created_at: string
          description: string
          id: string
          metadata: Json | null
          reference_id: string | null
          reference_type: string | null
          transaction_type: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          description: string
          id?: string
          metadata?: Json | null
          reference_id?: string | null
          reference_type?: string | null
          transaction_type: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          description?: string
          id?: string
          metadata?: Json | null
          reference_id?: string | null
          reference_type?: string | null
          transaction_type?: string
          user_id?: string
        }
        Relationships: []
      }
      design_likes: {
        Row: {
          created_at: string | null
          design_id: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          design_id: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          design_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "design_likes_design_id_fkey"
            columns: ["design_id"]
            isOneToOne: false
            referencedRelation: "tattoo_designs"
            referencedColumns: ["id"]
          },
        ]
      }
      event_participants: {
        Row: {
          access_level: string | null
          event_id: string
          id: string
          joined_at: string | null
          participant_name: string | null
          user_id: string | null
        }
        Insert: {
          access_level?: string | null
          event_id: string
          id?: string
          joined_at?: string | null
          participant_name?: string | null
          user_id?: string | null
        }
        Update: {
          access_level?: string | null
          event_id?: string
          id?: string
          joined_at?: string | null
          participant_name?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_participants_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_photos: {
        Row: {
          caption: string | null
          event_id: string
          id: string
          image_url: string
          is_approved: boolean | null
          metadata: Json | null
          tags: string[] | null
          uploaded_at: string | null
          uploader_id: string | null
          uploader_name: string | null
        }
        Insert: {
          caption?: string | null
          event_id: string
          id?: string
          image_url: string
          is_approved?: boolean | null
          metadata?: Json | null
          tags?: string[] | null
          uploaded_at?: string | null
          uploader_id?: string | null
          uploader_name?: string | null
        }
        Update: {
          caption?: string | null
          event_id?: string
          id?: string
          image_url?: string
          is_approved?: boolean | null
          metadata?: Json | null
          tags?: string[] | null
          uploaded_at?: string | null
          uploader_id?: string | null
          uploader_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_photos_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          created_at: string | null
          description: string | null
          event_date: string | null
          id: string
          is_active: boolean | null
          location: string | null
          privacy_setting: string | null
          qr_code_data: string
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          event_date?: string | null
          id?: string
          is_active?: boolean | null
          location?: string | null
          privacy_setting?: string | null
          qr_code_data: string
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          event_date?: string | null
          id?: string
          is_active?: boolean | null
          location?: string | null
          privacy_setting?: string | null
          qr_code_data?: string
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      generated_images: {
        Row: {
          artistic_style: number | null
          commercial_usage_count: number | null
          composition_guide: string | null
          copyright_status: string | null
          created_at: string
          creativity: number | null
          credits_used: number
          download_count: number | null
          error_message: string | null
          generation_cost: number | null
          id: string
          image_url: string
          is_public: boolean | null
          license_expires_at: string | null
          licensing_type: string | null
          lighting_preset: string | null
          like_count: number | null
          metadata_hash: string | null
          model: string
          model_version: string | null
          mood: number | null
          parameters: Json | null
          processing_time_ms: number | null
          prompt: string
          replicate_prediction_id: string | null
          safety_rating: Json | null
          status: string | null
          style_preset: string | null
          user_id: string
          view_count: number | null
        }
        Insert: {
          artistic_style?: number | null
          commercial_usage_count?: number | null
          composition_guide?: string | null
          copyright_status?: string | null
          created_at?: string
          creativity?: number | null
          credits_used?: number
          download_count?: number | null
          error_message?: string | null
          generation_cost?: number | null
          id?: string
          image_url: string
          is_public?: boolean | null
          license_expires_at?: string | null
          licensing_type?: string | null
          lighting_preset?: string | null
          like_count?: number | null
          metadata_hash?: string | null
          model: string
          model_version?: string | null
          mood?: number | null
          parameters?: Json | null
          processing_time_ms?: number | null
          prompt: string
          replicate_prediction_id?: string | null
          safety_rating?: Json | null
          status?: string | null
          style_preset?: string | null
          user_id: string
          view_count?: number | null
        }
        Update: {
          artistic_style?: number | null
          commercial_usage_count?: number | null
          composition_guide?: string | null
          copyright_status?: string | null
          created_at?: string
          creativity?: number | null
          credits_used?: number
          download_count?: number | null
          error_message?: string | null
          generation_cost?: number | null
          id?: string
          image_url?: string
          is_public?: boolean | null
          license_expires_at?: string | null
          licensing_type?: string | null
          lighting_preset?: string | null
          like_count?: number | null
          metadata_hash?: string | null
          model?: string
          model_version?: string | null
          mood?: number | null
          parameters?: Json | null
          processing_time_ms?: number | null
          prompt?: string
          replicate_prediction_id?: string | null
          safety_rating?: Json | null
          status?: string | null
          style_preset?: string | null
          user_id?: string
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "generated_images_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      generation_sessions: {
        Row: {
          failed_generations: number | null
          id: string
          metadata: Json | null
          session_end: string | null
          session_start: string
          successful_generations: number | null
          total_credits_used: number | null
          total_generations: number | null
          user_id: string | null
        }
        Insert: {
          failed_generations?: number | null
          id?: string
          metadata?: Json | null
          session_end?: string | null
          session_start?: string
          successful_generations?: number | null
          total_credits_used?: number | null
          total_generations?: number | null
          user_id?: string | null
        }
        Update: {
          failed_generations?: number | null
          id?: string
          metadata?: Json | null
          session_end?: string | null
          session_start?: string
          successful_generations?: number | null
          total_credits_used?: number | null
          total_generations?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      image_interactions: {
        Row: {
          created_at: string
          id: string
          image_id: string
          interaction_type: string
          metadata: Json | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          image_id: string
          interaction_type: string
          metadata?: Json | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          image_id?: string
          interaction_type?: string
          metadata?: Json | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_image_interactions_image"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "generated_images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_image_interactions_image"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "popular_images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_image_interactions_image"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "popular_images_mv"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "image_interactions_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "generated_images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "image_interactions_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "popular_images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "image_interactions_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "popular_images_mv"
            referencedColumns: ["id"]
          },
        ]
      }
      markdown_history: {
        Row: {
          created_at: string
          html: string
          id: number
          markdown: string
        }
        Insert: {
          created_at?: string
          html: string
          id?: never
          markdown: string
        }
        Update: {
          created_at?: string
          html?: string
          id?: never
          markdown?: string
        }
        Relationships: []
      }
      model_performance: {
        Row: {
          avg_processing_time: number | null
          id: string
          model_id: string
          success_rate: number | null
          total_generations: number | null
          updated_at: string | null
          user_satisfaction: number | null
        }
        Insert: {
          avg_processing_time?: number | null
          id?: string
          model_id: string
          success_rate?: number | null
          total_generations?: number | null
          updated_at?: string | null
          user_satisfaction?: number | null
        }
        Update: {
          avg_processing_time?: number | null
          id?: string
          model_id?: string
          success_rate?: number | null
          total_generations?: number | null
          updated_at?: string | null
          user_satisfaction?: number | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string | null
          event_id: string | null
          id: string
          is_read: boolean | null
          message: string
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          title: string
          type: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          event_id?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      photo_downloads: {
        Row: {
          downloaded_at: string | null
          downloader_id: string | null
          downloader_name: string | null
          id: string
          photo_id: string
        }
        Insert: {
          downloaded_at?: string | null
          downloader_id?: string | null
          downloader_name?: string | null
          id?: string
          photo_id: string
        }
        Update: {
          downloaded_at?: string | null
          downloader_id?: string | null
          downloader_name?: string | null
          id?: string
          photo_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "photo_downloads_photo_id_fkey"
            columns: ["photo_id"]
            isOneToOne: false
            referencedRelation: "event_photos"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          full_name: string | null
          id: string
          is_verified: boolean | null
          preferences: Json | null
          social_links: Json | null
          subscription_id: string | null
          updated_at: string
          username: string | null
          website_url: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          is_verified?: boolean | null
          preferences?: Json | null
          social_links?: Json | null
          subscription_id?: string | null
          updated_at?: string
          username?: string | null
          website_url?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          is_verified?: boolean | null
          preferences?: Json | null
          social_links?: Json | null
          subscription_id?: string | null
          updated_at?: string
          username?: string | null
          website_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      prompt_library: {
        Row: {
          category: string | null
          created_at: string
          id: string
          is_public: boolean | null
          prompt: string
          tags: string[] | null
          title: string
          user_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: string
          is_public?: boolean | null
          prompt: string
          tags?: string[] | null
          title: string
          user_id: string
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: string
          is_public?: boolean | null
          prompt?: string
          tags?: string[] | null
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "prompt_library_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      quality_assessments: {
        Row: {
          artistic_score: number | null
          assessed_by: string | null
          created_at: string | null
          id: string
          image_id: string | null
          overall_score: number | null
          technical_score: number | null
        }
        Insert: {
          artistic_score?: number | null
          assessed_by?: string | null
          created_at?: string | null
          id?: string
          image_id?: string | null
          overall_score?: number | null
          technical_score?: number | null
        }
        Update: {
          artistic_score?: number | null
          assessed_by?: string | null
          created_at?: string | null
          id?: string
          image_id?: string | null
          overall_score?: number | null
          technical_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_quality_assessments_image"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "generated_images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_quality_assessments_image"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "popular_images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_quality_assessments_image"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "popular_images_mv"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quality_assessments_assessed_by_fkey"
            columns: ["assessed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quality_assessments_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "generated_images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quality_assessments_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "popular_images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quality_assessments_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "popular_images_mv"
            referencedColumns: ["id"]
          },
        ]
      }
      subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          stripe_customer_id: string | null
          subscribed: boolean
          subscription_end: string | null
          subscription_tier: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          api_access: boolean | null
          cancel_at_period_end: boolean
          created_at: string
          current_period_end: string
          current_period_start: string
          custom_branding: Json | null
          features: Json | null
          id: string
          metadata: Json | null
          plan_type: string
          priority_support: boolean | null
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          team_size_limit: number | null
          updated_at: string
          user_id: string
          white_label: boolean | null
        }
        Insert: {
          api_access?: boolean | null
          cancel_at_period_end?: boolean
          created_at?: string
          current_period_end: string
          current_period_start: string
          custom_branding?: Json | null
          features?: Json | null
          id?: string
          metadata?: Json | null
          plan_type: string
          priority_support?: boolean | null
          status: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          team_size_limit?: number | null
          updated_at?: string
          user_id: string
          white_label?: boolean | null
        }
        Update: {
          api_access?: boolean | null
          cancel_at_period_end?: boolean
          created_at?: string
          current_period_end?: string
          current_period_start?: string
          custom_branding?: Json | null
          features?: Json | null
          id?: string
          metadata?: Json | null
          plan_type?: string
          priority_support?: boolean | null
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          team_size_limit?: number | null
          updated_at?: string
          user_id?: string
          white_label?: boolean | null
        }
        Relationships: []
      }
      tattoo_designs: {
        Row: {
          body_part: string | null
          color_scheme: string | null
          created_at: string | null
          description: string | null
          id: string
          image_url: string
          is_public: boolean | null
          likes_count: number | null
          prompt: string | null
          size_category: string | null
          style: string | null
          title: string
          updated_at: string | null
          user_id: string
          views_count: number | null
        }
        Insert: {
          body_part?: string | null
          color_scheme?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url: string
          is_public?: boolean | null
          likes_count?: number | null
          prompt?: string | null
          size_category?: string | null
          style?: string | null
          title: string
          updated_at?: string | null
          user_id: string
          views_count?: number | null
        }
        Update: {
          body_part?: string | null
          color_scheme?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string
          is_public?: boolean | null
          likes_count?: number | null
          prompt?: string | null
          size_category?: string | null
          style?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string
          views_count?: number | null
        }
        Relationships: []
      }
      teams: {
        Row: {
          created_at: string | null
          id: string
          name: string
          owner_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          owner_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          owner_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teams_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      usage_analytics: {
        Row: {
          created_at: string
          event_data: Json
          event_type: string
          id: string
          ip_address: unknown | null
          processed: boolean
          session_id: string | null
          user_agent: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          event_data?: Json
          event_type: string
          id?: string
          ip_address?: unknown | null
          processed?: boolean
          session_id?: string | null
          user_agent?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          event_data?: Json
          event_type?: string
          id?: string
          ip_address?: unknown | null
          processed?: boolean
          session_id?: string | null
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
      usage_analytics_archive: {
        Row: {
          created_at: string
          event_data: Json
          event_type: string
          id: string
          ip_address: unknown | null
          processed: boolean
          session_id: string | null
          user_agent: string | null
          user_id: string
        }
        Insert: {
          created_at: string
          event_data: Json
          event_type: string
          id: string
          ip_address?: unknown | null
          processed: boolean
          session_id?: string | null
          user_agent?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          event_data?: Json
          event_type?: string
          id?: string
          ip_address?: unknown | null
          processed?: boolean
          session_id?: string | null
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_credits: {
        Row: {
          bonus_credits: number | null
          bonus_expiry: string | null
          created_at: string
          credits_remaining: number
          credits_used: number
          daily_limit: number | null
          enterprise_credits: number | null
          id: string
          lifetime_credits_used: number | null
          monthly_limit: number | null
          plan_type: string
          priority_queue: boolean | null
          reset_date: string | null
          updated_at: string
          usage_tier: string | null
          user_id: string
          wedding_credits_remaining: number | null
          wedding_credits_used: number | null
        }
        Insert: {
          bonus_credits?: number | null
          bonus_expiry?: string | null
          created_at?: string
          credits_remaining?: number
          credits_used?: number
          daily_limit?: number | null
          enterprise_credits?: number | null
          id?: string
          lifetime_credits_used?: number | null
          monthly_limit?: number | null
          plan_type?: string
          priority_queue?: boolean | null
          reset_date?: string | null
          updated_at?: string
          usage_tier?: string | null
          user_id: string
          wedding_credits_remaining?: number | null
          wedding_credits_used?: number | null
        }
        Update: {
          bonus_credits?: number | null
          bonus_expiry?: string | null
          created_at?: string
          credits_remaining?: number
          credits_used?: number
          daily_limit?: number | null
          enterprise_credits?: number | null
          id?: string
          lifetime_credits_used?: number | null
          monthly_limit?: number | null
          plan_type?: string
          priority_queue?: boolean | null
          reset_date?: string | null
          updated_at?: string
          usage_tier?: string | null
          user_id?: string
          wedding_credits_remaining?: number | null
          wedding_credits_used?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "user_credits_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      wedding_favorites: {
        Row: {
          created_at: string
          id: string
          image_url: string
          session_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          image_url: string
          session_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string
          session_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wedding_favorites_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "wedding_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      wedding_sessions: {
        Row: {
          created_at: string
          credits_used: number | null
          generated_photos: string[] | null
          id: string
          metadata: Json | null
          original_photos: string[] | null
          session_name: string
          status: string
          style_preset: string
          total_photos: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          credits_used?: number | null
          generated_photos?: string[] | null
          id?: string
          metadata?: Json | null
          original_photos?: string[] | null
          session_name: string
          status?: string
          style_preset?: string
          total_photos?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          credits_used?: number | null
          generated_photos?: string[] | null
          id?: string
          metadata?: Json | null
          original_photos?: string[] | null
          session_name?: string
          status?: string
          style_preset?: string
          total_photos?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      wedding_styles: {
        Row: {
          created_at: string
          credits_cost: number
          description: string | null
          display_name: string
          id: string
          is_premium: boolean | null
          name: string
          preview_image_url: string | null
          style_prompt: string
        }
        Insert: {
          created_at?: string
          credits_cost?: number
          description?: string | null
          display_name: string
          id?: string
          is_premium?: boolean | null
          name: string
          preview_image_url?: string | null
          style_prompt: string
        }
        Update: {
          created_at?: string
          credits_cost?: number
          description?: string | null
          display_name?: string
          id?: string
          is_premium?: boolean | null
          name?: string
          preview_image_url?: string | null
          style_prompt?: string
        }
        Relationships: []
      }
    }
    Views: {
      artist_rankings_mv: {
        Row: {
          availability_settings: Json | null
          avatar_url: string | null
          average_rating: number | null
          bio: string | null
          completed_count: number | null
          completed_projects: number | null
          created_at: string | null
          full_name: string | null
          hourly_rate: number | null
          id: string | null
          is_verified: boolean | null
          portfolio_count: number | null
          portfolio_images: string[] | null
          professional_tier: string | null
          ranking_score: number | null
          response_time_hours: number | null
          review_count: number | null
          social_links: Json | null
          specializations: string[] | null
          total_reviews: number | null
          updated_at: string | null
          user_id: string | null
          verification_date: string | null
          verification_level: string | null
        }
        Relationships: []
      }
      popular_images: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          credits_used: number | null
          download_count: number | null
          error_message: string | null
          id: string | null
          image_url: string | null
          is_public: boolean | null
          like_count: number | null
          model: string | null
          parameters: Json | null
          processing_time_ms: number | null
          prompt: string | null
          safety_rating: Json | null
          status: string | null
          user_id: string | null
          username: string | null
          view_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "generated_images_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      popular_images_mv: {
        Row: {
          artistic_style: number | null
          commercial_usage_count: number | null
          composition_guide: string | null
          copyright_status: string | null
          created_at: string | null
          creativity: number | null
          credits_used: number | null
          download_count: number | null
          error_message: string | null
          generation_cost: number | null
          id: string | null
          image_url: string | null
          is_public: boolean | null
          license_expires_at: string | null
          licensing_type: string | null
          lighting_preset: string | null
          like_count: number | null
          metadata_hash: string | null
          model: string | null
          model_version: string | null
          mood: number | null
          parameters: Json | null
          popularity_score: number | null
          processing_time_ms: number | null
          prompt: string | null
          replicate_prediction_id: string | null
          safety_rating: Json | null
          status: string | null
          style_preset: string | null
          total_downloads: number | null
          total_likes: number | null
          total_views: number | null
          user_id: string | null
          view_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "generated_images_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      calculate_image_popularity: {
        Args: { image_id: string }
        Returns: number
      }
      deduct_credits: {
        Args: { user_id: string; credits_to_deduct: number }
        Returns: boolean
      }
      deduct_credits_v2: {
        Args: {
          user_id: string
          credits_to_deduct: number
          description?: string
          reference_id?: string
          reference_type?: string
        }
        Returns: boolean
      }
      deduct_wedding_credits: {
        Args: {
          user_id: string
          credits_to_deduct: number
          session_id?: string
        }
        Returns: boolean
      }
      generate_qr_code_data: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      refresh_analytics_views: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      refresh_popular_images: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      track_usage: {
        Args: {
          user_id: string
          event_type: string
          event_data?: Json
          session_id?: string
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
