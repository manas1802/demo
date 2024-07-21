import React, { useState } from 'react';
import { FaEye, FaSort, FaFilter, FaStackOverflow } from 'react-icons/fa';
import Modal from 'react-modal';
import './globalFilter.css'; // Create this file for additional styling

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '30%', // Adjust the width here
        maxHeight: '80vh', // Adjust the height here
        overflow: 'auto' // Add scroll if content is too long
    }
};

const GlobalFilter = ({ globalFilter, setGlobalFilter, handleSortChange, applyGrouping, removeGrouping }) => {
    const [modalIsOpen, setIsOpen] = useState({
        eye: false,
        sort: false,
        filter: false,
        stack: false
    });
    const [sortOption, setSortOption] = useState('');

    function openModal(type) {
        setIsOpen({ ...modalIsOpen, [type]: true });
    }

    function closeModal(type) {
        setIsOpen({ ...modalIsOpen, [type]: false });
    }

    const handleOptionChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleApplyGrouping = () => {
        applyGrouping(sortOption);
        closeModal('stack');
    };

    const handleRemoveGrouping = () => {
        removeGrouping();
        closeModal('stack');
    };

    return (
        <div className="global-filter-container">
            <input
                value={globalFilter || ''}
                onChange={e => setGlobalFilter(e.target.value)}
                placeholder="Search..."
                className="global-filter-input"
            />
            <div className="icons-container">
                <FaEye onClick={() => openModal('eye')} />
                <FaSort onClick={() => openModal('sort')} />
                <FaFilter onClick={() => openModal('filter')} />
                <FaStackOverflow onClick={() => openModal('stack')} />
            </div>

            <Modal
                isOpen={modalIsOpen.eye}
                onRequestClose={() => closeModal('eye')}
                style={customStyles}
                contentLabel="Eye Modal"
            >
                <button onClick={() => closeModal('eye')} className="close-button">Close</button>
                <div>Eye Modal Content</div>
            </Modal>
            <Modal
                isOpen={modalIsOpen.sort}
                onRequestClose={() => closeModal('sort')}
                style={customStyles}
                contentLabel="Sort Modal"
            >
                <button onClick={() => closeModal('sort')} className="close-button">Close</button>
                <div>Sort Modal Content</div>
            </Modal>
            <Modal
                isOpen={modalIsOpen.filter}
                onRequestClose={() => closeModal('filter')}
                style={customStyles}
                contentLabel="Filter Modal"
            >
                <button onClick={() => closeModal('filter')} className="close-button">Close</button>
                <div>Filter Modal Content</div>
            </Modal>
            <Modal
                isOpen={modalIsOpen.stack}
                onRequestClose={() => closeModal('stack')}
                style={customStyles}
                contentLabel="Stack Modal"
            >
                <button onClick={() => closeModal('stack')} className="close-button">Close</button>
                <div>
                    <label htmlFor="sort-options">Sort by: </label>
                    <select
                        id="sort-options"
                        value={sortOption}
                        onChange={handleOptionChange}
                    >
                        <option value="">Select an option</option>
                        <option value="category">Category</option>
                        <option value="subcategory">Subcategory</option>
                    </select>
                    <button onClick={handleApplyGrouping}>Apply Grouping</button>
                    <button onClick={handleRemoveGrouping}>Remove Grouping</button>
                </div>
            </Modal>
        </div>
    );
};

export default GlobalFilter;
