import React from 'react';

/* STYLE IMPORT */
import './styles/filter.css';
import './styles/global.css';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* IMAGE IMPORTS */
import { ReactComponent as CloseIcon } from '../../images/close.svg';

function CheckboxFilters(props) {
    
    return (
        <div id='filter-wrapper' className={(props.open ? 'filter-open' : 'filter-closed')}>
            <div id='filter-header-container'>
                <div id='filter-header-sub-container'>
                    <h1 id='filter-header-text'>Sort and Filter</h1>
                    <p id='filter-header-sub-text'>Select all that applies</p>
                </div>
                <CloseIcon id='close-icon' onClick={() => props.process()} />
            </div>
            <div>
                <p className='cat-header'>Status:</p>
                <input name='open'
                    type='checkbox'
                    checked={props.openStatus}
                    onChange={() => props.setOpenStatus(!props.openStatus)} />
                <label className='cat-item' >Open</label>
                <br />
                <input name='active'
                    type='checkbox'
                    checked={props.active}
                    onChange={() => props.setActive(!props.active)} />
                <label className='cat-item' >Active</label>
                <br />
                <input name='closed'
                    type='checkbox'
                    checked={props.closed}
                    onChange={() => props.setClosed(!props.closed)} />
                <label className='cat-item' >Closed</label>
            </div>
            <hr className='filter-break' />
            <div>
                <p className='cat-header'>Phase:</p>
                <input name='phase1'
                    type='checkbox'
                    checked={props.phase1}
                    onChange={() => props.setPhase1(!props.phase1)} />
                <label className='cat-item' >I</label>
                <br />
                <input name='phase2'
                    type='checkbox'
                    checked={props.phase2}
                    onChange={() => props.setPhase2(!props.phase2)} />
                <label className='cat-item' >II</label>
                <br />
                <input name='phase3'
                    type='checkbox'
                    checked={props.phase3}
                    onChange={() => props.setPhase3(!props.phase3)} />
                <label className='cat-item' >III</label>
            </div>
            <hr className='filter-break' />
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '30px' }}>
                <button className='final-filter-button' onClick={props.handleFilterResults}>Apply Changes</button>
                <button className='final-filter-button' onClick={props.clearFilters}>Clear all filters</button>
            </div>
        </div>
    );
}

export default CheckboxFilters;