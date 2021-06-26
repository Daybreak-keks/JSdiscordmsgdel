
var user = Object.values(webpackJsonp.push([[], {['']: (_, e, r) => {e.cache = r.c}},[['']]]).cache).find(m => m.exports && m.exports.default && m.exports.default.getCurrentUser !== void 0).exports.default.getCurrentUser().username
var channel = document.URL.split('/')[document.URL.split('/').length-1]
var time = 0
var token = Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getToken !== void 0).exports.default.getToken()
console.log(`Searching for messages by: "${user}"`)
var interval_ = setInterval(c => {
const elems = document.getElementsByTagName('*')
for (let index = 0; index < elems.length; index++) {
        const element = elems[index];
        window.scrollTo(0, 0)
        try {
        element.classList.forEach(x => {if (x.includes('messageContent')) {
            if (element.parentNode.children[1].innerText.includes(user)) {
            var message_id = element.parentNode.parentNode.id.split('-')[2]
            setTimeout(() => {
            time += 1
            fetch(`https://discord.com/api/v9/channels/${channel}/messages/${message_id}`, {method:"DELETE", headers: {authorization: token}}).then(r=>{console.log(`Deleted ${message_id}`)})
}, index +1000+ time)    
}
}})
} catch(e) {
    if (e.toString().includes('TypeError')) {clearInterval(interval_)} else {console.log(e)}}}
}, 4000)

// run this in el discord console
