
  import react from 'react';

  import {Link} from 'react-router-dom'

  //import {Link} from 

const LinksUi =()=>{

  //const first = useContext(second)


  return(


    <>



      <div class='absolute bottom-0 right-0  *:font-sans grid grid-cols-4 gap-4 bg-cyan-300 lg:bg-pink-600'>


      <Link class='hover:bg-purple-800 hover:text-white '  to='/dashboard'>DASHBOARD</Link>

      <Link  class='hover:bg-purple-800 hover:text-white'   to='/projects'>PROJECTS</Link>

      <Link class='hover:bg-purple-800 hover:text-white '   to='/services'>SERVICES</Link>

      <Link class='hover:bg-purple-800 hover:text-white '   to='/about us '>ABOUT US </Link>

      
      
  




      </div>

  
      





  </>);
    




}


export default LinksUi
