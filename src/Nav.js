import React from 'react'

export default function Nav({ page, num }) {

    var base = "nav-link js-scroll-trigger";
    var activehome = base.concat((num==='1')? " active":"");
    var activecerti = base.concat((num==='2')? " active":"");
    var activepro = base.concat((num==='3')? " active":"");
    var activeexp = base.concat((num==='4')? " active":"");
    var activeRec = base.concat((num==='5')? " active":"");

    var url = "";

    if(num==='1') url = "https://gghati.github.io/apis/buttons.json";
    else if (num==='2') url = "https://gghati.github.io/apis/certificates.json";
    else if (num==='3') url = "https://gghati.github.io/apis/projects.json";
    else if (num==='4') url = "https://gghati.github.io/apis/workexp.json";
    else if (num==='5') url = "https://gghati.github.io/apis/recommend.json";

    return (
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style={{backgroundColor:'#1f1f1f'}}>
            <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="">
                <p class="img-fluid"><b style={{fontSize: '35px'}}>{page}</b></p>
            </a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fa fa-bars"></i>
            </button>

            <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" target="_blank" rel="noopener noreferrer" href={url}>Api of this page</a>
                </li>
            </ul>

            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                <li class="nav-item">
                    <a class={activehome} href={process.env.PUBLIC_URL + '/'}>Home</a>
                </li>
                <li class="nav-item">
                    <a class={activeexp} href={process.env.PUBLIC_URL + '/#/workexp'}>Work-Exp</a>
                </li>
                <li class="nav-item">
                    <a class={activepro} href={process.env.PUBLIC_URL + '/#/projects'} >Projects</a>
                </li>
                <li class="nav-item">
                    <a class={activeRec} href={process.env.PUBLIC_URL + '/#/recommend'}>Recommendations</a>
                </li>
                <li class="nav-item">
                    <a class={activecerti} href={process.env.PUBLIC_URL + '/#/certifications'}>Certifications</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}
