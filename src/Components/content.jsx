export default function ({item,add}){
    function addOnClick(item){
        add(item)
    }
    let border= item.new&&item.featured ? "5px solid hsl(180, 29%, 50%)" : "uset";
    return(<div className="d-flex rounded col-12 flex-wrap margin10px mobile-marginB30 paddingLR10 mobile-padding-10" style={{backgroundColor:"white",boxShadow:"5px 10px 10px #D5EAED",borderLeft:border}}>
        <div className="photo margin25px">
            <img className="small-height" src={item.logo}/>
        </div>
        <div className="d-flex flex-column justify-content-center flex-wrap mobile-marginL10 mobile-marginT15 ">
            <div className="d-flex mb-1 align-items-center">
                <div className="small-margin font-weight-700 darkcyan-color mobile-marginR18" style={{paddingLeft:"unset",marginLeft:"unset"}}><div className="font-size15 mobile-font15" style={{verticalAlign:"sub"}}>{item.company}</div></div>
                {item.new &&
                    <div className="rounded-pill new small-font-size small-margin mobile-font15 mobile-marginR11"><span style={{verticalAlign:"sub"}}>NEW!</span></div>}
                {item.featured &&
                    <div className="rounded-pill featured small-font-size small-margin mobile-font15"><span style={{verticalAlign:"sub"}}>FEATURED</span></div>}
            </div>
            <a  className="font-weight-700 dark-color font-size19 link-hover mobile-font17" href="#">{item.position}</a>
            <div className="d-flex flex-wrap">
                <div className="medium-margin grey-color font-size15 mobile-font15">{item.postedAt}</div>
                <li className="medium-margin grey-color font-size15 mobile-font15">{item.contract}</li>
                <li  className="grey-color font-size15 mobile-font15">{item.location}</li>
            </div>
        </div>
        <hr className="col-11 hidden" style={{marginLeft:"10px"}}/>
        <div className="techs justify-content-sm-end d-flex justify-content-start align-items-center flex-grow-1 flex-wrap margin20px mobile-margin-unset">
            <button onClick={()=>addOnClick(item.role)} className="font-size15 borderless tablets darkcyan-color font-weight-700 lightcyan-background-color padding5px margin9px rounded-1 paddingLR9" >{item.role}</button>
            <button onClick={()=>addOnClick(item.level)} className="font-size15 borderless tablets darkcyan-color font-weight-700 lightcyan-background-color padding5px margin9px rounded-1 paddingLR9" >{item.level}</button>
            {item.languages.map((item,i)=>
                <button onClick={()=>addOnClick(item)} className="font-size15 borderless tablets darkcyan-color font-weight-700 lightcyan-background-color padding5px margin9px rounded-1 paddingLR9" key={i} >{item}</button>
            )}
            {item.tools.map((item,i)=>
                <button onClick={()=>addOnClick(item)} className="font-size15 borderless tablets darkcyan-color font-weight-700 lightcyan-background-color padding5px margin9px rounded-1 paddingLR9" key={i}>{item}</button>
            )}
        </div>
    </div>)
}
