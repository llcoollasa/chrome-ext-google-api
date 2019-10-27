// chrome.browserAction.onClicked.addListener(function() {
//     chrome.tabs.create({url: 'index.html'});
// });

chrome.contextMenus.create({
    id: "add-to-fav",
    title: "Add to Favourite",
    contexts: ["image"]
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
    if (info.menuItemId === 'add-to-fav') {
        if (info.mediaType === 'image') {
            console.log(info) 
            document.getElementById('contentList').append('sds');
            // chrome.storage.local.set({'files': info.srcUrl}, function() {
            //     console.log('Value is set to ' + info.srcUrl);
            //     alert( info.srcUrl);
            // });


            // chrome.storage.local.get(['files'], function(result) {
            //     alert(result);
            // });
        }
    }

});