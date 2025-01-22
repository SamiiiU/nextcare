import React from 'react'

const CustomButton = ({className , text , onClick}) => {
  return (
    <>
      <div onClick={onClick} className={`${className || ""} w-fit cursor-pointer bg-orangeBG text-white font-bold  px-5 py-3 rounded-md transition-all `}>
            {text}
      </div>
    </>
  )
}

export default CustomButton
