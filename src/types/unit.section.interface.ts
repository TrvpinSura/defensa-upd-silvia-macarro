
export type UnitSectionId = "introduction" | "context" | "curricular-elements" | "structure" | "diversity" | "coordination" | "conclusion" | "bibliographic";

export interface UnitSection {
  id: string;
  label: string;
  icon: string;
  color: string;
}