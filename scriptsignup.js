let bflagResizeChange = false;
function resizeChange(){
    let witdh = parseInt(window.innerWidth);
    if(witdh <= 815 && !bflagResizeChange){
        let cloneFooterLeftUl = document.getElementById('MFooter_Main_Top_About_etc_id').cloneNode(true);
        let cloneFooterRightUl = document.getElementById('MFooter_Main_Top_Pictures_id').cloneNode(true);
        document.getElementById('MFooter_Main_Top_About_etc_id').remove();
        document.getElementById('MFooter_Main_Top_Pictures_id').remove();
        document.getElementById('MFooter_Main_T').insertAdjacentElement(
            'beforeend',
            cloneFooterLeftUl
        );
        document.getElementById('MFooter_Main_T').insertAdjacentElement(
            'beforeend',
            cloneFooterRightUl
        );
        bflagResizeChange = true;
    }else if(witdh > 815 && bflagResizeChange){
        let cloneFooterLeftUl = document.getElementById('MFooter_Main_Top_About_etc_id').cloneNode(true);
        let cloneFooterRightUl = document.getElementById('MFooter_Main_Top_Pictures_id').cloneNode(true);
        document.getElementById('MFooter_Main_Top_About_etc_id').remove();
        document.getElementById('MFooter_Main_Top_Pictures_id').remove();
        document.getElementById('MFooter_Main_Top_id').insertAdjacentElement(
            'afterbegin',
            cloneFooterLeftUl
        );
        document.getElementById('MFooter_Main_Top_id').insertAdjacentElement(
            'beforeend',
            cloneFooterRightUl
        );
        bflagResizeChange = false;
    }
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