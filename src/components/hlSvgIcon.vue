<!--
  Wrapper for svg icons. This component forces
  an svg icon to match the size of the text next to it.
-->
<template>
	<div class="icon baseline">
		<slot/>
	</div>
</template>

<style>
.icon {
	display: inline-flex;
	align-self: center;
}

.icon svg,
.icon img {
	height: 1em;
	width: 1em;
}

.icon.baseline svg,
.icon img {
	top: 0.125em;
	position: relative;
}
</style>
