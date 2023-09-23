'use client'

import { useEffect, useState } from "react"

export default function CountryLookUp() {
  const [country, setcountry] = useState('United State')
  useEffect(() => {
    fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setcountry(data.city + ", " + data.country));
  }, [])
  return (
    <div className="flex justify-between">
      {country}
      <span className="text-black">
       theguyinfitch </span> <span></span>
    </div>
  )
}
