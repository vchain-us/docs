<script setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
</script>

<template>
	<ParentLayout>
		<template #page-bottom>
			<div class="footer">© {{ new Date().getFullYear() }} Codenotary</div>
		</template>
	</ParentLayout>
</template>

<style>
:root {
	--azure: #00bef2;
	--black: #111;
	--black-lighter: #333;
	--blue: #244583;
	--blue-lightest: #9fcbef;
	--blue-lighter: #1aa0e8;
	--blue-light: #147cb6;
	--cyan: #36d6d0;
	--dark: #13274b;
	--darker: #1c273a;
	--grey: #a9c1cc;
	--grey-light: #ebece9;
	--grey-dark: #768e98;
	--light: #faf9f8;
	--green: #24c4a1;
	--green-dark: #13555f;
	--orange: #febf2d;
	--red: #db3216;
	--white: #fff;
	--white-dark: #ccc;
	--white-darker: #eee;
}

html:not(.dark) {
	--c-brand: var(--blue);
	--c-brand-light: var(--blue-light);
	--c-bg: var(--white);
	--c-bg-light: var(--light);
	--c-bg-lighter: var(--white-darker);
	--c-bg-arrow: var(--white-dark);
	--c-text: var(--dark);
	--c-text-light: var(--grey-dark);
	--c-text-lighter: var(--grey-dark);
	--c-text-lightest: var(--grey-dark);
	--c-text-quote: var(--grey-dark);
	--c-border: var(--light);
	--c-border-dark: var(--grey-dark);
	--c-tip: var(--blue-lighter);
	--c-warning: var(--orange);
	--c-danger: var(--red);
	--code-bg-color: var(--dark);
	--code-ln-color: var(--grey-dark);
}

html.dark {
	--c-brand: var(--blue-lighter);
	--c-brand-light: var(--blue-light);
}

.dark .navbar .logo {
	filter: invert(90%);
}

.home .hero .action-button.primary {
	color: var(--white);
}

.footer {
	text-align: center;
}
</style>
