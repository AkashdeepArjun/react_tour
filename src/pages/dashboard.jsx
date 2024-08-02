

import {CardUi} from '../components/index'

import react from 'react';

import logo from '../assets/github.svg'

import linkedin from '../assets/linkedin.svg'

import codechef from '../assets/codechef.svg'


const Dash = ()=>{



  return(




      <>


        <div class='p-16 absolute top-64 grid grid-cols-3 sm:max-md:grid-cols-2 max-sm:grid-cols-1 gap-4  '>

             <CardUi title="Repository" info="200+" icon={logo} />
              
              <CardUi title ="Connections" info="50+" icon={linkedin}/>

              <CardUi title="Rating" info="1079" icon={codechef}/>

        </div>



  


    </>
  ); 






}



export default Dash
