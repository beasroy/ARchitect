import React from 'react'

const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
}) => {
    return (
        <button
        
        className={`flex justify-center items-center gap-2 px-7 py-2 border font-montserrat text-lg leading-none  
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-gradient-to-tr from-amber-200 to-amber-700  text-white border-[#f9d959]  "
        } rounded-full ${fullWidth && "w-full"}`}
      >
            {label}
           { iconURL &&<img 
                src={iconURL}
                alt="arrow right"
                className="ml-2 rounded-full w-5 h-5"
            />}
        </button> 
    )
}

export default Button