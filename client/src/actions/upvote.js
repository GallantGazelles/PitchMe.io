export function toggleUpvote(userId, pitchId) {
  return  {
    type: 'UPVOTE',
    userId,
    pitchId
  }
}