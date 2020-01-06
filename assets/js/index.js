
// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
function myFunction() {
	const x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}


function auction_nudge_loaded() {
	//Get the Your eBay Listings container
	let an_wrap = document.getElementById('auction-nudge-items');

	//Get all 'view' links
	let an_links = an_wrap.getElementsByClassName('an-view');

	//Loop over each link
	for (let i = 0; i < an_links.length; i++) {
		//Replace the text in each link
		an_links[i].innerHTML = an_links[i].innerHTML.replace('Buy It Now',
			'View on <span style="color:#E53238;    font-weight: bold;">e</span><span style="color:#0064D3; font-weight: bold;">B</span><span style="color:#F5AF02;    font-weight: bold;">a</span><span style="color:#86B817;    font-weight: bold;">y</span>'
		);
	}
}
