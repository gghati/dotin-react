import React, {useState, useEffect} from 'react'

function openTab(th) {
    window.open(th.link,'_blank');
}

export default function Recommend() {

    const [recommendations, setRecmd] = useState([]);

    async function fetchtheAPI() {
        const url = "https://gauravghati.github.io/apis/recommend.json";
        const response = await fetch(url);
        const jsondata = await response.json();
        setRecmd(jsondata);
    }

    useEffect(() => {
        fetchtheAPI();
    }, []);

    if(!recommendations) return (<h> Loading </h>);

    return (
        <div class="divCerti">
            <table>
                {
                    recommendations.map((recmd) => {
                        return <tbody>
                            <tr>
                                <td class="c-heading">{recmd.contact}</td>
                            </tr>
                            <tr>
                                <td class="c-main">{recmd.from}</td>
                                <td class="tdr"><button class="btn-certi" onClick={openTab.bind(this, recmd)} name={recmd.link}>View</button></td>
                            </tr>
                            <tr>
                                <td class="c-des certiTr">{recmd.affilation}</td>
                            </tr>
                            <tr>
                                <td class="c-des certiTrBtn" colSpan="2">{recmd.know}</td>
                            </tr>
                        </tbody>    
                    })
                }
                
            </table>		
        </div>
    );
}
