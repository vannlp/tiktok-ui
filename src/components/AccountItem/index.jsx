import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import style from "./AccountItem.module.scss";

const cx = classNames.bind(style);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img 
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/53188fcccd4ee60c7d4ca543d8dd0750~c5_100x100.jpeg?x-expires=1654005600&x-signature=Xjk0INF8%2FrC6zj004vqpCMSFXWw%3D" 
                alt="Hosd" 
                className={cx("avatar")} 
                />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyee n van a</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvanvaa</span>
            </div>
        </div>
     );
}

export default AccountItem;