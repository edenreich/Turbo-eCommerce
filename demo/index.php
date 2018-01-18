<!DOCTYPE html>
<html>
<head>
	<title>Turbo-eCommerce Module</title>
	<script type="text/javascript" src="/js/bundle.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<h2 class="col-xs-offset-1"><a href="/">Turbo-eCommerce</a></h2>
<hr>
<div class="container">
<div class="turbo-ecommerce">
	<div class="cart"></div>
	<div class="filter"></div>
	<div class="products"></div>
	<nav class="pagination-links"></nav>
</div></div>
<script type="text/javascript">
	(function(TurboeCommerce) {

		var shop = new TurboeCommerce({
			debug_level: 'error',
			class: 'col-xs-12',
			element: '.turbo-ecommerce',
			inject_libraries: ['bootstrap'],
			components: ['Products', 'Services', 'Filter', 'Cart', 'Pagination']
		});

		shop.Products.setup({
			element: '.products',
			class: 'col-xs-12 col-md-8',
			item_class: 'col-xs-12 col-md-4',
			add_button_class: 'btn btn-primary',
			favorite_button_class: 'btn btn-danger',
			min_width: '200px',
			max_width: '300px',
			height: '280px',
			attributes: ['name', 'price', 'deliveryTime', 'image'],
			url: 'products.php',
		});

		shop.Pagination.setup({
			element: '.pagination-links',
			class: 'col-xs-offset-4 col-xs-8',
			per_page: 5,
			total_items: 15,
			proccessing: 'client-side',
		});

		shop.Events.subscribe('products.loading', function(product) {
			// handle products while loading.
		});

		shop.Events.subscribe('products.loaded', function(products) {
			// handle products after loaded.
		});

		shop.Filter.setup({
			element: '.filter',
			class: 'col-xs-12 col-md-3',
		});

		shop.Cart.setup({
			element: '.cart',
			cookie_name: 'cart',
			placement: 'right-top',
			hover_color: 'orange'
		});

	})(TurboeCommerce);
</script>
</body>
</html>