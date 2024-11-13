import React, { useState } from 'react';
import { Flight } from '@/types/flights';
import { format } from 'date-fns';
import { ChevronRight } from 'lucide-react-native';
import { MOCK_FLIGHTS } from '@/mock/flights';
import { TableTabContainer, TableTab } from '@/components/table-tab';
import Select from '@/components/select';

type Direction = 'departure' | 'arrival'

export const formatLocalDatetimeString = (str?: string, dateFmt = 'MMM dd, yyyy', timeFmt = 'hh:mm a') => {
  if (!str) {
    return ''
  }

  const dateTime = new Date(str)
  const formattedDate = format(dateTime, dateFmt)
  const formattedTime = format(dateTime, timeFmt)

  return `${formattedDate} ${formattedTime}`
}

export function FlightsTable() {
  const [activeTab, setActiveTab] = useState<string>('scheduled')
  const [direction, setDirection] = useState<Direction>('departure')

  const options = [
    { label: 'All', value: 'All' },
    { label: 'ABI', value: 'ABI' },    
    { label: 'BDL', value: 'BDL' },
    { label: 'BNA', value: 'BNA' },
    { label: 'CMH', value: 'CMH' },
    { label: 'DFW', value: 'DFW' },
    { label: 'EWR', value: 'EWR' },
    { label: 'JAX', value: 'JAX' },
    { label: 'LAS', value: 'LAS' },
    { label: 'PVU', value: 'PVU' },
    { label: 'SFO', value: 'SFO' },
    { label: 'SNA', value: 'SNA' },
  ];
  
  const flights = MOCK_FLIGHTS;

  const routeChange = (flight: Flight) => {
  }

  return (
    <div className="">
      <div className="hidden md:block">
        <TableTabContainer>
          <TableTab
            isActive={activeTab === 'scheduled'}
            onClick={() => setActiveTab('scheduled')}
          >
            Scheduled Service Only
          </TableTab>
          <TableTab
            isActive={activeTab === 'charter'}
            onClick={() => setActiveTab('charter')}
          >
            Charters Only
          </TableTab>
          <TableTab
            isActive={activeTab === 'all'}
            onClick={() => setActiveTab('all')}
          >
            All Flights
          </TableTab>
        </TableTabContainer>
      </div>


      <div className="flex gap-10">
      <div className="flex items-center">
        <input
          checked={direction === 'departure'}
          value="departure"
          onChange={(e) => setDirection(e.target.value as 'departure')}
          id={'departure'}
          name="flight-direction"
          type="radio"
          className="text-skyBlue-600 focus:ring-skyBlue-600 h-4 w-4 border-gray-300"
        />
        <label
          htmlFor={'departure'}
          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
        >
          Departures
        </label>
      </div>
      <div className="flex items-center">
        <input
          checked={direction === 'arrival'}
          value="arrival"
          onChange={(e) => setDirection(e.target.value as 'arrival')}
          id={'arrival'}
          name="flight-direction"
          type="radio"
          className="text-skyBlue-600 focus:ring-skyBlue-600 h-4 w-4 border-gray-300"
        />
        <label
          htmlFor={'arrival'}
          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
        >
          Arrivals
        </label>
      </div>
      <div className="flex items-center">
        <Select
          value={activeTab}
          onChange={setActiveTab}
          options={options}
          error={false}
        />
      </div>
    </div>




      <div className="border-y border-y-gray-200 sm:overflow-hidden md:rounded-2xl md:border md:border-gray-200">
        <table className="font-openSans min-w-full table-fixed text-left text-sm text-gray-950">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="w-1/3 min-w-[112px] py-4 pl-4 pr-4 font-semibold md:w-1/6"
              >
                Flight Info
              </th>
              <th
                scope="col"
                className="hidden py-4 pr-4 font-semibold md:table-cell md:w-1/6"
              >
                Date
              </th>
              <th
                scope="col"
                className="hidden py-4 pr-4 font-semibold md:table-cell md:w-1/6"
              >
                <div className="xl:whitespace-nowrap">
                  {'Origin & Destination'}
                </div>
              </th>
              <th
                scope="col"
                className="hidden w-1/6 py-4 pr-4 font-semibold md:table-cell"
              >
                <div className="xl:whitespace-nowrap">
                  {'Departure & Arrival Time'}
                </div>
              </th>
              <th
                scope="col"
                className="w-1/3 py-4 pr-4 font-semibold md:w-1/6"
              >
                Tail
              </th>
              <th
                scope="col"
                className="w-1/3 py-4 pr-4 font-semibold md:w-1/6"
              >
                Dep Gate
              </th>
              <th scope="col" className="pr-4 lg:hidden"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {flights.map((flight) => (
              <tr
                key={flight.uniqueId}
                className="border-t border-t-gray-300 text-gray-500 hover:cursor-pointer hover:bg-gray-50"
                onClick={() => routeChange(flight)}
              >
                <td className="flex flex-col gap-1 py-4 pl-4 font-semibold text-gray-950">
                  MX{flight.flightNumber}
                  <dl className="flex flex-col gap-1 font-normal text-gray-500 lg:hidden">
                    <dd className="md:hidden">
                      {flight?.std && format(new Date(flight?.std), 'MMM dd')}
                    </dd>
                    <dd className="md:hidden">
                      {flight.scheduledDepartureAirport}
                      {' - '}
                      {flight.scheduledArrivalAirport}
                    </dd>
                    <dd className="md:hidden">
                      {flight?.std && format(new Date(flight?.std), 'HH:mm')}
                      {' - '}
                      {flight?.sta && format(new Date(flight?.sta), 'HH:mm')}
                    </dd>
                  </dl>
                </td>
                <td className="hidden py-4 md:table-cell">
                  {flight?.std && format(new Date(flight?.std), 'MMM dd')}
                </td>
                <td className="hidden py-4 md:table-cell">
                  {flight.scheduledDepartureAirport}
                  {' - '}
                  {flight.scheduledArrivalAirport}
                </td>
                <td className="hidden py-4 md:table-cell">
                  {flight?.std && format(new Date(flight?.std), 'HH:mm')}
                  {' - '}
                  {flight?.sta && format(new Date(flight?.sta), 'HH:mm')}
                </td>
                <td className="py-4">{flight.tailNumber}</td>
                <td className="py-4">{flight.departureGate}</td>
                <td className="py-4 pr-4 lg:hidden">
                  <div className="flex justify-end text-black">
                    <ChevronRight />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FlightsTable
