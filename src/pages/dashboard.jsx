

import {CardUi} from '../components/index'

import react from 'react';

import logo from '../assets/github.svg'

import linkedin from '../assets/linkedin.svg'

import codechef from '../assets/codechef.svg'


const Dash = ()=>{



  return(




      <>


        <div class='p-2 absolute top-40 lg:top-36 max-[320px]:top-40 :sm:max-sm:left-2 left-48 lg:left-52 max-md:left-2  grid max-[320px]:grid-cols-1 grid-cols-2   lg:grid-cols-3  gap-4  '>

             <CardUi title="Repository" info="200+" icon={logo} />
              
              <CardUi title ="Connections" info="50+" icon={linkedin}/>

              <CardUi title="Rating" info="1079" icon={codechef}/>

        </div>



  


    </>
  ); 






}



export default Dash
