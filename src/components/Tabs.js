import React, { useState } from "react";

const arrOfTab = [
    {
        title: "Tab 1",
        content: "This is the content of Tab 1"
    },
    {
        title: "Tab 2",
        content: "This is the content of Tab 2"
    },
    {
        title: "Tab 3",
        content: "This is the content of Tab 3"
    }
]

const Tabs = () => {
    // let [tab, setTab] = useState(arrOfTab);
    let [content, setContent] = useState(arrOfTab[0].content);
    function showContent(obj) {
        setContent(obj.content);
    }


    return (
        <div>
            {
                arrOfTab.map((obj) => (
                    <li onClick={()=>{showContent(obj)}}>
                        {obj.title}
                    </li>
                ))
            }

            <p>{content}</p>
        </div>
    )
}

export default Tabs;