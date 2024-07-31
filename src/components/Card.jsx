

const CardUi =(props)=>{

    
  const title=props.title;

  const icon_source =props.icon_source;

  const info = props.info;
    

  return(<>


       
    <div class=' flex flex-col items-center p-16  bg-gray-500 rounded-sm sm:size-32 size-64 '>

    <img  class='fill-red-500' src={icon_source} alt="lol"/>  
    <h2 class='text-white'>{title}</h2>
    <h1 class='text-center text-4xl'>{info}</h1>


      



    </div>







  </>)
  






}

export default CardUi
