import React from 'react';
import './sideBar.css'


const sideBar = () => {
    return (
        
        <div  id="menu"> 
		 {/* <h3>Géneros</h3>  */}

    <div  id="wraper-list" >
      <div className="action" target="none" >	
          <a href="#">Accion</a>
	   </div>
	  <div  className="drama"   target="none">	
         <a href="#">Drama</a>
	   </div>
	   <div  className="comedy"   target="none">
         <a href="#">Comedia</a>
	   </div>
	   <div  className="infantil"   target="none">	
          <a href="#">Infantil</a>
	    </div>
    </div>	
</div>
    )
}
export default sideBar;