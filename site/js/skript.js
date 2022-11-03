import React from 'react';
import bgImage from "#/img/instruments/background/piano.jpg";
import HomepagePresentationCard from "./HomepagePresentationCard";


const HomepagePresentation = () => {
    return (
        <div className="contest-presentation">
            <div className='contest-presentation__main-image-container'>
                <div className="contest-presentation__bg-image" style={{backgroundImage: `url(/build/images/bg-homepagePresentation_main.png`}}>
                    <div className="contest-presentation__flex">
                        <div className="contest-presentation__info-block">
                            <h3 className="contest-presentation__tittle">Classical contest music</h3>
                            <div className="contest-presentation__text">Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                                a type specimen book.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="contest-presentation__offers-viewing offers-viewing">
                    <div className="row">
                        <HomepagePresentationCard
                            bgImage={"/build/images/bg-homepagePresentation_1.png"}
                            colCount='12'
                        />
                        <HomepagePresentationCard
                            bgImage={"/build/images/bg-homepagePresentation_2.png"}
                            colCount='6'
                        />
                        <HomepagePresentationCard
                            bgImage={"/build/images/bg-homepagePresentation_3.png"}
                            colCount='6'
                        />
                        <HomepagePresentationCard
                            bgImage={"/build/images/bg-homepagePresentation_4.png"}
                            colCount='6'
                        />
                        <HomepagePresentationCard
                            bgImage={"/build/images/bg-homepagePresentation_5.png"}
                            colCount='6'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomepagePresentation;

import React from 'react';
import ResourcesButton from "./common/ResourcesButton.js";

const HomepagePresentationCard = (props) => {
    const {colCount, bgImage, url} = props;

    return (
        <div className={`col-12 col-lg-${colCount} offers-viewing__item-block`}>
            <a className="offers-viewing__item" href={url}>
                <div className="offers-viewing__bg-image" style={{backgroundImage: `url(${bgImage}`}}>
                    <div className="offers-viewing__flex">
                        <div className="offers-viewing__info-block">
                            <h4 className="offers-viewing__tittle">Contests list</h4>
                            <div className="offers-viewing__text text-overflow-2">Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.
                            </div>
                            <ResourcesButton
                                textBtn={'Discover'}
                                functionBtn={()=>{}}
                                classBtn={"offers-viewing"}
                            />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};
export default HomepagePresentationCard;
