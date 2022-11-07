function search() {
    let inputValue = document.querySelector("#searchText").value;
    let finds = data.filter(el => el.name.includes(inputValue));
    insertDynamicList(finds)
}