export function toggleDownvote(userId, pitchId) {
  return  {
    type: 'DOWNVOTE',
    userId,
    pitchId
  }
}