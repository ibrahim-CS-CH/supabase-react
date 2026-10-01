import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase-client";


function App() {
  const [instruments, setInstruments] = useState<any[]>([])

  useEffect(() => {
    getInstruments()
  }, [])
  async function getInstruments() {
    const { data, error } = await supabase.from('instruments').select()
    if (error) {
      console.error(error)
      return
    }
    setInstruments(data as any)
  }

  return (
    <>
      <h1>Try list Instruments</h1>
      <ul>
      {instruments.map((instrument) => (
        <li key={instrument.id}>{instrument.name}</li>
      ))}
    </ul>    </>
  )
}

export default App
