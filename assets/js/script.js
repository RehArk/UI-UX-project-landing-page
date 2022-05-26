// let idScrollable = [
//   "section-presentation",
//   "section-about-us",
//   "section-steps",
//   "section-question",
//   "section-footer",
// ];

// let resetScrollDeltaHandle;

// let index = 0;
// let delta = 0;
// let minDelta = 20;

// let count = 0;

// function next() {
//   console.log(delta);

//   if (delta > 0) {
//     index++;
//   } else {
//     index--;
//   }

//   if (index < 0) {
//     index = idScrollable.length - 1;
//   }

//   if (index > idScrollable.length - 1) {
//     index = 0;
//   }

//   window.location.href = "#" + idScrollable[index];
//   delta = 0;
// }

// window.addEventListener(
//   "wheel",
//   (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     window.clearTimeout(resetScrollDeltaHandle);
//     delta += event.deltaY * 0.01;
//     if (delta > minDelta || delta < -minDelta) {
//       next();
//     }
//     count++;
//     console.log(count);
//     resetScrollDeltaHandle = window.setTimeout(() => {
//       delta = 0;
//     }, 100);
//   },
//   { passive: false }
// );
