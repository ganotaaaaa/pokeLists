const wrap = document.getElementById('js-wrap');
const wrap2 = document.getElementById('js-wrap2');
const fetchData = async () => {
    const res = await fetch('data.json');
    const data = await res.json();
    return data;
}

const displayTitle = async () => {
    const gundamDatas = await fetchData();
    for(const ms of gundamDatas) {
        console.log(ms)
        wrap.innerHTML += `<button>${ms.title}</button>`;
    }
}

const displayMs = async () => {
    
}



displayTitle();
displayMs()