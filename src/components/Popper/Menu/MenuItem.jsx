import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Button from "~/components/Button";

var cx = classNames.bind(styles);


function MenuItems({ data }) {
    return ( 
        <Button className={cx('menu-items')} to={data.to} leftIcon={data.icon}>{data.title}</Button>
     );
}

export default MenuItems;