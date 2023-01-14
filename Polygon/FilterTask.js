-----------------CatalogFilterCheckboxItemModal

import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import CatalogLabel from "./CatalogLabel";

export default function CatalogFilterCheckboxItemModal(props) {
    const {title, value, name, onFormChange, id, checked, form} = props;

 useEffect(() => {
         const duplicates = document.querySelectorAll(`[id=${id}]`);
         if (duplicates.length <= 1){
             return false;
         }
         console.log(duplicates,'notStop');

         const mainEL = duplicates[0]
         const cloneEL = duplicates[1];
         console.log(mainEL, cloneEL);

         cloneEL.removeAttribute('id')
         console.log(mainEL, cloneEL, 'deleteID');
         // mainEL.checked && cloneEL.attr('checked', 'checked');
         // mainEL.checked()
         console.log(mainEL.checked, cloneEL.checked, 'checked');
         console.log(duplicates.length > 1 ? duplicates[1].classList.add('opkokokoasda') : '')
     }, []);

    return (
        <div className="form-group-modal">
            {
                <input onChange={() => onFormChange(true, id)} defaultChecked={checked} id={id}
                           className="filter-checkbox-modal" value={value} name={name} type="checkbox"/>
            }
            <CatalogLabel id={id} label={title} type={'label'}/>
        </div>
    );
}

CatalogFilterCheckboxItemModal.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onFormChange: PropTypes.func.isRequired,
};

CatalogFilterCheckboxItemModal.defaultProps = {
    isTitleRendered: false
};

----------------------CatalogFilterModal--------------------------
import React, {useEffect, useState} from "react";
import Close from "#/img/svg/Close";
import FilteredElements from "./FilteredElements";
import {trans} from "#/js/service/Translator";
import SearchIcon from "#/img/svg/SearchIcon";
import CatalogFilterCheckboxItemModal from "./CatalogFilterCheckboxItemModal";

const CatalogFilterModal = (props) => {
    const alphabet = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    ];
    const {form, onFormChange, videos, showAllKey, close} = props;
    const [inputValue, setInputValue] = useState("");
    const [filteredItems, setFilteredItems] = useState(false);

    const searchValue = (event) => {
        event.preventDefault();
        const value = event.target.value.toLowerCase();
        if (value !== "") {
            setFilteredItems(true);
            setInputValue(value);
        } else {
            setFilteredItems(false);
            setInputValue("")
        }
    }

    useEffect(() => {
        if (inputValue === "") {
            setFilteredItems(false);
        }
    }, [inputValue]);

    return (
        <div
            className="catalog-modal-wrapper"
            onClick={(event) => event.stopPropagation()}
        >
            <button className="catalog-modal-btn" onClick={(event) => {
                close()
                event.preventDefault()
            }}>
                <Close/>
            </button>
            <div className="catalog-modal-input">
                <SearchIcon/>
                <input
                    value={inputValue}
                    onChange={searchValue}
                    defaultValue={
                        form.properties.main.value
                            ? form.properties.main.value
                            : ""
                    }
                    onBlur={onFormChange}
                    // name={`${form.title}[main]`}
                    type="text"
                    id="catalog-modal-input_search"
                    placeholder={trans(form.properties[showAllKey].title)}
                />
                <div
                    onClick={(event) => {
                        onFormChange();
                        event.preventDefault();
                    }}
                ></div>
            </div>
            {filteredItems ? (
                <div className="letter-groups">
                    {form.properties[showAllKey].items.enum_titles
                        .filter((itemValue) => itemValue.toLowerCase().includes(inputValue.toLowerCase()))
                        .map((itemValue, index) => {
                            return (
                                <FilteredElements
                                    key={index}
                                    letter={itemValue}
                                    videos={videos}
                                    filterProperty={form.properties[showAllKey]}
                                    form={form}
                                    showAllKey={showAllKey}
                                    {...props}
                                />
                            )
                        })
                    }
                </div>
            ) : (
                <div className="letter-groups">
                    {alphabet.map((letter) => {
                        if (
                            form.properties[
                                showAllKey
                                ].items.enum_lastname.filter(
                                (element) =>
                                    element.startsWith(letter) && element
                            ).length > 0
                        ) {
                            return (
                                <>
                                    <div className="letter-group-letter">
                                        {letter}
                                    </div>
                                    {form.properties[showAllKey].items.enum.map(function (itemValue, index) {
                                        let filterProperty = form.properties[showAllKey];
                                        let firstname = filterProperty.items.enum_firstname[index];
                                        let lastname = filterProperty.items.enum_lastname[index];
                                        let checkboxItem = null;
                                        if (lastname.startsWith(letter)) {
                                            checkboxItem = <CatalogFilterCheckboxItemModal
                                                form={form}
                                                key={index}
                                                name={`${form.title}[${showAllKey}][]`}
                                                title={lastname + ' ' + firstname}
                                                value={itemValue}
                                                checked={filterProperty.value !== null ? filterProperty.value.includes(parseInt(itemValue)) : false}
                                                id={`${showAllKey}_${index}`}
                                                onFormChange={onFormChange}
                                            />
                                            return checkboxItem
                                        }
                                    })}

                                </>

                            );
                        }
                    })}
                </div>
            )}
        </div>
    );
};

export default CatalogFilterModal;
