import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from "react-router-dom";
const Side =()=>{
    return(
        <>
            <div className="side_icon">
                    <NavLink to="https://wa.me/qr/NXPIJMZPHXVKG1" target="_blank" className="whatsapp"><WhatsAppIcon /></NavLink>
                    <NavLink to="https://www.instagram.com/sonukashyap_16693/?igsh=MzNlNGNkZWQ4Mg%3D%3D" className="insta" target="_blank"><InstagramIcon /></NavLink>
            </div>
        </>
    )
}
export default Side;