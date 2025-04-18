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
      articles: {
        Row: {
          article_link: string | null
          date_added: string | null
          id: number
          published: string | null
          read_time: number | null
          summary: string | null
          tags: Json | null
          title: string | null
        }
        Insert: {
          article_link?: string | null
          date_added?: string | null
          id: number
          published?: string | null
          read_time?: number | null
          summary?: string | null
          tags?: Json | null
          title?: string | null
        }
        Update: {
          article_link?: string | null
          date_added?: string | null
          id?: number
          published?: string | null
          read_time?: number | null
          summary?: string | null
          tags?: Json | null
          title?: string | null
        }
        Relationships: []
      }
      panels: {
        Row: {
          AdditionalCopyright: string | null
          AllowableAlternative: number | null
          AnswerCardinality: string | null
          AnswerListIdOverride: string | null
          AnswerListTypeOverride: string | null
          AnswerSequenceOverride: string | null
          AskAtOrderEntry: string | null
          AssociatedObservations: string | null
          CHANGE_REASON_PUBLIC: string | null
          CHNG_TYPE: string | null
          CLASS: string | null
          CLASSTYPE: number | null
          CodingInstructions: string | null
          COMMON_ORDER_RANK: number | null
          COMMON_TEST_RANK: number | null
          COMPONENT: string | null
          ConditionForInclusion: string | null
          ConsistencyChecks: string | null
          CONSUMER_NAME: number | null
          Context: string | null
          DataTypeInForm: string | null
          DataTypeSource: number | null
          DefaultValue: number | null
          DefinitionDescription: string | null
          description: string | null
          DisplayName: string | null
          DisplayNameForForm: string | null
          EntryType: string | null
          EXAMPLE_UCUM_UNITS: string | null
          EXAMPLE_UNITS: string | null
          EXMPL_ANSWERS: string | null
          EXTERNAL_COPYRIGHT_LINK: string | null
          EXTERNAL_COPYRIGHT_NOTICE_x: string | null
          EXTERNAL_COPYRIGHT_NOTICE_y: string | null
          FORMULA: string | null
          hidden: boolean | null
          HL7_ATTACHMENT_STRUCTURE: string | null
          HL7_FIELD_SUBFIELD_ID: string | null
          ID: number
          Loinc: string | null
          LOINC_NUM: string | null
          LoincName: string | null
          LONG_COMMON_NAME: string | null
          METHOD_TYP: string | null
          ObservationCategory: number | null
          ObservationIdInForm: string | null
          ObservationRequiredInPanel: string | null
          ORDER_OBS: string | null
          PanelType: string | null
          ParentId: number | null
          ParentLoinc: string | null
          ParentName: string | null
          PROPERTY: string | null
          QuestionCardinality: string | null
          RELATEDNAMES2: string | null
          RelevanceEquation: string | null
          SCALE_TYP: string | null
          SEQUENCE: number | null
          SHORTNAME: string | null
          SkipLogicHelpText: string | null
          STATUS: string | null
          STATUS_REASON: string | null
          STATUS_TEXT: string | null
          SURVEY_QUEST_SRC: string | null
          SURVEY_QUEST_TEXT: string | null
          SYSTEM: string | null
          TIME_ASPCT: string | null
          UNITSREQUIRED: string | null
          ValidHL7AttachmentRequest: string | null
          VersionFirstReleased: string | null
          VersionLastChanged: string | null
        }
        Insert: {
          AdditionalCopyright?: string | null
          AllowableAlternative?: number | null
          AnswerCardinality?: string | null
          AnswerListIdOverride?: string | null
          AnswerListTypeOverride?: string | null
          AnswerSequenceOverride?: string | null
          AskAtOrderEntry?: string | null
          AssociatedObservations?: string | null
          CHANGE_REASON_PUBLIC?: string | null
          CHNG_TYPE?: string | null
          CLASS?: string | null
          CLASSTYPE?: number | null
          CodingInstructions?: string | null
          COMMON_ORDER_RANK?: number | null
          COMMON_TEST_RANK?: number | null
          COMPONENT?: string | null
          ConditionForInclusion?: string | null
          ConsistencyChecks?: string | null
          CONSUMER_NAME?: number | null
          Context?: string | null
          DataTypeInForm?: string | null
          DataTypeSource?: number | null
          DefaultValue?: number | null
          DefinitionDescription?: string | null
          description?: string | null
          DisplayName?: string | null
          DisplayNameForForm?: string | null
          EntryType?: string | null
          EXAMPLE_UCUM_UNITS?: string | null
          EXAMPLE_UNITS?: string | null
          EXMPL_ANSWERS?: string | null
          EXTERNAL_COPYRIGHT_LINK?: string | null
          EXTERNAL_COPYRIGHT_NOTICE_x?: string | null
          EXTERNAL_COPYRIGHT_NOTICE_y?: string | null
          FORMULA?: string | null
          hidden?: boolean | null
          HL7_ATTACHMENT_STRUCTURE?: string | null
          HL7_FIELD_SUBFIELD_ID?: string | null
          ID: number
          Loinc?: string | null
          LOINC_NUM?: string | null
          LoincName?: string | null
          LONG_COMMON_NAME?: string | null
          METHOD_TYP?: string | null
          ObservationCategory?: number | null
          ObservationIdInForm?: string | null
          ObservationRequiredInPanel?: string | null
          ORDER_OBS?: string | null
          PanelType?: string | null
          ParentId?: number | null
          ParentLoinc?: string | null
          ParentName?: string | null
          PROPERTY?: string | null
          QuestionCardinality?: string | null
          RELATEDNAMES2?: string | null
          RelevanceEquation?: string | null
          SCALE_TYP?: string | null
          SEQUENCE?: number | null
          SHORTNAME?: string | null
          SkipLogicHelpText?: string | null
          STATUS?: string | null
          STATUS_REASON?: string | null
          STATUS_TEXT?: string | null
          SURVEY_QUEST_SRC?: string | null
          SURVEY_QUEST_TEXT?: string | null
          SYSTEM?: string | null
          TIME_ASPCT?: string | null
          UNITSREQUIRED?: string | null
          ValidHL7AttachmentRequest?: string | null
          VersionFirstReleased?: string | null
          VersionLastChanged?: string | null
        }
        Update: {
          AdditionalCopyright?: string | null
          AllowableAlternative?: number | null
          AnswerCardinality?: string | null
          AnswerListIdOverride?: string | null
          AnswerListTypeOverride?: string | null
          AnswerSequenceOverride?: string | null
          AskAtOrderEntry?: string | null
          AssociatedObservations?: string | null
          CHANGE_REASON_PUBLIC?: string | null
          CHNG_TYPE?: string | null
          CLASS?: string | null
          CLASSTYPE?: number | null
          CodingInstructions?: string | null
          COMMON_ORDER_RANK?: number | null
          COMMON_TEST_RANK?: number | null
          COMPONENT?: string | null
          ConditionForInclusion?: string | null
          ConsistencyChecks?: string | null
          CONSUMER_NAME?: number | null
          Context?: string | null
          DataTypeInForm?: string | null
          DataTypeSource?: number | null
          DefaultValue?: number | null
          DefinitionDescription?: string | null
          description?: string | null
          DisplayName?: string | null
          DisplayNameForForm?: string | null
          EntryType?: string | null
          EXAMPLE_UCUM_UNITS?: string | null
          EXAMPLE_UNITS?: string | null
          EXMPL_ANSWERS?: string | null
          EXTERNAL_COPYRIGHT_LINK?: string | null
          EXTERNAL_COPYRIGHT_NOTICE_x?: string | null
          EXTERNAL_COPYRIGHT_NOTICE_y?: string | null
          FORMULA?: string | null
          hidden?: boolean | null
          HL7_ATTACHMENT_STRUCTURE?: string | null
          HL7_FIELD_SUBFIELD_ID?: string | null
          ID?: number
          Loinc?: string | null
          LOINC_NUM?: string | null
          LoincName?: string | null
          LONG_COMMON_NAME?: string | null
          METHOD_TYP?: string | null
          ObservationCategory?: number | null
          ObservationIdInForm?: string | null
          ObservationRequiredInPanel?: string | null
          ORDER_OBS?: string | null
          PanelType?: string | null
          ParentId?: number | null
          ParentLoinc?: string | null
          ParentName?: string | null
          PROPERTY?: string | null
          QuestionCardinality?: string | null
          RELATEDNAMES2?: string | null
          RelevanceEquation?: string | null
          SCALE_TYP?: string | null
          SEQUENCE?: number | null
          SHORTNAME?: string | null
          SkipLogicHelpText?: string | null
          STATUS?: string | null
          STATUS_REASON?: string | null
          STATUS_TEXT?: string | null
          SURVEY_QUEST_SRC?: string | null
          SURVEY_QUEST_TEXT?: string | null
          SYSTEM?: string | null
          TIME_ASPCT?: string | null
          UNITSREQUIRED?: string | null
          ValidHL7AttachmentRequest?: string | null
          VersionFirstReleased?: string | null
          VersionLastChanged?: string | null
        }
        Relationships: []
      }
      pinned: {
        Row: {
          ID: number
        }
        Insert: {
          ID: number
        }
        Update: {
          ID?: number
        }
        Relationships: [
          {
            foreignKeyName: "pinned_ID_fkey"
            columns: ["ID"]
            isOneToOne: true
            referencedRelation: "panels"
            referencedColumns: ["ID"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
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
