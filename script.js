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
const images = document.querySelectorAll('#mainimg_id img');
const mainimgid = document.querySelector('#mainimg_id');
let widthMainImgID;
function resizeChange(){
    widthMainImgID = document.querySelector('#slides').offsetWidth;
    mainimgid.style.width = widthMainImgID * images.length + 'px';
    images.forEach(item => {
        item.style.width = widthMainImgID + 'px';
        item.style.height = 'auto';
    })
    let witdh = parseInt(window.innerWidth);
    if(witdh <= 815 && !bflagResizeChange){
        if(bflagSearchField){
            let cloneSearchField = document.getElementById('searchFieldLi').cloneNode(true);
            document.getElementById('searchFieldLi').remove();
            document.getElementById('navigation_topimg_ul_id').insertAdjacentElement(
                'beforeend',
                cloneSearchField
            );
        }
        document.getElementById('Movies_Nav_Div_Squares_id').remove();
        document.getElementById('Movies_Nav_Left_id').remove();
        document.getElementById('Movies_Nav_id').insertAdjacentHTML(
            'afterbegin',
            getMainULList()
        );
        bflagResizeChange = true;
        if(!document.getElementById('Lypa').classList.contains('active')){
            document.getElementById('Lypa').classList.add('active');
            if(bflagSearchField)
                document.getElementById('searchFieldLi').classList.add('active');
        }  
    }else if(witdh > 815 && bflagResizeChange){
        if(bflagSearchField){
            let cloneSearchField = document.getElementById('searchFieldLi').cloneNode(true);
            document.getElementById('searchFieldLi').remove();
            document.getElementById('navigation_topimg_ul_id').insertAdjacentElement(
                'afterbegin',
                cloneSearchField
            );
        }
        document.getElementById('selectMainULList').remove();
        if(bflagCheckMainUlList){
            document.getElementById('selectGenreList').remove();
            bflagCheckMainUlList = false;
        }
        document.getElementById('Movies_Nav_id').insertAdjacentElement(
            'beforeend',
            cloneMainSquares
        );
        document.getElementById('Movies_Nav_id').insertAdjacentElement(
            'afterbegin',
            cloneMainUlList
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

let bflagMore = true;
function clickMore(){
    bflagMore ? document.getElementById('Movie_info_id').classList.add('active') : document.getElementById('Movie_info_id').classList.remove('active');
    bflagMore = !bflagMore;
}

let bflagBurger = true;
function clickBurger(){
    if(bflagBurger){
        document.getElementById('header_burger_id').classList.add('active');
        document.getElementById('navigation_topimg_id').classList.add('active');
        if(bflagSearchField)
            document.getElementById('searchFieldLi').classList.add('active');
        document.getElementById('Lypa').classList.add('active');
        document.getElementById('bottomIMG_id').style.zIndex = 0;
    }else{
        document.getElementById('header_burger_id').classList.remove('active');
        document.getElementById('navigation_topimg_id').classList.remove('active');
        if(bflagSearchField)
            document.getElementById('searchFieldLi').classList.remove('active');
        document.getElementById('Lypa').classList.remove('active');
        setTimeout(() => document.getElementById('bottomIMG_id').style.zIndex = 3, 300);
    }
    bflagBurger = !bflagBurger;
}

function clickViewInfo(string){
    document.getElementById(string).classList.contains('active') ? document.getElementById(string).classList.remove('active') : document.getElementById(string).classList.add('active');
}

function slider(index){
    document.getElementById('mainimg_id').style.left = index > 0 ? (index * -100) + '%' : 0;
}

function checkedSlider(){
    for(let i = 1; i <= 5; ++i){
        let a = document.getElementById('r' + i);
        let b = document.getElementById('label' + i);
        if(a.checked){
            b.style.backgroundColor = 'rgb(0, 203, 237)';
            b.style.opacity = 1;
        }
        else{
            b.style.backgroundColor = 'white';
            b.style.opacity = 0.7;
        }
    }
}
checkedSlider();

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