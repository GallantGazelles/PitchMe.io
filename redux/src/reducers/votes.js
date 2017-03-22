const votes = (state = 0, action) => {
  switch (action.type) {
    case 'UPVOTE':
      return state + 1;
    case 'DOWNVOTE': 
      return state - 1;
    default:
      return state;
  }
}

export default votes;