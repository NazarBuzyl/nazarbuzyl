import React, {useState} from 'react';
import ContestListPagination from "./ContestListPagination";
import ContestListResults from "./ContestListResults";
import ContestListSelectedItems from "./ContestListSelectedItems";
import ContestListFilter from "./ContestListFilter";
import ViewCardsContainer from "./ViewCardsContainer";
import JurrieSection from "./JurrieSection";

const ContestListSection = () => {
    const [openModalFilterMobile, setOpenModalFilterMobile] = useState(false);
    return (
        <div className="contest-list-section">
            <form id="search_filter">
                <div className="d-flex justify-content-between">
                    <div className="contest-list-section__tittle-block">
                        <h3 className="contest-list-section__tittle">Contests list</h3>
                    </div>
                    <div className="d-md-none d-block">
                        <a id="contestListFilterMobile"
                           onClick={()=>{setOpenModalFilterMobile(true)}}
                           className="contest-list-section__mobile-filters-btn">Filters
                            <span className="btn-icon__filters"></span>
                        </a>
                    </div>
                </div>
                <div className="contest-list-section__container">
                    <div className="row d-lg-none filter-mobile"></div>
                    <ContestListFilter
                        openModalFilterMobile={openModalFilterMobile}
                        setOpenModalFilterMobile={setOpenModalFilterMobile}
                    />
                    <div className="contestListSelectedItems-wrap">
                        <ContestListSelectedItems/>
                        <div className="contest-list-selected"></div>
                        <div className="contest-list-selected"></div>
                        <div className="contest-list-selected"></div>
                    </div>
                    <div className="contest-list-section__contest-list contest-list">
                        <div className="contest-list__header">
                            <div className="contest-list__header-name"><span>Name</span></div>
                            <div className="contest-list__header-country"><span>Country</span></div>
                            <div className="contest-list__header-city"><span>City</span></div>
                            <div className="contest-list__header-instruments"><span>Instrument</span></div>
                            <div className="contest-list__header-dotation"><span>Dotation</span></div>
                            <div className="contest-list__header-date"><span>Date</span></div>
                            <div className="contest-list__header-view"></div>
                        </div>
                        <ContestListResults/>
                    </div>
                    <div className="d-flex justify-content-end pager">
                        <ContestListPagination/>
                    </div>
                </div>
                <div className="contest-list-section__map-block map-block"></div>
            </form>
            <ViewCardsContainer
                title={'Instruments'}
            />
            <JurrieSection/>
        </div>
    );
};

export default ContestListSection;

import React from 'react';
import ContestListCheckbox from "./ContestListCheckbox";

const ContestListFilter = (props) => {
    const {
        openModalFilterMobile,
        setOpenModalFilterMobile,
    } = props;
    return (
        <div className="contest-list-section__filters">
            <div className="row">
                {/*Search block*/}
                <div className="col-lg-3 col-12">
                    <div className="p-relative contest-list-section__filter-search">
                        <div onClick={() => {}} className="contest-list-section__btn-search btn-icon btn-icon__search"></div>
                        <input
                            placeholder="Search"
                            type="text"
                            id="search"
                        />
                    </div>
                </div>
                {/*ContestListCheckbox*/}
                <div className="col-lg-9 col-md-12">
                    <div id="contestListFilters"
                         className={`contest-list-section__filters-block ${openModalFilterMobile ? "contest-list-section__filters-block_active" : ""}`}
                        >
                        <div className="row d-md-flex d-block">
                            <ContestListCheckbox
                                tittleFilter={'Continents'}
                            />
                            <ContestListCheckbox
                                tittleFilter={'Country'}
                            />
                            <ContestListCheckbox
                                tittleFilter={'Instriments'}
                            />
                        </div>
                        <div
                            onClick={()=>{setOpenModalFilterMobile(false)}}
                            className="btn-icon btn-icon__close d-md-none"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContestListFilter;

import React, {useState} from 'react';
import ContestListCheckboxItem from "./ContestListCheckboxItem";

const ContestListCheckbox = (props) => {
    const {tittleFilter} = props;
    const [openFilterList, setOpenFilterList] = useState(false)
    return (
        <div className="d-md-block col-md-4 col-12">
            <div className={`contest-list-section__filter-block ${openFilterList ? "contest-list-section__filter-block_active" : ""}`}>
                <div
                    className={`contest-list-section__filter-block-title ${openFilterList ? "contest-list-section__filter-block-title_active" : ""}`}

                    onClick={() => { setOpenFilterList(!openFilterList)
                    }}
                >{tittleFilter}</div>
                <div className="contest-list-section__filter-list">
                    <ContestListCheckboxItem/>
                    <ContestListCheckboxItem/>
                    <ContestListCheckboxItem/>
                    <ContestListCheckboxItem/>
                </div>
            </div>
        </div>
    );
};

export default ContestListCheckbox;

import React from 'react';

const ContestListCheckboxItem = () => {
    return (
        <div className="contest-list-section__filter-item">
            <input
                   className="filter-checkbox"
                   name="search_filter[instruments][]"
                   type="checkbox" value=""/>
            <label htmlFor="">Piano</label>
        </div>
    );
};

export default ContestListCheckboxItem;


import React from 'react';

const ContestListSelectedItems = () => {
    return (
        <div className="contest-list-selected">
            <p className="contest-list-selected-item">Piano
                <span className="contest-list-selected-btn">×</span>
            </p>
            <p className="contest-list-selected-item">Piano
                <span className="contest-list-selected-btn">×</span>
            </p>
            <p className="contest-list-selected-item">Violine
                <span className="contest-list-selected-btn">×</span>
            </p>
            <p className="contest-list-selected-item">Piano
                <span className="contest-list-selected-btn">×</span>
            </p>
        </div>
    );
};

export default ContestListSelectedItems;

import React from 'react';
import ContestListResultLine from "./ContestListResultLine";

const ContestListResults = () => {
    return (
        <div className="contest-list__wrap">
            <ContestListResultLine/>
            <ContestListResultLine/>
            <ContestListResultLine/>
            <ContestListResultLine/>
        </div>
    );
};

export default ContestListResults;

import React from 'react';

const ContestListResultLine = () => {
    return (
        <div className="contest-list__item">
            <div className="contest-list__name"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a dui ipsum. Sed volutpat sollicitudin semper. Nam</span></div>
            <div className="contest-list__country"><span>Germeny</span></div>
            <div className="contest-list__city"><span>Munchen</span></div>
            <div className="contest-list__instruments"><span>Piano, violin</span></div>
            <div className="contest-list__dotation"><span>$ 3000</span></div>
            <div className="contest-list__date"><span>22/05/22</span></div>
            <div className="contest-list__view">
                <a className="contest-list__view-link">View</a>
            </div>
        </div>
    );
};

export default ContestListResultLine;



----------------------------------------

import React, { useRef, useState } from 'react';
import {Stream} from "@cloudflare/stream-react";
import Subtract from "#/img/svg/Subtract";
import bgImg from  "#/img/bg-image-video.png"

const DataTittleInstrumentsCard = (props) => {
    const [isPlaying, setPlaying] = useState(false);
    const {onCardHover, setOnCardHover} = useState(false)
    const {video, index} = props;

    const refVideo = useRef(null);

    const onCardMouseEnter = (index) => {
        setOnCardHover(index, true);
        refVideo.current.play();
    };

    const onCardMouseLeave = (index) => {
        setOnCardHover(index, false);
        refVideo.current.pause();
    };

    const catchCanPlayThrough = () => {
        if (!refVideo.current) {
            return;
        }

        if (!isPlaying) {
            setPlaying(true)
        }
    };

    const catchCanPlay = () => {
        if (!refVideo.current) {
            return;
        }

        if (!isPlaying) {
            refVideo.current.currentTime = refVideo.current.duration * 0.2
        }
    };
    let sectionStyle = onCardHover ? {} : {
        width: "100%",
        // backgroundImage: `url(${video.image})`,
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
    };

    return (
        <a className="date-tittle-instruments-card col-lg-4 col-sm-6 col-12"
           href="#"
           onMouseEnter={() => onCardMouseEnter(index)}
           onMouseLeave={() => onCardMouseLeave(index)}
        >
            <div className="date-tittle-instruments-card__video-wrapper-img" style={sectionStyle}>
                {/*<Stream*/}
                {/*    streamRef={refVideo}*/}
                {/*    preload='metadata'*/}
                {/*    onCanPlayThrough={catchCanPlayThrough}*/}
                {/*    onCanPlay={catchCanPlay}*/}
                {/*    src={video.previewId}*/}
                {/*    poster={video.image}*/}
                {/*    controls={false}*/}
                {/*    loop={false}*/}
                {/*    autoplay={false}*/}
                {/*    muted={true}*/}
                {/*    className={!onCardHover ? 'video-stream' : 'd-none'}*/}
                {/*/>*/}
            </div>
            <div className="date-tittle-instruments-card__info-body">
                <div className="date-tittle-instruments-card__date">Nov. 1 - Nov. 8, 2020</div>
                <div className="date-tittle-instruments-card__tittle text-overflow-2">Technical course by Wlodek Lincowicz</div>
                <div className="date-tittle-instruments-card__instruments text-overflow-2">Piano, violin, cello, flute</div>
            </div>
        </a>
    );
};

export default DataTittleInstrumentsCard;

import React from 'react';
import jurrieImg from "#/img/jurrie-img.png"
import ViewCardsContainer from "./ViewCardsContainer";

const JurrieSection = () => {
    return (
        <div className="jurrie-section">
            <div className="jurrie-section__jurrie-block jurrie-block">
                <div className="d-flex flex-md-row-reverse flex-column justify-content-between">
                    <div className="jurrie-block__presentation-photo-block">
                        <img src={jurrieImg} alt="" className="jurrie-block__presentation-photo"/>
                    </div>
                    <div className="jurrie-block__info-body">
                        <div className="jurrie-block__name-jurrie">KIm Justyn</div>
                        <div className="jurrie-block__members-list d-flex">
                            <div className="jurrie-block__members-item">School</div>
                            <div className="jurrie-block__members-item">School</div>
                            <div className="jurrie-block__members-item">School</div>
                        </div>
                        <div className="jurrie-block__description-list">
                            <div className="jurrie-block__description-item">
                                <span className="jurrie-block__description-item-tittle">Instruments:</span>Guitar, Cello
                            </div>
                            <div className="jurrie-block__description-item">
                                <span className="jurrie-block__description-item-tittle">Studied at:</span>Guitar, Cello
                            </div>
                            <div className="jurrie-block__description-item">
                                <span className="jurrie-block__description-item-tittle">Professor at:</span>Guitar, Cello
                            </div>
                            <div className="jurrie-block__description-item">
                                <span className="jurrie-block__description-item-tittle">Website:</span>
                                <a href="#" className="jurrie-block__description-item-link">JHdsif@fds.cim</a>
                            </div>
                            <div className="jurrie-block__description-item">
                                <span className="jurrie-block__description-item-tittle">Social-media:</span>Guitar, Cello
                            </div>
                        </div>
                        <div className="jurrie-block__changing-long-text">
                            <span className="text-overflow-3">
                                Dariush Talai is an Iranian singer, tar and setar player, musicologist, composer, and educator who has become internationally recognised for his many contributions to the world of Persian art music.
                            Born in 1953, he began his studies of traditional Persian music with masters of radif, the canonical corpus of melodic models that constitute the core of the Persian classical dastgah repertory, and are transmitted intergenerationally from
                            </span>
                             View More
                        </div>
                    </div>
                </div>
            </div>
            <div className="jurrie-section__view-cards-list">
                <ViewCardsContainer/>
                <ViewCardsContainer/>
                <ViewCardsContainer/>
            </div>
        </div>
    );
};

export default JurrieSection;

import React from 'react';
import DataTittleInstrumentsCard from "./DataTittleInstrumentsCard";

const ViewCardsContainer = (props) => {
    return (
        <div className="view-cards-container">
            <div className="d-flex justify-content-between view-cards-container__title-block">
                <div className="view-cards-container__title">Next Academies</div>
                <div className="view-cards-container__view-btn-block d-md-block d-none">
                    <button className="view-cards-container__view-btn">View all 8</button>
                </div>
            </div>
            <div className="row">
                <DataTittleInstrumentsCard
                index={1}
                />
            </div>
            <div className="d-flex justify-content-center">
                <div className="view-cards-container__view-btn-block d-md-none d-block">
                    <button className="view-cards-container__view-btn">View all 8</button>
                </div>
            </div>
        </div>
    );
};

export default ViewCardsContainer;


