const shuffle = (items) => {
 const randomItems = items.sort(() => Math.random() - 0.5);
 return randomItems;
}

export default shuffle;