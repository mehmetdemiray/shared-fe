import React from "react"

export const SLeft = ({children}) => {
  const Menus = [
    {
      "name": "Operasyon",
      "link": "/operation"
    },
    {
      "name": "Test",
      "link": "/test"
    }]
  return (
    <div className="layout_sleft">
        {Menus.map((i, k) => 
          <p>{i.name}</p>
        )}
    </div>
  )
}