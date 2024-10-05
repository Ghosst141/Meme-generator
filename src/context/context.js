import React from 'react'
import { createContext, useState } from 'react'
const editcontext=createContext();
function context() {
  return (
    <editcontext.Provider>
    <div>context</div>
    </editcontext.Provider>

  )
}

export default context