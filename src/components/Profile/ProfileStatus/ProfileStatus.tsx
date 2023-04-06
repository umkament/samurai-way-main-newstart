import React from "react";


type ProfileStatusPropsType = {
status: string
  updateStatusProfile: (userId: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  statusInputRef = React.createRef()
  state = {
    editMode: false,
    status: this.props.status
  }
  activateEditMode=()=>{
this.setState({
  editMode: true
})
  }

  deactivateEditMode=()=>{
    this.setState({
      editMode: false
    })
    this.props.updateStatusProfile(this.state.status)
  }
  onStatusChange=(e: { currentTarget: { value: any; }; })=>{
    this.setState({
      status: e.currentTarget.value
    })

  }


  render() {

    return <>
      {!this.state.editMode &&
      <div>
        <span onDoubleClick={this.activateEditMode}>{this.props.status || "empty status"}</span>
      </div>}
      {this.state.editMode &&
      <div>
        <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus={true} value={this.state.status}/>
      </div>}
    </>
  }
}