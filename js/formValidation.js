'use strict'

let chBoxes = $('.checkbox');
chBoxes.on('click', (e) => {
	let target = document.querySelector(`[name=${e.currentTarget.dataset.target}]`);

	if (e.currentTarget.checked) {
		target.setAttribute('required', true);
		target.classList.add('required-field');
		return;
	}
	target.removeAttribute('required');
	target.classList.remove('required-field');
})

let inputs = [];
for (let index = 0; index < chBoxes.length; index++) {
	inputs.push(document.querySelector(`[name=${chBoxes[index].dataset.target}]`))
}

$(inputs).on('input', (e) => {
	if (e.currentTarget.getAttribute('required')) {
		e.currentTarget.classList.remove('required-field');
		if (e.currentTarget.value) {
			e.currentTarget.classList.add('required-field');
		}
	}
})

let form = document.getElementById('contact-form');
form.onsubmit = async (e) => {
	e.preventDefault();
	let formData = new FormData(form);
	let data = {
		username_pkey: formData.get('username_pkey'),
		accept_telegram: formData.get('accept_telegram'),
		tg_nickname: formData.get('tg_nickname'),
		accept_sms: formData.get('accept_sms'),
		phone_number: formData.get('phone_number'),
		accept_dis: formData.get('accept_dis'),
		dis_nickname: formData.get('dis_nickname'),
		accept_all: formData.get('accept_all'),
		username: formData.get('username')
	};


};
