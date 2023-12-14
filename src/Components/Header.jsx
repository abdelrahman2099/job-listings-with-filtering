import HeaderDesktopImg from "../../images/bg-header-desktop.svg"
import HeaderMobileImg from "../../images/bg-header-mobile.svg"
import IconRemove from "../../images/icon-remove.svg"
import {useEffect, useState} from "react";

export default function Header({arr,remove,clear}){
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
    let margin = arr.length>0? "unset" : (isMobile ? "40px" : "60px" );
    return(
        <header style={{marginBottom:margin}}>
            <div id="main-img" className="w-100" style={{backgroundColor: "hsl(180, 29%, 50%)"}}/>
            {arr.length>0&&<div className="mobile-width content-width d-flex rounded padding-10-30 mobile-padding-10" style={{boxShadow:"0px 10px 10px #D5EAED",backgroundColor:"white",margin:"auto",position:"relative",top:"-35px"}}>
                <div className="col-10 d-flex flex-wrap">
                    {arr.map((item,i)=><div key={i} className="darkcyan-color font-size15 font-weight-700 d-flex flex-row rounded-1 lightcyan-background-color justify-content-center align-items-center" style={{margin:"10px"}}>
                        <div style={{margin:"5px",marginLeft:"10px",marginRight:"10px"}}>{item}</div>
                        <button onClick={()=>{remove(i)}} className="borderless rounded-end-1 darkcyan-background-color button-hover" style={{padding:"unset"}}><img style={{padding:"10px"}} src={IconRemove} className="rounded-end-1"/></button>
                    </div>)}
                </div>
                <div className="col-2 d-flex justify-content-end align-items-center">
                    <button className="dark-color link-hover borderless grey-color" onClick={clear} style={{backgroundColor:"transparent"}}>Clear</button>
                </div>
            </div>}
        </header>
    );
}