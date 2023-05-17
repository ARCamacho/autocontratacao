declare var gtag: Function;

export const sendEvent = (eventName: string, eventParams: object) => {
  gtag('event', eventName, eventParams);
};
