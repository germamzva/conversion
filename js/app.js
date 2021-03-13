$(document).ready(function(){

	// tab content
var triggerTabList = [].slice.call(document.querySelectorAll('#tab_block a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})

});