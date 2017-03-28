const initialState = {
  creatingPitch: false,
  error: null,
  name: null,
  video: null,
  website: null,
  profile: null,
  blurb: null,
  category_id: null
}

function createPitch(state=initialState, action) {
  switch (action.type) {
    case 'PITCH_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'PITCH_VIDEO':
      return {
        ...state,
        video: action.video
      }
    case 'PITCH_WEBSITE':
      return {
        ...state,
        website: action.website
      }
    case 'PITCH_PROFILE':
      return {
        ...state,
        profile: action.profile
      }
    case 'PITCH_BLURB':
      return {
        ...state,
        blurb: action.blurb
      }
    case 'PITCH_CATEGORY':
      return {
        ...state,
        category_id: action.id
      }
    case 'CREATING_PITCH':
      return {
        ...state,
        creatingPitch: true
      }
    case 'PITCH_CREATED':
      return {
        ...initialState
      };
    case 'PITCH_CREATED_ERROR':
      return {
        ...state,
        creatingPitch: false,
        error: action.error
      }
    default:
      return state;
  }
}

export default createPitch;