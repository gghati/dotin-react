import React, {useState, useEffect} from 'react'

export default function WorkExp() {

    const [workExp, setWorkExp] = useState([]);

    async function fetchtheAPI() {
        const url = "https://gauravghati.github.io/apis/workexp.json";
        const response = await fetch(url);
        const jsondata = await response.json();
        console.log(jsondata);
        setWorkExp(jsondata);
    }

    useEffect(() => {
        fetchtheAPI();
    }, []);

    if(!workExp.jobs) return (<h> Loading.... </h>);
    if(!workExp.internships) return (<h> Loading.... </h>);
    if(!workExp.volunteer) return (<h> Loading.... </h>);

    return (
        <div class="divCertitwo">
            <table>
                <b class="fontSizeWorkedFor">• Full Time Jobs</b>
                {
                    workExp.jobs.map((job) => {
                        return <tbody>
                            <tr>
                                <td class="c-heading">{job.date}</td>
                            </tr>
                            <tr>
                                <td class="c-main"><b>{job.company}</b> | {job.post}</td>
                                <td class="c-des "><b><i>{job.location}</i></b></td>
                            </tr>
                            <tr>
                                <td class="c-des certiTrBtn" colSpan="2">{
                                    job.description.map((point)=>{
                                        return <> {point} <br/> </>
                                    })
                                }</td>
                            </tr>					
                        </tbody>    
                    })
                }
            </table>

            <table>
                <b class="fontSizeWorkedFor">• Internships</b>
                {
                    workExp.internships.map((intern) => {
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
                    workExp.volunteer.map((vol) => {
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
