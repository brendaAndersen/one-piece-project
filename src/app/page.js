"use client";
import Image from 'next/image'
import  "./styles/globals.css"
import React, { useState } from 'react'
import { characters, jollyRoger, luffy } from '@/utils'

export default function Home() {
  const [character, setCharacter] = useState(
    {image: luffy, index:0, name:characters[0].name, description: characters[0].description}
  );

  return (
  <>
    <main className={"characters"}>
      <div>
        <div
          className={"character"}>
            <div className={"content"}>
              <i className={"logo"}></i>
              <h2 className={"nome-character"}>{character.name}</h2>
              <p className={"description"}>{character.description}</p>
            </div>
            <Image
            className={"imagem"}
            src={character.image}
            alt={"character-"+character.name}
            // width={1400}
            // height={670}
            priority
          />        
        </div>
      </div>
    </main>
    <ul className={"buttons"}>
      {
        jollyRoger.map((nameJollyRoger, index) => (
          <li key={index}>
            <button className={"button"} 
              onClick={
              (() => setCharacter({
                image: characters[index].image, 
                name: characters[index].name, 
                index, 
                description: characters[index].description})
              )}>
            <Image
              className='button'
              src={nameJollyRoger}
              alt={"character-" + nameJollyRoger}
            />
          </button>
        </li>
        ))
      } 
    </ul> 
  </>
)}
