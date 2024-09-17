import React, {useState, useEffect} from 'react';
import './css/bootstrap.min.css';
import './css/style.css';

function openTab(th) {
    window.open(th.link,'_blank');
}

export default function Buttons() {

    const [buttons, setButtons] = useState([]);

    async function fetchtheAPI() {
        const url = "https://gghati.github.io/apis/buttons.json";
        const response = await fetch(url);
        const jsondata = await response.json();
        console.log(jsondata);
        setButtons(jsondata);
    }

    useEffect(() => {
        fetchtheAPI();
    }, []);

    if(!buttons.formal) return (<h> Loading... </h>);

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };

    return (
        <div class="buttonMain">
            <b class="buttonHeading">Gaurav Ghati</b>
            <br/>
            <b class="buttonSubHead">Actively Seeking Full-Time SDE Roles</b><br/>
            <b class="buttonSubHead">CS Grad at University Of California, Irvine</b>

            <br/><br/>

            { buttons.formal.map((btn) => {
                return <button class="btn-certi" onClick={openTab.bind(this, btn)} name={btn.link}>{btn.name}</button>;
            }) }

            <br/><br/>

            <b class="buttonSubHead">{buttons.quote1}</b>
            
            <br/><br/>

            <b class="buttonSubHead">{buttons.quote2}</b>

            <br/><br/>
            
            <button class="btn-certi" role="link" onClick={() => openInNewTab("https://github.com/gghati/dotin-react")}>Source Code of Website</button>
        </div>
    );
}
