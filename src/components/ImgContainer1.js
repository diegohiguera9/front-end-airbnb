import "../styles/components/imgContainer.scss";
const ImgContainer =({children})=>{
    return(
        
        <div className="container">
            <div className="containerStyle">
                <div className="mainImg">
                    <div id="img1" className="img"></div>
                </div>
                <div className="secondaryImg">
                    <div id="img2" className="img"></div>
                    <div id="img3" className="img"></div>
                    <div id="img4" className="img"></div>
                    <div id="img5" className="img">
                        
                    </div>
                    <div className="moreImg">
                        <button className="moreBtn">
                            <div className="morediv">
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" ><path d="m3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill-rule="evenodd"></path></svg>
                                <div className="moretext">Mostrar Más</div>
                            </div>
                        </button>
                    </div>
                </div>    
            </div>
            
        </div>
        
    )
}



export default ImgContainer