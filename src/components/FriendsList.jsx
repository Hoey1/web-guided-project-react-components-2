import React from 'react'
// 1- FriendsList renders several Friend components, import Friend
import Friend from "./Friend";

export default function FriendsList(props) {
  // 2- What data does FriendsList need to do its job? Use destructuring
  // const friends = props.friends
  // const emphasis = props.emphasis
  const { friends, emphasis } = props

  console.log('the variable friends has a value of', friends)
  console.log('the variable emphasis has a value of', emphasis)

  return (
    <div className='list-friends container'>
      {/* 3- We need to loop over the data rendering a Friend as we go */}

      {
        // javascript expression
        friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />
        })
      }

      {/* {
        [<div>foo</div>, <div>bar</div>, <div>baz</div>]
      } */}

      {/* Each friend is going to need a `key` prop and also some other prop with data */}
    </div>
  )
}
