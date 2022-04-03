import React, { useEffect , useState } from 'react'

function Loading() {

    const [loading , setLoading] = useState(true)

    useEffect(()=> {
        setTimeout(() => {
            setLoading(false)
          } , 3500)
          
    } , [])

  return (
    <div className={ `${loading ? 'showLoad loadOut' : 'hideLoad'}` }>
        <div className="smiley ">
  <div className="loader">
  </div>
  <div className="dot-left7"></div>
  <div className="dot-right7"></div>
</div>  
<div className='brt'>
    Be Right There ;)
</div>
    </div>
  )
}

export default Loading