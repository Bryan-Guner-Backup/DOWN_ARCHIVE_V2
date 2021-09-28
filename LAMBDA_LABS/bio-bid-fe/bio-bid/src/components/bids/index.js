import React, { useState } from 'react';

import Bids from "./bids";

import {WorkSpace, MainWrapper} from './styles/styled-componets';
import DashSidebar from './dash-sidebar';
import OpenDash from './open-dash';

import './styles/global.css';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
    const [dashOpen, setDashOpen] = useState(false);
    const [shadowed, setShadowed] = useState(false);

    const applyDash = () => { setDashOpen(!dashOpen); }
    const applyShadow = () => { setShadowed(!shadowed); }

    const processBar = (active) => {
        setDashOpen(active);
    }

    return (
        <MainWrapper>
            <WorkSpace>
                <div className={shadowed ? 'shadow-active' : ''}></div>
                <DashSidebar shadow={applyShadow} dashOpen={dashOpen} process={processBar} />
                <OpenDash shadow={applyShadow} processDash={applyDash} dashOpen={dashOpen} process={processBar} />
                <Bids shadow={applyShadow} />
            </WorkSpace>
        </MainWrapper>
    )
    
}