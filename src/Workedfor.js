import React, {useState, useEffect} from 'react'

export default function WorkedFor() {

    const [jobs, setJobs] = useState([]);

    async function fetchtheAPI() {
        const url = "https://gauravghati.github.io/apis/workedfor.json";
        const response = await fetch(url);
        const jsondata = await response.json();
        console.log(jsondata);
        setJobs(jsondata);
    }

    useEffect(() => {
        fetchtheAPI();
    }, []);


    if(!jobs.internships) return (<h> Loading.... </h>);
    if(!jobs.volunteer) return (<h> Loading.... </h>);

    return (
        <div class="divCertitwo">
            <table>
                <b class="fontSizeWorkedFor">• Internships</b>
                {
                    jobs.internships.map((intern) => {
                        return <tbody>
                            <tr>
                                <td class="c-heading">{intern.date}</td>
                            </tr>
                            <tr>
                                <td class="c-main"><b>{intern.company}</b> | {intern.post}</td>
                                <td class="c-des "><b><i>{intern.location}</i></b></td>
                            </tr>
                            <tr>
                                <td class="c-des certiTrBtn" colSpan="2">{
                                    intern.description.map((point)=>{
                                        return <> {point} <br/> </>
                                    })
                                }</td>
                            </tr>					
                        </tbody>    
                    })
                }
            </table>

            <table>
                <b class="fontSizeWorkedFor">• Volunteer</b>
                {
                    jobs.volunteer.map((vol) => {
                        return <tbody>
                            <tr>
                                <td class="c-heading">{vol.date}</td>
                            </tr>
                            <tr>
                                <td class="c-main"><b>{vol.company}</b> | {vol.position}</td>
                            </tr>
                            <tr>
                                <td class="c-des certiTrBtn" colSpan="2">{
                                    vol.description.map((point)=>{
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
