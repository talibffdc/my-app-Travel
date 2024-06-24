"use client";
import React, { useState } from "react";

export default function LandingPage() {
  const [departure, setDeparture] = useState("Singapore (SIN)");
  const [arrival, setArrival] = useState("Los Angeles (LA)");
  const [date, setDate] = useState("2022-05-01");

  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold pl-10">FickleFlight</div>
          <nav className="pr-10">
            <a href="#" className="px-3">
              Explore
            </a>
            <a href="#" className="px-3">
              Search
            </a>
            <a href="#" className="px-3">
              Hotels
            </a>
            <a href="login" className="px-3">
              Login
            </a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Let's explore & travel the world
        </h1>
        <p className="mb-8">
          Find the best destinations and the most popular stays!
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md inline-block">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="border p-2 rounded w-full md:w-1/3"
              placeholder="Departure"
            />
            <input
              type="text"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="border p-2 rounded w-full md:w-1/3"
              placeholder="Arrival"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border p-2 rounded w-full md:w-1/3"
            />
          </div>
          <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded">
            Search Flights
          </button>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Upcoming Flight</h2>
          <div className="bg-white p-6 rounded-lg shadow-md inline-block">
            <p className="text-lg mb-2">SIN - Singapore</p>
            <p className="text-lg mb-2">LAX - Los Angeles</p>
            <p className="text-lg mb-2">Departs On: 1 May, 08:00 AM</p>
            <p className="text-lg">4 days to go</p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Prepare for Your Trip</h2>
          <div className="flex flex-wrap justify-center space-x-4 space-y-4 md:space-y-0">
            <div className="p-4 bg-white rounded-lg shadow-md">Hotel</div>
            <div className="p-4 bg-white rounded-lg shadow-md">Attractions</div>
            <div className="p-4 bg-white rounded-lg shadow-md">Eats</div>
            <div className="p-4 bg-white rounded-lg shadow-md">Commute</div>
            <div className="p-4 bg-white rounded-lg shadow-md">Taxi</div>
            <div className="p-4 bg-white rounded-lg shadow-md">Movies</div>
          </div>
        </div>
      </main>
    </div>
  );
}
