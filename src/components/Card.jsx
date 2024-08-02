

const CardUi =(props)=>{

    
  const title=props.title;

  const icon_source=props.icon;

  const info = props.info;

  const def_size=props.size==null?'':props.size;


    

  return(<>


          <div class='relative flex flex-col items-center  justify-center p-28 bg-gray-200  rounded-lg lg:size-32 sm:max-md:size-16 max-sm:size-8 border-2 border-green-400  '>

    <img class='absolute top-2 justify-self-center size-16 p-2.5 bg-blue-400 rounded-md scale-4' src={icon_source}  alt="lol"/>  
    <h1 class='  z-1 text-center text-5xl text-emerald-700 mt-24 font-bold' >{info}</h1>

    <h2 class=' relative text-slate-900 text-3xl mt-1'>{title}</h2>


      

    


    </div>







  </>)
  






}

export default CardUi
