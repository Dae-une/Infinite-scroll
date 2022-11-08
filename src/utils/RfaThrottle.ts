// export const RfaThrottle = (handler: (...args: any[]) => void) => {
//   let ticking = false;
//   return function (this: any, ...args: any[]) {
//     if (!ticking) {
//       window.requestAnimationFrame(() => {
//         handler.apply(this, args);
//         ticking = false;
//       });
//       ticking = true;
//     }
//   };
// };

export const RfaThrottle = (handler: (...args: any[]) => void) =>
  function (this: any, ...args: any[]) {
    window.requestAnimationFrame(() => {
      handler.apply(this, args);
    });
  };
