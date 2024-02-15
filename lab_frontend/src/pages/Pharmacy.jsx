import React from 'react'
import PharmacyNav from '../components/PharmacyNav'
import PharmacyForm from '../components/PharmacyForm'
import PharmacyTable from '../components/PharmacyTable'

function Pharmacy() {
  return (
    <div>
        <PharmacyNav />
        <PharmacyForm />
        <PharmacyTable />
    </div>
  )
}

export default Pharmacy