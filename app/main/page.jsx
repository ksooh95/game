'use client';

import { React, useState } from 'react';

export default function Main() {
    const myLv = localStorage.getItem('myLv');
    console.log(myLv);
    const [currentLv, setCurrentLv] = useState(0);
    const [message, setMessage] = useState('');
    const sword = [
        {
            lv: 0,
            img: `/lv${currentLv}.png`,
            name: '기본 무기',
        },
        {
            lv: 1,
            img: `/lv${currentLv}.png`,
            name: '괜찮은 무기',
        },
        {
            lv: 2,
            img: `/lv${currentLv}.png`,
            name: '쓸만한 무기',
        },
    ];

    const percent = (lv) => {
        return Math.max(100 - lv * 10, 0);
    };
    const successPercent = percent(currentLv);
    const isSuccess = Math.random() * 100 < successPercent;
    const upGradeBtn = () => {
        if (isSuccess) {
            setCurrentLv(currentLv + 1);
            if (successPercent == 100) {
                setMessage('강화 성공');
            } else if (successPercent == 90) {
                setMessage('성공 !');
            }
            localStorage.setItem('myLv', currentLv);
        } else {
            setCurrentLv(0);
            setMessage('이런.. 강화 실패');
        }
    };

    return (
        <div>
            <div>무기 강화 결과</div>
            <div>{currentLv} 강화 </div>
            <div>
                {currentLv == 0 ? (
                    <div>
                        <div className="name">{sword[currentLv].name}</div>
                        <div className="img">
                            <img src={sword[currentLv].img} alt="" />
                        </div>
                    </div>
                ) : currentLv == 1 ? (
                    <div>
                        <div className="name">{sword[currentLv].name}</div>
                        <div className="img">
                            <img src={sword[currentLv].img} alt="" />
                        </div>
                    </div>
                ) : currentLv == 2 ? (
                    <div>
                        <div className="name">{sword[currentLv].name}</div>
                        <div className="img">
                            <img src={sword[currentLv].img} alt="" />
                        </div>
                    </div>
                ) : null}
            </div>

            <div>현재 성공 확률 : {successPercent}%</div>
            <div>- {message}</div>

            <button
                onClick={() => {
                    upGradeBtn();
                }}
            >
                강화하기
            </button>
        </div>
    );
}
