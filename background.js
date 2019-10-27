// chrome.browserAction.onClicked.addListener(function() {
//     chrome.tabs.create({url: 'index.html'});
// });

chrome.contextMenus.create({
    id: "add-to-fav",
    title: "Add to Favourite",
    contexts: ["all"]
});

chrome.contextMenus.create({
    id: "add-to-fav1",
    parentId: "add-to-fav",
    title: "Add",
    contexts: ["all"]
});

chrome.contextMenus.create({
    id: "add-to-fav2",
    parentId: "add-to-fav",
    title: "Clear",
    contexts: ["all"]
});
 
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    /*
        editable: false
        frameId: 0
        linkUrl: "https://www.google.com/search?q=images&sxsrf=ACYBGNSAHqtywAdMWJUll8xfgU2DAr3MZg:1571517069892&tbm=isch&source=iu&ictx=1&fir=CJwabmfmxl2ySM%253A%252CpFs_4Fcq5AgpmM%252C_&vet=1&usg=AI4_-kSU-9KpsNOfqStD6gh2hIt498Asbg&sa=X&ved=2ahUKEwjFitallanlAhVWk3AKHcXWAFoQ9QEwAHoECAMQLw#imgrc=CJwabmfmxl2ySM:"
        mediaType: "image"
        menuItemId: "some-command"
        pageUrl: "https://www.google.com/search?q=images&oq=images&aqs=chrome..69i57j69i60j69i65j0l3.1399j0j9&sourceid=chrome&ie=UTF-8"
        srcUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3

    */ 
    if (info.menuItemId === 'add-to-fav1') {
            
            var items = JSON.parse(localStorage.getItem('CUSTOM_CLIPBOARD'));

            var item = {
                id: Date.now(),
                data: info
            }; 
 
            if (!Array.isArray(items)) {
                localStorage.setItem('CUSTOM_CLIPBOARD', JSON.stringify([item])); 
            } else {
                items.push(item);                
                localStorage.setItem('CUSTOM_CLIPBOARD', JSON.stringify(items)); 
            }

            console.log('Items', JSON.parse(localStorage.getItem('CUSTOM_CLIPBOARD')));
         
    }

    if (info.menuItemId === 'add-to-fav2') {
        localStorage.removeItem("CUSTOM_CLIPBOARD");
        alert('cleard');
    }

});