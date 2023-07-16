import React, { useEffect, useState } from 'react'

const NumbersCard = ({ data: { p, num, icon, span }, show }) => {
    
    const [levelPercentage, setLevelPercentage] = useState(0);
    useEffect(() => {
        console.log(show)
        if (show) {
            const incresingNumInterval = setInterval(() => {
                setLevelPercentage(prev => {
                    if (prev === num)
                        clearInterval(incresingNumInterval)
                    return prev < num ? prev + Math.ceil(num / 20) : num
                })
                
            }, 100)

            return () => clearInterval(incresingNumInterval)
        }
     }, [show])

  return (
    <div className="numbers_card">
          {icon}
        <div>
        <h3>
            {levelPercentage}<span>{span}</span>
        </h3>
            <p>{p}</p>
        </div>
    </div>
  )
}

export default NumbersCard