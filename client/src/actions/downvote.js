export function toggleDownvote(pitchId) {
  return  {
    type: 'DOWNVOTE',
    pitchId
  }
}