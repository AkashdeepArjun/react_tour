
  import react from 'react';

  import {Link} from 'react-router-dom'

  //import {Link} from 

const LinksUi =()=>{

  //const first = useContext(second)


  return(


    <>



      <div class='absolute sm:max-md:ml-4 sm:max-md:left-64 sm:max-md:top-8 lg:bottom-0  grid lg:grid-cols-4 max-md:grid-rows-4  gap-4 max-md:gap-2 sm:max-md:grid-rows-4 lg:left-1/2 *:text-yellow-200'>


      <Link class='hover:bg-pink-800 hover:text-white '  to='/dashboard'>DASHBOARD</Link>

      <Link  class='hover:bg-pink-800 hover:text-white'   to='/projects'>PROJECTS</Link>

      <Link class='hover:bg-pink-800 hover:text-white '   to='/services'>SERVICES</Link>

      <Link class='hover:bg-pink-800 hover:text-white '   to='/about us '>ABOUT US </Link>

      
      
  




      </div>

  
      





  </>);
    




}


export default LinksUi
