import { CrewRank } from "./crew-rank"

export interface Crew {
  firstname?: string
  lastname?: string
  number?: string
  rank?: CrewRank
  rosterDesignator?: string
}
