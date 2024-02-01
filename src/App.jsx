import React,  { useState } from 'react'
import './App.css'
import NavBar from './components/Nav'
import Clock from './components/Clock'
import Footer from './components/Footer'
import sound from "./components/sakaAudio.mp3"
import { AlarmProvider } from './components/AlarmProvider'

function App() {

    const [ringtone, setRingtone] = useState(new Audio(sound));

    async function updateRingtone(){
        const dropArea = document.getElementById('addFileBox');

        
        const file = dropArea.files[0]
        const audio = new Audio ();
        audio.src = await URL.createObjectURL(file);
        
        
        setRingtone(audio);
        console.log(ringtone)
        //ringtone.play()
        
      }
  
    return(
    <AlarmProvider>
        <div className="main">
        
        <NavBar updateRingtoneFunc={updateRingtone} />
        <Clock audio={ringtone}/>
        <Footer />
        </div>
    </AlarmProvider>
    )
  
}

export default App
