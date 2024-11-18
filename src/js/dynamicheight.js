document.querySelectorAll('.link-card').forEach((card) => {
	const content = card.querySelector('p'); // Target the expandable content

	card.addEventListener('toggle', () => {
		if (card.open) {
			// Set a very large max-height (just enough to ensure the content is fully visible)
			content.style.maxHeight = content.scrollHeight + 'px';

			// Once the transition ends, reset max-height to 'none' to allow dynamic content height
			content.addEventListener(
				'transitionend',
				() => {
					content.style.maxHeight = 'none';
				},
				{ once: true } // Ensure this only runs once per animation
			);
		} else {
			// Set the max-height explicitly before transitioning (for smooth collapse)
			content.style.maxHeight = content.scrollHeight + 'px';

			// Force a reflow to apply the height change
			void content.offsetHeight;

			// Animate to a max-height of 0
			content.style.maxHeight = '0';
		}
	});
});
