nav = document.currentScript.parentElement

names= ['Attend', 'Perform',  
        'Contribute', 'Connect',  
        'Create', 'Vendors',  
        'Our Philosophy'] 
 
for (name of names) 
{ 
nav.insertAdjacentHTML ('beforeend', `<a><span><span>${name}</span></span></a>`)
nav.lastElementChild.children[0].addEventListener("touchstart", handle_span_touch) 
}

nav.addEventListener("touchstart", handle_nav_touch)




function handle_span_touch (touch_ev)
{
touch_ev.stopPropagation()

target = touch_ev.changedTouches[0].target.parentElement

for (sib of target.parentElement.children)
{
if (sib == target) continue
sib.classList.remove('expand','top')
sib.expanded = false
}

if (target.expanded) target.classList.remove('expand')
else target.classList.add('expand', 'top')
target.expanded = !target.expanded
}

function handle_nav_touch (touch_ev)
{
target = touch_ev.changedTouches[0].target
if (target.tagName == "NAV")
for (sib of target.children)
{
sib.classList.remove('expand', 'top')
sib.expanded = false
}

}
