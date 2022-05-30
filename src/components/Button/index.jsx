import {useState} from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
    to, 
    href, 
    primary = false, 
    outline = false, 
    text = false,
    rounded = false,
    disabled = false,
    small = false, 
    large = false , 
    leftIcon,
    rightIcon,
    children, 
    className,
    onClick, 
    ...passProps
}) {
    let Comp = "button";
    const props = {
        onClick,
        ...passProps
    };

    if (to) {
        props.to = to;
        Comp = Link;
    }else if (href) {
        props.href = href;
        Comp = "a";
    }

    if (disabled) {
        delete props.onClick;
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
    });

    return ( 
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
     );
}

export default Button;