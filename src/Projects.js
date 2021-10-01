import React, {useState, useEffect} from 'react'

function openTab(th) {
    window.open(th,'_blank');
}

export default function Projects() {

    const [projects, setProjects] = useState([]);

    async function fetchtheAPI() {
        const url = "https://gauravghati.github.io/apis/projects.json";
        const response = await fetch(url);
        const jsondata = await response.json();
        setProjects(jsondata);
    }

    useEffect(() => {
        fetchtheAPI();
    }, []);

    if(!projects) return (<h> Loading.... </h>);

    return (
        <div class="divCerti">
            <table>
                {
                    projects.map((pro) => {
                        return <tbody>
                            <tr>
                                <td class="c-heading">{pro.date}</td>
                            </tr>
                            <tr>
                                <td class="c-main">{pro.heading}</td>
                                <td class="tdr"><button class="btn-certi" onClick={openTab.bind(this, pro.ghlink)} name="">GitHub</button></td>
                            </tr>

                            <tr>
                                <td class="c-des certiTr">{pro.tech}</td>
                            </tr>
                            <tr>
                                <td class="c-des certiTrBtn" colSpan="2">{
                                    pro.description.map((point)=>{
                                        return <> {point} <br/> </>
                                    })
                                }</td>
                            </tr>
                        </tbody>                        
                    })
                }
            </table>
        </div>            
    );
}
