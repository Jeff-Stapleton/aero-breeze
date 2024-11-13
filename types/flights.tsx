import { FlightStatus } from './flight-status'
import { AircraftType } from './aircraft-type'
import { Crew } from './crew'

export interface Flight {
  uniqueId?: string
  status: FlightStatus
  reportTime?: string
  actualArrivalAirport?: string
  actualDepartureAirport?: string
  departureGate?: string
  arrivalGate?: string
  flightDate?: string
  flightNumber?: string
  tailNumber?: string
  offsetAa?: string
  offsetDa?: string
  scheduledArrivalAirport?: string
  scheduledDepartureAirport?: string
  sta?: string
  staLocal?: string
  std?: string
  stdLocal?: string
  aircraftType?: AircraftType
  crew?: Crew[]
  estimatedTimes?: {
    estimatedBlockOff?: string
    estimatedTakeOff?: string
    estimatedTouchDown?: string
    estimatedBlockOn?: string
  }
  actualTimes?: {
    actualBlockOff?: string
    actualTakeOff?: string
    actualTouchDown?: string
    actualBlockOn?: string
  }
  starFlight?: boolean
  desk?: string
  canceled?: boolean
  flightType?: string
}
