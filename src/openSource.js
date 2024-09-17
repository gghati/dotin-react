import React, {useState, useEffect} from 'react'

function openTab(th) {
    window.open(th,'_blank');
}

export default function OpenSource() {

    const [open, setOpenSource] = useState([]);

    async function fetchtheAPI() {
        const url = "https://gghati.github.io/apis/opensource.json";
        const response = await fetch(url);
        const jsondata = await response.json();
        setOpenSource(jsondata);
    }

    useEffect(() => {
        fetchtheAPI();
    }, []);

    if(!open.prs) return (<h> Loading.... </h>);
    if(!open.issues) return (<h> Loading.... </h>);

    console.log(open.prs);
    console.log(open.issues); 

    return (
        <div class="divCertitwo">
            <table>
                <b class="fontSizeWorkedFor">• Merged Pull Requests</b>
                {
                    open.prs.map((pr) => {
                        return <tbody>
                            <tr>
                                <td class="c-heading">{pr.date}</td>
                            </tr>
                            <tr>
                                <td class="c-main">{pr.title}</td>
                                <td class="tdr"><button class="btn-certi" onClick={openTab.bind(this, pr.link)} name={pr.link}>View</button></td>
                            </tr>
                            <tr>
                                <td class="c-des certiTr">Repo of: {pr.repo}</td>
                            </tr>
                            <tr>
                                <td class="c-des certiTrBtn" colSpan="2">Field: {pr.field}</td>
                            </tr>
                        </tbody>
                    })
                }
            </table>

            <table>  
                <b class="fontSizeWorkedFor">• Issues Resolved</b>
                {
                    open.issues.map((iss) => {
                        return <tbody>
                            <tr>
                                <td className="c-heading">{iss.date}</td>
                            </tr>
                            <tr>
                                <td className="c-main">{iss.title}</td>
                                <td className="tdr"><button class="btn-certi" onClick={openTab.bind(this, iss.link)} name={iss.link}>View</button></td>
                            </tr>
                            <tr>
                                <td className="c-des certiTr">Repo: {iss.repo}</td>
                            </tr>
                            <tr>
                                <td className="c-des certiTrBtn" colSpan="2">Field: {iss.field}</td>
                            </tr>
                        </tbody>    
                    })
                }
            </table>
        </div>
    );
}
