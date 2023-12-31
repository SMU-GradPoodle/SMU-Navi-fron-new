import MainLogo from '../../component/MainLogo/Main_Logo';
import MenuBar from '../../component/MenuBar/MenuBar';
import Board_list2 from '../../component/Board_list/Board_list2';
import TrafficTab from '../../component/TrafficTab/TrafficTab';
import LeftArrow from '../../img/leftarrow.png';
import RightArrow from '../../img/rightarrow.png';
import React, { useState, useEffect, useParams } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ReportTraffic.css';
import Line from '../../component/Line/Line'

function ReportTraffic(){

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [content, setContent] = useState([]);
    const [contentCount, setContentCount] = useState();
    const [contentId, setContentId] = useState([]);

    const [slidePx, setSlidePx] = useState(0);

    useEffect( (e) => {
        async function fetchData(){
            const result = await axios({
                method: 'get',
                url: 'https://www.smnavi.me/api/info?isMine=0',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer ' + token
                },
                data: {}
            }).then((res) => {
                var data = res.data.data.itemList;
                var count = res.data.data.itemList.length;
                setContent(data);
                setContentCount(count);
            }).catch((error) => {
                // alert("글을 확인할 수 없습니다. 관리자에게 문의하세요.");
            });
        }
        fetchData();
    },[]);
    

    function onMoveWriteReport(){
        navigate('/write_traffic');
    }

    function onMoveTrafficDetail(props){
        navigate('/detail_traffic/' + props);
    }

    function onMoveTrafficList(){
        navigate('/list_traffic');
    }

    function toPrev() {
        if (slidePx < 0) setSlidePx(slidePx + 295);
    }

    function toNext() {
        if (slidePx >= (-300 * (contentCount - 6))) setSlidePx(slidePx - 300);
    }

    return(
        <div>
            <MainLogo />
            <MenuBar />
            <div className={"Report_big_wrap"}>
                <div className={"reportTitle"}>
                    <div>교통 제보하기 🚨</div>
                    <p>당일 교통 제보를 제공하며, 허위 제보는 무통보 삭제 될 수 있습니다.<br/>
                        제보에 동의하면 좋아요를, 허위 제보라면 싫어요를 눌러주세요</p>
                </div>

                <div className={"On_Move_WriteTraffic"}>
                    <button type={"button"} id="onMoveTrafficListBt" onClick={onMoveTrafficList}>더 많은 게시물 보러가기</button>
                    <button type={"button"} id="onMoveWriteReportBt" onClick={onMoveWriteReport}>제보하기</button>
                </div>
                <div className={"Report_tap_top_wrap"}>
                    <img src={LeftArrow} id={"left_arrow"} onClick={toPrev}/>
                    <div className={"Report_tab_wrap"}>
                        {content != ''
                            ? content.map((content, index) => (
                                <div className="traffic_tab_box_wrap">
                                    <TrafficTab slide={slidePx}
                                                type1={content.kind.description}
                                                type2={content.transportation.type}
                                                type3={content.transportation.station}
                                                num={index}
                                                time={content.createdTime}
                                                content={content.content}
                                                heartLike={content.likeInfo.likeCount}
                                                heartHate={content.likeInfo.hateCount}
                                                liked={content.likeInfo.islLiked}
                                                hated={content.likeInfo.isHated}
                                                onClick={() => onMoveTrafficDetail(content.id)}
                                    />
                                </div>
                            ))
                            : <div className="traffic_tab_box">등록된 글이 없습니다</div>}
                    </div>
                    <img src={RightArrow} id={"right_arrow"} onClick={toNext}/>
                </div>
            </div>
        </div>
    )
}

export default ReportTraffic;
