import React from 'react'
import { connect } from 'react-redux'

import { toCreateGroup } from '../../actions/index.js'

class CreateGroup extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const type_options= [
			'Select an Option',
			'Club',
			'Department',
			'Else'
			]

		let onSubmit = (e) => {
			console.log("create onSubmit")
			e.preventDefault()
			if(this.grouptype !== undefined && this.grouptype.value !== 'Select an Option' && this.groupname !== undefined) {
				this.props.onCreateGroup(this.grouptype, this.groupname)
			}
		}

		return(
			<div>
				<form onSubmit={onSubmit}>
					<div className="CreateGroup">
						<span className="title1">Group Type </span>
						<select
							name="grouptype"
							ref={ node => {this.grouptype=node;} }
							className="type-select"
						>
							{type_options.map(option => {
								return <option value={option} key={option} >{option}</option>
							})}
						</select>
						<br />
						<br />
						<span className="title1">Group Name</span>
						<input
							type="text"
							name="groupname"
							ref={ node => {this.groupname=node;} }
							//value={this.groupname}
							className="name-input"
						/>
						<br/>

						<button type="submit">CREATE GROUP</button>

					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	all_groups: state.all_groups,
})


const mapDispatchToProps = (dispatch) => ({
	onCreateGroup: (grouptype, groupname) => dispatch(toCreateGroup(grouptype, groupname))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroup)
