function getNewsHtml(item) {
    let newsHtml = `
    <div class="col-4">
        <div class="news__card">
            <img src="image/${item.img}" alt="photo ${item.id}" class="news__photo">
            <div class="news__info-block">
                <strong class="news__strong">${item.title}</strong>
                <p class="news__info">${item.info}</p>
                <img src="image/${item.authorImg}" alt="${authorName}" class="news__main-photo">
                <div class="news__main-info">
                    <p class="news__name">${authorName}</p>
                    <p class="news__date">${item.date}</p>
                </div>
            </div>
        </div>
    </div>
    `;
    return newsHtml;
};

const newsList = [
    {
        id: 1,
        title: 'See The Unmatched Beauty Of The Great.',
        img: 'news_photo1.jpg',
        info: 'Free directories: directories are perfect for customers that are... searching for',
        authorImg: 'news_author1.png',
        authorName: 'Isaac Dunn',
        date: '09 Feb 2017',
    },
    {
        id: 2,
        title: 'Effective Advertising Pointers.',
        img: 'news_photo2.jpg',
        info: 'aving a home based business is a wonderful asset to your life...',
        authorImg: 'news_author2.png',
        authorName: 'Dominic Freeman',
        date: '24 Apr 2017',
    },
    {
        id: 3,
        title: 'Hypnotize Yourself Into The Ghost.',
        img: 'news_photo3.jpg',
        info: 'There are many things that are important to catalog design....',
        authorImg: 'news_author3.png',
        authorName: 'Alice Ward',
        date: '30 Dec 2017',
    },
    {
        id: 4,
        title: 'See The Unmatched Beauty Of The Great.',
        img: 'news_photo1.jpg',
        info: 'Free directories: directories are perfect for customers that are... searching for',
        authorImg: 'news_author1.png',
        authorName: 'Isaac Dunn',
        date: '09 Feb 2017',
    },
    {
        id: 5,
        title: 'Effective Advertising Pointers.',
        img: 'news_photo2.jpg',
        info: 'aving a home based business is a wonderful asset to your life...',
        authorImg: 'news_author2.png',
        authorName: 'Dominic Freeman',
        date: '24 Apr 2017',
    },
    {
        id: 6,
        title: 'Hypnotize Yourself Into The Ghost.',
        img: 'news_photo3.jpg',
        info: 'There are many things that are important to catalog design....',
        authorImg: 'news_author3.png',
        authorName: 'Alice Ward',
        date: '30 Dec 2017',
    },
];
 export default newsList;
//  export default getNewsHtml(item);