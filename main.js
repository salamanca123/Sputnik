(function(){
	const burderItem = document.querySelector('.burger');
	const menu = document.querySelector('.header_container');
	const menuCloseItem = document.querySelector('.header_container-close');
	const menuLinks = document.querySelectorAll('.header_item')
	burderItem.addEventListener('click', () => {
		menu.classList.add('header_container_active');
	});
	menuCloseItem.addEventListener('click', () =>{
		menu.classList.remove('header_container_active');
	});
	if (window.innerWidth <= 850) {
		for (let i = 0; i < menuLinks.length; i += 1) {
			menuLinks[i].addEventListener('click', () => {
				menu.classList.remove('header_container_active');
			});
		}
	}
}());



		let msk_link = document.querySelector('.msk_link');
        let nn_link  = document.querySelector('.nn_link');
        let vlg_link  = document.querySelector('.vlg_link');
        let msk_map = document.querySelector('.msk_map');
        let nn_map = document.querySelector('.nn_map');
        let vlg_map = document.querySelector('.vlg_map');




        nn_link.addEventListener('click', ()=> {
				msk_map.classList.remove('view')
                nn_map.classList.add('view')
                vlg_map.classList.remove('view')

        })
        
        vlg_link.addEventListener('click', ()=> {
            vlg_map.classList.add('view')
            nn_map.classList.remove('view')
            msk_map.classList.remove('view')
        })

        msk_link.addEventListener('click', ()=> {
				vlg_map.classList.remove('view')
                nn_map.classList.remove('view')
                msk_map.classList.add('view')
        })
