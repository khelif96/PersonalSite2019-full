
function doSomething(element) {
  const { body } = document;
  const html = document.documentElement;

  // Calculate the height of the window
  const viewHeight = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

  // Calculate the height of the overall dom element
  const pageHeight = Math.max(element.scrollHeight, element.offsetHeight,
    element.clientHeight, element.scrollHeight, element.offsetHeight);

  // Calculate how many pages are in the element
  const viewCount = Math.floor(pageHeight / viewHeight);

  const scrollPos = element.pageYOffset || element.scrollTop || 0;

  // Find out how many pages exist in the element and their starting height assuming
  // each page has the same height
  const viewBoundarys = [];
  for (let i = 0; i < viewCount; i += 1) {
    viewBoundarys.push(i * viewHeight);
  }

  // Try to determine what page we visited and scroll to it
  for (let i = viewBoundarys.length - 1; i >= 0; i -= 1) {
    if (scrollPos >= viewBoundarys[i]) {
      element.scroll({ top: viewBoundarys[i], behavior: 'smooth' });
      break;
    }
  }
  const distancesTo = [];
  for (let i = 0; i < viewBoundarys.length; i += 1) {
    distancesTo.push(scrollPos - viewBoundarys[i]);
  }
  // element.scroll({ top: viewBoundarys[distancesTo.indexOf(Math.min(distancesTo))], behvaior: 'smooth' });
  // console.log(distancesTo);
  // console.log(viewBoundarys);
}
function scroll(element) {
  let timeout = setTimeout(() => { doSomething(element); }, 300);
  const scrollCurrent = element.pageYOffset || element.scrollTop || 0;

  element.addEventListener('scroll', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => { doSomething(element); }, 300);
  });
}

export default scroll;
