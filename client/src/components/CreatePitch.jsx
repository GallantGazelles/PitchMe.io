import React, { Component } from 'react';
import {
  Button, Checkbox, Container, Divider, Form, Header, Icon, Input, Radio, Select, Segment, TextArea
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { pitchName, pitchVideo, pitchWebsite, pitchProfile, 
  pitchBlurb, pitchCategory, createPitch } from '../actions/createPitch';



class CreatePitch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categories = [
      { key: '1', value: '1', text: 'Tech' },
      { key: '2', value: '2', text: 'Games' },
      { key: '3', value: '3', text: 'Books' },
      { key: '4', value: '4', text: 'iPhone' },
      { key: '5', value: '5', text: 'Android' },
      { key: '6', value: '6', text: 'Productivity' }
    ];

    const { dispatch } = this.props
    const { userid, name, video, website, profile, blurb, category_id } = this.props
    const { submitName, submitVideo, submitWebsite, submitProfile, submitBlurb, submitCategory, submitPitch } = this.props

    return (
      <Container>
        <Segment padded>
          <Segment basic clearing textAlign='center'>
            <Header as='h1'>Start Your Pitch!</Header>
          </Segment>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field 
                control={Input} 
                label='Pitch Title'
                onChange = { (e) => submitName(e.target.value) }
              />
              <Form.Field control={Input} label='Logo' placeholder='.jpg or .png square (minimum size: 300x300px)' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field 
                control={Input} 
                placeholder='60 seconds maximum' 
                label='Video URL (Youtube/Vimeo)'
                onChange = { (e) => submitVideo(e.target.value) } 
              />
              <Form.Field 
                control={Input} 
                label='Blurb' 
                placeholder='140 characters'  
                onChange = { (e) => submitBlurb(e.target.value) }
              />
              <Form.Field 
                control={Input} 
                label='Website' 
                placeholder='Your website'
                onChange = { (e) => submitWebsite(e.target.value) }
              />
            </Form.Group>
            <Form.Field control={TextArea} label='Description' placeholder='Tell us more about your idea...' onChange = { (e) => submitProfile(e.target.value)}/>
            <Form.Dropdown 
              placeholder='Select Category' 
              search selection options={categories}
              onChange = { (e, data) => submitCategory(data.value) }
            />
            <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' /> 
            <Form.Button onClick={(e)=> {
              e.preventDefault();
              submitPitch(userid, name, video, website, profile, blurb, category_id)
            }}>Upload Pitch!</Form.Button>
          </Form>
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.createPitch,
    userid: state.user.userid
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    submitName: (name) => { dispatch(pitchName(name)) },
    submitVideo: (video) => { dispatch(pitchVideo(video)) },
    submitWebsite: (website) => { dispatch(pitchWebsite(website)) },
    submitProfile: (profile) => { dispatch(pitchProfile(profile)) },
    submitBlurb: (blurb) => { dispatch(pitchBlurb(blurb)) },
    submitCategory: (id) => { dispatch(pitchCategory(id)) },
    submitPitch: (user_id, name, video, website, profile, blurb, category_id) => { 
      dispatch(createPitch(user_id, name, video, website, profile, blurb, category_id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePitch);

