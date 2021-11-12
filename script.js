
let nameArray = ["The Audacous", "The Empathetic", "The Lovable", "The Philisophical", "The Merciful", "The Acceptable", "The Sociable", "The Flexible"];

let picArray = ["https://honeysanime.com/wp-content/uploads/2016/08/sanrio-wallpaper-20160818064238-700x419.jpg", 
"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eb673e1a-084f-41a5-811a-f5d764178c0e/da97vk3-469c8a98-0894-4920-baf2-f13a5a42cf59.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ViNjczZTFhLTA4NGYtNDFhNS04MTFhLWY1ZDc2NDE3OGMwZVwvZGE5N3ZrMy00NjljOGE5OC0wODk0LTQ5MjAtYmFmMi1mMTNhNWE0MmNmNTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hTiwvjDWmdXDuhSYGCUBDNnAHx3ItHorIFtRfY1tJpc",
"https://wallpaperaccess.com/full/2212157.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-4CGbGHcpPGQ0JogN1VvQ-rx5Xm-6UwSXg&usqp=CAU", 
"http://michibiku.com/wp-content/uploads/2018/05/sanrio-characters-picross.jpg",
"https://zenstatic.blob.core.windows.net/blog/p1bu7v4hs6330153bo6hs3prt4.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2KWmOdndUCwCn3R9C7MdMTHe7FbZP7wNy54RAW-fLgtvvUCBj-_07XcXMLpwlhYgsYU&usqp=CAU"
];

let arrayLength = nameArray.length;
$(".question-text").text(`Lucky Number from 0 to ${arrayLength-1}?`);

$(".go").click(function() {
    let name = $(".name").val();
    let num = $(".Num").val();
    $(".result").text(`Hello Kitty bestows you the name ${nameArray[num]} ${name}!`);
    $("img").attr("src",picArray[num]);
    $(".QandA").hide();
    $(".go").hide();
    $(".possible").hide();
});

$(".reset").click(function() {
	location.reload();
});

$(".possible").click(function() {
	let name = $(".name").val();
    $(".result").text("Hello Kitty can grant you these names!!" );
    for (const element of nameArray) {
       $(".result").append( "<br>" +element + " " + name );
    }
});