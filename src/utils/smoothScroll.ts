export const smoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 64, // Adjust for navbar height
      behavior: 'smooth'
    });
  }
}; 