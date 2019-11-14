// API Call
axios
	.all([
		axios.get('https://jsonplaceholder.typicode.com/posts'),
		axios.get('https://jsonplaceholder.typicode.com/users')
	])
	.then(
		axios.spread((posts, users) => {
			const testimonials = document.getElementById('testimonials');
			const carousel = document.createElement('div');
			carousel.setAttribute('class', 'carousel-inner wow fadeIn');

			users.data.filter((user) => user.id <= 4).map((user) => {
				const name = user.name;
				let post = posts.data.find((post) => user.id === post.userId);

				const container = document.createElement('div');
				let classes = 'carousel-item';

				if (user.id == 1) {
					classes += ' active';
				}
				container.setAttribute('class', classes);

				const content = document.createElement('div');
				content.setAttribute('class', 'py-4 my-4 d-flex flex-wrap justify-content-center d-block w-100');

				const img = document.createElement('img');
				img.src = `./assets/images/person_${user.id}.jpg`;
				img.setAttribute('class', 'thumbnail');

				const quote = document.createElement('blockquote');
				quote.setAttribute('class', 'quote');
				post = post.body.charAt(0).toUpperCase() + post.body.slice(1);
				quote.textContent = `"${post}"`;

				const author = document.createElement('h6');
				author.textContent = name;

				testimonials.appendChild(carousel);
				carousel.appendChild(container);
				container.appendChild(content);
				content.appendChild(img);
				content.appendChild(quote);
				content.appendChild(author);
			});
		})
	);

// Features Section
setFeatures = () => {
	const features = document.getElementById('features');
	const container = document.createElement('div');
	container.setAttribute('class', 'container-fluid');

	const row = document.createElement('div');
	row.setAttribute('class', 'row d-flex justify-content-center');

	const title = document.createElement('h3');
	title.textContent = 'Features';
	title.setAttribute('class', 'title text-center font-weight-bold');

	const featureList = [
		{ title: 'Business Consulting', icon: 'icon-autorenew' },
		{ title: 'Market Analysis', icon: 'icon-store_mall_directory' },
		{ title: 'User Monitoring', icon: 'icon-shopping_basket' },
		{ title: 'Insurance Consulting', icon: 'icon-settings_backup_restore' },
		{ title: 'Customer Satisfied', icon: 'icon-smile-o' },
		{ title: 'Plug & Play', icon: 'icon-power' }
	];

	featureList.map((feature) => {
		const card = document.createElement('article');
		card.setAttribute('class', 'card col-md-5 col-lg-3 feature-card wow fadeIn');

		const circle = document.createElement('div');
		circle.setAttribute('class', 'icon-container');

		const icon = document.createElement('span');
		icon.setAttribute('class', feature.icon);

		const h5 = document.createElement('h5');
		h5.textContent = feature.title;
		h5.setAttribute('class', 'white-hover');

		const p = document.createElement('p');
		p.setAttribute('class', 'white-hover');
		p.textContent =
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.';

		const a = document.createElement('a');
		a.textContent = 'Learn More';
		a.setAttribute('href', '#');

		features.appendChild(container);
		container.appendChild(title);
		container.appendChild(row);
		row.appendChild(card);
		circle.appendChild(icon);
		card.appendChild(circle);
		card.appendChild(h5);
		card.appendChild(p);
		card.appendChild(a);
	});
};

setFeatures();

// Navbar
toggleMenu = () => {
	let menu = document.getElementById('menu');

	if (menu.className === 'nav') {
		menu.className += ' show';
	} else menu.className = 'nav';
};

document.getElementById('menuToggle').addEventListener('click', toggleMenu);
