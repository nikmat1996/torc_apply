import React, { useEffect, useState } from 'react'

const NumbersCard = ({ data: { p, num, icon, span } }, show) => {
    
    const [levelPercentage, setLevelPercentage] = useState(0);
    // useEffect(() => {
    //     if (show) {
    //         const incresingNumInterval = setInterval(() => {
    //             console.log(levelPercentage, " is levelPercentage. ",num, " is num." , p)
    //             setLevelPercentage(prev => {
    //                 if (prev === num)
    //                     clearInterval(incresingNumInterval)
    //                 return prev < num ? prev + Math.ceil(num / 20) : num
    //             })
                
    //         }, 100)

    //         return () => clearInterval(incresingNumInterval)
    //     }
    //  }, [show])

  return (
    <div className="numbers_card">
          {icon}
        <div>
        <h3>
            {num}<span>{span}</span>
        </h3>
            <p>{p}</p>
        </div>
    </div>
  )
}

export default NumbersCard