import React from "react";
import Html from "./html.png"
import Css from "./css.png"
import JavaScript from "./javascript.png"
import Java from "./java.png"
import SQL from "./sql.png"


 const Technologies=()=>{
    return(
        <main className="container mx-auto max-width pt-10 pb-20 ">
            <section>
                <h1 className=" text-sky-950 text-2xl text-dark-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    Technologies
                </h1>
                <p className="text-content py-2 lg:max-w-3xl">
                    I have good knowledge in these Technologies
                </p>
            </section>
            <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
            <img src={Html} title="Html" alt="" />
            <img src={Css} title="CSS" alt="" />
            <img src={JavaScript} title="JavaScript" alt="" />
            <img src={Java} title="Java" alt="" />
            <img src={SQL} title="SQL" alt="" />
            </section>
        </main>
    );
 }
 export default Technologies