import React, {useState, useEffect} from 'react'

function openTab(th) {
    window.open(th.link,'_blank');
}

export default function Certificates() {

    const [certificates, setCerti] = useState([]);

    async function fetchtheAPI() {
        const url = "https://gghati.github.io/apis/certificates.json";
        const response = await fetch(url);
        const jsondata = await response.json();
        setCerti(jsondata);
    }

    useEffect(() => {
        fetchtheAPI();
    }, []);

    if(!certificates) return (<h> Loading </h>);

    return (
        <div class="divCerti">
            <table>
                {
                    certificates.map((certi) => {
                        return <tbody>
                            <tr>
                                <td class="c-heading">{certi.date}</td>
                            </tr>
                            <tr>
                                <td class="c-main">{certi.name}</td>
                                <td class="tdr"><button class="btn-certi" onClick={openTab.bind(this, certi)} name={certi.link}>Certificate</button></td>
                            </tr>
                            <tr>
                                <td class="c-des certiTr">{certi.from}, Grade: {certi.grade}</td>
                            </tr>
                            <tr>
                                <td class="c-des certiTrBtn" colSpan="2">{certi.description}</td>
                            </tr>
                        </tbody>    
                    })
                }
                
            </table>		
        </div>
    );
}
