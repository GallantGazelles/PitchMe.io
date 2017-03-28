const follow = (state = false, action) => {
  switch (action.type) {
    case 'toggleFollow':
      return  !state;
    default: 
      return state;
  }
}

export default follow;