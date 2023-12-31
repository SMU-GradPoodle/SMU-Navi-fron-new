import React, {useEffect, useState} from 'react';
import MainLogo from '../../component/MainLogo/Main_Logo';
import Footer from "../../component/Footer/Footer";
import "./CCTV.css"
import MenuBar from "../../component/MenuBar/MenuBar";
import Media from "react-media";

const CCTV = () => {

    function buttonColor(idx) {
        document.getElementById("cctv1").style.backgroundColor= "white";
        document.getElementById("cctv1").style.color= "black";
        document.getElementById("cctv2").style.backgroundColor= "white";
        document.getElementById("cctv2").style.color= "black";
        document.getElementById(idx).style.backgroundColor = "#879B6D";
        document.getElementById(idx).style.color= "white";
    }



    function selectBtn(idx) {
        if(idx === "cctv1"){
           document.getElementById('myIframe').src = "https://www.utic.go.kr/view/map/cctvStream.jsp?cctvid=L010029&cctvname=%25EA%25B4%2591%25ED%2599%2594%25EB%25AC%25B8&kind=Seoul&cctvip=null&cctvch=51&id=62&cctvpasswd=null&cctvport=null&minX=126.86850223291543&minY=37.532683171998684&maxX=127.08840516954024&maxY=37.618116676194724";
        }
        else if(idx === "cctv2") {
            document.getElementById('myIframe').src = "https://www.utic.go.kr/view/map/cctvStream.jsp?cctvid=L010169&cctvname=%25EC%258B%259C%25EC%25B2%25AD&kind=Seoul&cctvip=null&cctvch=51&id=60&cctvpasswd=null&cctvport=null&minX=126.86761300167508&minY=37.52331181092342&maxX=127.08748873586144&maxY=37.60874703165121";
        }
    }

    return (
        <div className={"Main_wrap"}>
            <MainLogo className={"mainlogo"}/>
            <MenuBar/>
            <div id={'cctv-wrapper'}>
                    <iframe id={"myIframe"}
                            src="https://www.utic.go.kr/view/map/cctvStream.jsp?cctvid=L010029&cctvname=%25EA%25B4%2591%25ED%2599%2594%25EB%25AC%25B8&kind=Seoul&cctvip=null&cctvch=51&id=62&cctvpasswd=null&cctvport=null&minX=126.93801784507436&minY=37.534755415666964&maxX=127.01863625090986&maxY=37.616271305116555"
                            height="330" width="400" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen="{true}"></iframe>
                    <iframe id={"myIframe"}
                            src="https://www.utic.go.kr/view/map/cctvStream.jsp?cctvid=L010169&cctvname=%25EC%258B%259C%25EC%25B2%25AD&kind=Seoul&cctvip=null&cctvch=51&id=60&cctvpasswd=null&cctvport=null&minX=126.86761300167508&minY=37.52331181092342&maxX=127.08748873586144&maxY=37.60874703165121"
                            height="330" width="400" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen="{true}"></iframe>
            </div>
            <Footer />
        </div>
    );
}
export default CCTV