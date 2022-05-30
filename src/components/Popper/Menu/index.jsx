import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from "~/components/Popper";

import styles from './Menu.module.scss';
import MenuItems from './MenuItem';

var cx = classNames.bind(styles);

function Menu({children, items = []}) {
    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItems key={index} data={item} />
        ));
    }

    return ( 
        <Tippy
            delay={[0, 500]}
            interactive={true}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;