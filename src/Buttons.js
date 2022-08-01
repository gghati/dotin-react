import React, {useState, useEffect} from 'react';
import './css/bootstrap.min.css';
import './css/style.css';

function openTab(th) {
    window.open(th.link,'_blank');
}

export default function Buttons() {

    const [buttons, setButtons] = useState([]);

    async function fetchtheAPI() {
        const url = "https://gauravghati.github.io/apis/buttons.json";
        const response = await fetch(url);
        const jsondata = await response.json();
        console.log(jsondata);
        setButtons(jsondata);
    }

    useEffect(() => {
        fetchtheAPI();
    }, []);

    if(!buttons.formal) return (<h> Loading </h>);

    return (
        <div class="buttonMain">
            <b class="buttonHeading">Gaurav Ghati</b><br/>
            {/* <b class="buttonSubHead">Software Developer</b><br/> */}

            { buttons.formal.map((btn) => {
                return <button class="btn-certi" onClick={openTab.bind(this, btn)} name={btn.link}>{btn.name}</button>;
            }) }

            <br/><br/><br/><br/>

            { buttons.informal.map((btn) => {
                return <button class="btn-certi" onClick={openTab.bind(this, btn)} name={btn.link}>{btn.name}</button>;
            }) }

        </div>
    );
}
