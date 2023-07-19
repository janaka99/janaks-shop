import { useEffect, useState } from "react"


const useScreenWidth = () => {

    const [screenWidth, setscreenWidth] = useState(window.innerWidth);

    const getDeviceType =(width: any): any =>{
        if(width < 640){
            return 'xsm';
        }else if (width > 640 && width < 768 ){
            return 'sm'
        }else if (width > 768 && width < 1024){
            return 'md';
        }else{
            return 'lg'
        }
    }

    const [deviceType, setDeviceType] = useState(getDeviceType(screenWidth))

    const handleResize = () =>{
        const newScreenWidth = window.innerWidth;
        setscreenWidth(newScreenWidth);
        setDeviceType(getDeviceType(screenWidth));
    }

    useEffect(() => {
      //add event llister to update the screen with state on resize
      window.addEventListener('resize', handleResize)
    
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])
    


  return deviceType
}

export default useScreenWidth