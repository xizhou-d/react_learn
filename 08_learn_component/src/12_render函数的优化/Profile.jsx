import { memo } from 'react'

// const Profile = memo(function(props) {
//     console.log('Profile render')
//     return <h2>profile: {props.message}</h2>
// })

// function Profile(props) {
//     console.log('Profile render')
//     return <h2>profile: {props.message}</h2>
// }

// function Profile() {
//     console.log('Profile render')
//     return <h2>profile Page.</h2>
// }

const Profile = memo(function Profile() {
    console.log('Profile render')
    return <h2>profile Page.</h2>
})

export default Profile