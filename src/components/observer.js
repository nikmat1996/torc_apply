import { useEffect, useRef, useState } from "react";

export const useObserver = () => {
    const [show, setShow] = useState(false);
    const element = useRef()

    useEffect(() => {
        let cb = ([entry]) => {
            if (entry.isIntersecting){
                observer.unobserve(entry.target)
                console.log(entry.target)
                setShow(true)
            }
        }
        const observer = new IntersectionObserver(cb)
        observer.observe(element.current)
    
      
    }, [])
    
    return [show, element]
}