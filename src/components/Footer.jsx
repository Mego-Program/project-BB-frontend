import React from "react";

const year = new Date().getFullYear();


function Footer(){
    const style = {
        position: 'absolute',
        textAlign: 'center',
        bottom: 0,
        width: '100%',
        height: '2.5rem',
        color: '#ccc',
      }
    return <p className="footer">copyright © {year} </p>;
}
    

export default Footer;