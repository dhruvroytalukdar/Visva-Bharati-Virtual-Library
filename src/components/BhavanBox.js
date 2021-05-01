import "./compstyle.css";
import {NavLink} from 'react-router-dom';
import style from './styles/bhavanbox.module.css';

export default function BhavanBox({ name, imgSrc, redirecturl ,fireFirebase}) {
  return (
    <div className={style.nav_links} onClick={()=>fireFirebase(redirecturl)} className="bhavan-box">
      {/* <NavLink onClick={()=>fireFirebase(redirecturl)} className={style.nav_links} to={`/bhavans/${redirecturl}`}> */}
        <p className="box-title">{name}</p>
        <img className="bhavan-images" src={imgSrc} alt="bhavan pictures" />
      {/* </NavLink> */}
    </div>
  );
}
