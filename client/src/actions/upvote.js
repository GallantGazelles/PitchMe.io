export function toggleUpvote(pitchId) {
  return  {
    type: 'UPVOTE',
    pitchId
  }
}