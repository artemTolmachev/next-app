'use client';

import React from 'react'

export default function errorWrapper({error}: {error: Error}) {
  return (
    <h1>Opsss!!! {error.message}</h1>
  )
}
