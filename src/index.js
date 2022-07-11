import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import './index.css';
import CharacterMenu from "./main_game/character_menu/CharacterMenu";
import Navbar from "./perm_pages/nav_bar/Navbar";
import Footer from "./perm_pages/footer/Footer";
import ErrorPage from "./error_page/ErrorPage";
import Inventory from "./main_game/inventory/Inventory";
import Membership from "./membership_page/Membership";
import Quest from "./main_game/quest/Quest";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<div className={'container'}>
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path={"/"} element={<CharacterMenu
                name={'Logan'}
                health={'100'}
                healthMax={'100'}
                xp={'100'}
                maxXp={'100'}
                />}
            />
            <Route path={'inventory'} element={<Inventory />}/>
            <Route path={'game'} element={<Quest />}/>

            <Route path={'membership'} element={<Membership />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
    </BrowserRouter>
    <Footer />
</div>
    );