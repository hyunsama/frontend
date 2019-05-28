import React from 'react';

const DesignTemp = ({ design, group, my_groups, onClickPost, onClickLike, onClickUnlike, onClickDelete }) => {
    return (
        <div>
            <div>
                id: {design.id}<br/>
                owner: {design.owner}<br/>
                likes: {design.likes}<br/>
                body: {design.detail_body}<br/>
                sleeve: {design.detail_sleeve}<br/>
                banding: {design.detail_banding}<br/>
                stripe: {design.detail_stripes}<br/>
                button: {design.detail_buttons}<br/>
                {console.log(design)}
            </div>
            {(group.group_type === "UR")
                ? (<div>
                        <select id="post_group">
                        {my_groups.filter(group => {
                            return group.group_type !== "UR"
                        }).map(option => {
                            return <option value={option.id}> {option.group_type} {option.group_name} </option>
                        })}
                        </select>
                        <button class="post_btn" type="button" 
                            onClick={() => onClickPost(document.getElementById("post_group").value)}>
                            POST
                        </button>
                    </div>)
                : (design.liked 
                    ? (<button onClick={onClickUnlike}>UNLIKE</button>)
                    : (<button onClick={onClickLike}>LIKE</button>)
                    )
            }

            {design.auth && <button onClick={onClickDelete}>DELETE</button>}
            <br/>
        </div>
    )
}

export default DesignTemp
