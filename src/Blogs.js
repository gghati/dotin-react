import React, {useState, useEffect} from 'react'

export default function Blogs() {

    const [blogs, setBlog] = useState([]);

    async function fetchtheAPI() {
        const url = "https://gauravghati.github.io/apis/blogs.json";
        const response = await fetch(url);
        const jsondata = await response.json();
        setBlog(jsondata);
    }

    useEffect(() => {
        fetchtheAPI();
    }, []);

    return (
        <div>
            {JSON.stringify(blogs)}
        </div>
    );
}
