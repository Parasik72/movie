let bflagSearchField = false;
function searchField(){
    bflagSearchField = !bflagSearchField;
    if(bflagSearchField && document.getElementById('Lypa').classList.contains('active'))
        document.getElementById('navigation_topimg_ul_id').insertAdjacentHTML(
            'beforeend',
            '<li id="searchFieldLi" class="active"><form id="forma" action="#" method="POST"><input type="text" id="searchField" name="searchFieldName"></input></form></li>'
        );
    else if(bflagSearchField)
        document.getElementById('Lypa').insertAdjacentHTML(
            'beforebegin',
            '<li id="searchFieldLi"><form id="forma" action="#" method="POST"><input type="text" id="searchField" name="searchFieldName"></input></form></li>'
        );
    else
        document.getElementById('searchFieldLi').remove();
}

const MainULListArray = [
    'Trending',
    'Top Rated',
    'New Arrivals',
    'Trailers',
    'Coming Soon',
    'Genre'
];

function getSelectedMainUlList(){
    let a = document.getElementById('selectMainULList');
    return a.options[a.selectedIndex].text;
}

function getMainULList(){
    let sList = '<select id="selectMainULList" name="selectMain" onchange="checkMainULList()">'
    let counter = 0;
    for (const iterator of MainULListArray) {
        sList += '\n' + '<option value="selectMain' + String(counter) + '">' + iterator + '</option>';
        ++counter;
    }
    sList += '\n' + '</select>';
    return sList;
}

let bflagResizeChange = false;
const cloneMainSquares = document.getElementById('Movies_Nav_Div_Squares_id').cloneNode(true);
const cloneMainUlList = document.getElementById('Movies_Nav_Left_id').cloneNode(true);
const cloneHeaderInfo = document.getElementById('Movie_info_bottom_id').cloneNode(true);
const cloneMovieinfo = document.getElementById('Movie_info_id').cloneNode(true);
function resizeChange(){
    let witdh = parseInt(window.innerWidth);
    if(witdh <= 815 && !bflagResizeChange){
        let cloneFooterLeftUl = document.getElementById('MFooter_Main_Top_About_etc_id').cloneNode(true);
        let cloneFooterRightUl = document.getElementById('MFooter_Main_Top_Pictures_id').cloneNode(true);
        if(bflagSearchField){
            let cloneSearchField = document.getElementById('searchFieldLi').cloneNode(true);
            document.getElementById('searchFieldLi').remove();
            document.getElementById('navigation_topimg_ul_id').insertAdjacentElement(
                'beforeend',
                cloneSearchField
            );
        }
        document.getElementById('MFooter_Main_Top_About_etc_id').remove();
        document.getElementById('MFooter_Main_Top_Pictures_id').remove();
        document.getElementById('Movies_Nav_Div_Squares_id').remove();
        document.getElementById('Movies_Nav_Left_id').remove();
        document.getElementById('Movie_info_bottom_id').remove();
        document.getElementById('Movie_info_id').remove();
        document.getElementById('MFooter_Main_T').insertAdjacentElement(
            'beforeend',
            cloneFooterLeftUl
        );
        document.getElementById('MFooter_Main_T').insertAdjacentElement(
            'beforeend',
            cloneFooterRightUl
        );
        document.getElementById('Movies_Nav_id').insertAdjacentHTML(
            'afterbegin',
            getMainULList()
        );
        document.getElementById('Header_Bottom_Info').insertAdjacentHTML(
            'afterbegin',
            '<button id="Header_Bottom_More" type="submit">More</button>'
        );
        bflagResizeChange = true;
        if(!document.getElementById('Lypa').classList.contains('active')){
            document.getElementById('Lypa').classList.add('active');
            if(bflagSearchField)
                document.getElementById('searchFieldLi').classList.add('active');
        }  
    }else if(witdh > 815 && bflagResizeChange){
        let cloneFooterLeftUl = document.getElementById('MFooter_Main_Top_About_etc_id').cloneNode(true);
        let cloneFooterRightUl = document.getElementById('MFooter_Main_Top_Pictures_id').cloneNode(true);
        if(bflagSearchField){
            let cloneSearchField = document.getElementById('searchFieldLi').cloneNode(true);
            document.getElementById('searchFieldLi').remove();
            document.getElementById('navigation_topimg_ul_id').insertAdjacentElement(
                'afterbegin',
                cloneSearchField
            );
        }
        document.getElementById('MFooter_Main_Top_About_etc_id').remove();
        document.getElementById('MFooter_Main_Top_Pictures_id').remove();
        document.getElementById('selectMainULList').remove();
        document.getElementById('Header_Bottom_More').remove();
        if(bflagCheckMainUlList){
            document.getElementById('selectGenreList').remove();
            bflagCheckMainUlList = false;
        }
        document.getElementById('MFooter_Main_Top_id').insertAdjacentElement(
            'afterbegin',
            cloneFooterLeftUl
        );
        document.getElementById('MFooter_Main_Top_id').insertAdjacentElement(
            'beforeend',
            cloneFooterRightUl
        );
        document.getElementById('Movies_Nav_id').insertAdjacentElement(
            'beforeend',
            cloneMainSquares
        );
        document.getElementById('Movies_Nav_id').insertAdjacentElement(
            'afterbegin',
            cloneMainUlList
        );
        document.getElementById('Header_Bottom_Info').insertAdjacentElement(
            'afterbegin',
            cloneHeaderInfo
        );
        document.getElementById('bottomimg_id').insertAdjacentElement(
            'beforeend',
            cloneMovieinfo
        );
        bflagResizeChange = false;
        if(document.getElementById('Lypa').classList.contains('active')){
            document.getElementById('Lypa').classList.remove('active');
            if(bflagSearchField)
                document.getElementById('searchFieldLi').classList.remove('active');
        } 
    }
}

const GenreListArray = [
    'All',
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Drama',
    'Family',
    'Fantasy',
    'Sci-fi'
]

function createSelectGenre(){
    let sList = '<select id="selectGenreList" name="selectGenre">'
    let counter = 0;
    for (const iterator of GenreListArray) {
        sList += '\n' + '<option value="selectGenre' + String(counter) + '">' + iterator + '</option>';
        ++counter;
    }
    sList += '\n' + '</select>';
    return sList;
}

let bflagCheckMainUlList = false;
function checkMainULList(){
    if(getSelectedMainUlList() == "Genre"&& !bflagCheckMainUlList){
        document.getElementById('Movies_Nav_id').insertAdjacentHTML(
            'beforeend',
            createSelectGenre()
        );
        bflagCheckMainUlList = true;
    }else if(bflagCheckMainUlList){
        document.getElementById('selectGenreList').remove();
        bflagCheckMainUlList = false;
    }
}

let bflagBurger = true;
function clickBurger(){
    if(bflagBurger){
        document.getElementById('header_burger_id').classList.add('active');
        document.getElementById('navigation_topimg_id').classList.add('active');
        if(bflagSearchField)
            document.getElementById('searchFieldLi').classList.add('active');
        document.getElementById('Lypa').classList.add('active');
    }else{
        document.getElementById('header_burger_id').classList.remove('active');
        document.getElementById('navigation_topimg_id').classList.remove('active');
        if(bflagSearchField)
            document.getElementById('searchFieldLi').classList.remove('active');
        document.getElementById('Lypa').classList.remove('active');
    }
    bflagBurger = !bflagBurger;
}

(function() {
    window.addEventListener("resize", resizeTrigger);
    var resizeTimeout;
    function resizeTrigger() {
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(function() {
                resizeTimeout = null;
                resizeChange();
            }, 66);
        }
    }
    resizeChange();
}());