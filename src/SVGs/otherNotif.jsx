import React from 'react'

const otherNotif = ({color}) => {
  return (
<svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.6667 8.66667C20.6667 6.63334 19.8589 4.68329 18.4212 3.24551C16.9834 1.80774 15.0333 1 13 1C10.9667 1 9.01663 1.80774 7.57885 3.24551C6.14107 4.68329 5.33333 6.63334 5.33333 8.66667C5.33333 17.6111 1.5 20.1667 1.5 20.1667H24.5C24.5 20.1667 20.6667 17.6111 20.6667 8.66667Z" stroke={color ? color : "#17A1FA"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.2102 25.2773C14.9855 25.6646 14.6631 25.9861 14.2751 26.2095C13.8872 26.433 13.4473 26.5506 12.9996 26.5506C12.5519 26.5506 12.1121 26.433 11.7241 26.2095C11.3362 25.9861 11.0137 25.6646 10.7891 25.2773" stroke={color ? color : "#17A1FA"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


  )
}

export default otherNotif