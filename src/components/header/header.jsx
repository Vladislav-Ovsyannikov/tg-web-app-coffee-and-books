import React from 'react';
import Button from "../button/button";
import {useTelegram} from "../hooks/useTelegram";

const Header = () => {
    const {user, onClose} = useTelegram()
    return (
        <div className="header">
            <Button onClick = {onClose}>Закрыть</Button>
            <span className = {'username'}>
                {tg.initDataUnsafe?.name?.username}
            </span>
        </div>
    );
};

export default Header;